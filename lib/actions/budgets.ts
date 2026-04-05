"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createBudget(data: {
  category: string;
  limitAmount: number;
  period: "monthly" | "yearly";
  month?: number;
  year?: number;
}) {
  const session = await auth.api.getSession();
  if (!session?.user) throw new Error("Unauthorized");

  const now = new Date();
  const budget = await prisma.budget.create({
    data: {
      userId: session.user.id,
      category: data.category,
      limitAmount: data.limitAmount,
      period: data.period,
      month: data.month || now.getMonth() + 1,
      year: data.year || now.getFullYear(),
    },
  });

  revalidatePath("/budgets");
  return budget;
}

export async function getBudgets() {
  const session = await auth.api.getSession();
  if (!session?.user) throw new Error("Unauthorized");

  const now = new Date();
  const budgets = await prisma.budget.findMany({
    where: {
      userId: session.user.id,
      year: now.getFullYear(),
      month: now.getMonth() + 1,
    },
  });

  // Calculate spent per category
  const budgetsWithSpent = await Promise.all(
    budgets.map(async (budget) => {
      const spent = await prisma.transaction.aggregate({
        where: {
          userId: session.user.id,
          category: budget.category,
          type: "expense",
          date: {
            gte: new Date(now.getFullYear(), now.getMonth(), 1),
            lt: new Date(now.getFullYear(), now.getMonth() + 1, 1),
          },
        },
        _sum: { amount: true },
      });

      return {
        ...budget,
        spent: spent._sum.amount || 0,
        remaining: budget.limitAmount - (spent._sum.amount || 0),
        percentUsed: Math.round(
          ((spent._sum.amount || 0) / budget.limitAmount) * 100
        ),
      };
    })
  );

  return budgetsWithSpent;
}

export async function deleteBudget(id: string) {
  const session = await auth.api.getSession();
  if (!session?.user) throw new Error("Unauthorized");

  const budget = await prisma.budget.findUnique({ where: { id } });
  if (budget?.userId !== session.user.id) throw new Error("Forbidden");

  await prisma.budget.delete({ where: { id } });
  revalidatePath("/budgets");
}