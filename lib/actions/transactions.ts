"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createTransaction(data: {
  amount: number;
  category: string;
  description: string;
  date: Date;
  type: "income" | "expense";
  accountId: string;
}) {
  const session = await auth.api.getSession();
  if (!session?.user) throw new Error("Unauthorized");

  const transaction = await prisma.transaction.create({
    data: {
      userId: session.user.id,
      amount: data.amount,
      category: data.category,
      description: data.description,
      date: data.date,
      type: data.type,
      accountId: data.accountId,
    },
  });

  revalidatePath("/dashboard");
  revalidatePath("/transactions");
  return transaction;
}

export async function getTransactions(filters?: {
  category?: string;
  type?: "income" | "expense";
  startDate?: Date;
  endDate?: Date;
}) {
  const session = await auth.api.getSession();
  if (!session?.user) throw new Error("Unauthorized");

  const transactions = await prisma.transaction.findMany({
    where: {
      userId: session.user.id,
      ...(filters?.category && { category: filters.category }),
      ...(filters?.type && { type: filters.type }),
      ...(filters?.startDate && {
        date: { gte: filters.startDate },
      }),
      ...(filters?.endDate && {
        date: { lte: filters.endDate },
      }),
    },
    orderBy: { date: "desc" },
    take: 100,
  });

  return transactions;
}

export async function deleteTransaction(id: string) {
  const session = await auth.api.getSession();
  if (!session?.user) throw new Error("Unauthorized");

  const transaction = await prisma.transaction.findUnique({
    where: { id },
  });

  if (transaction?.userId !== session.user.id) {
    throw new Error("Forbidden");
  }

  await prisma.transaction.delete({ where: { id } });
  revalidatePath("/dashboard");
  revalidatePath("/transactions");
}