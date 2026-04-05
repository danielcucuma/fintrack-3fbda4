import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import Link from "next/link";
import { TrendingUp, TrendingDown, Plus, Eye } from "lucide-react";

export default async function DashboardPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user) redirect("/auth/login");

  const user = session.user;
  const [transactions, budgets, accounts] = await Promise.all([
    prisma.transaction.findMany({ where: { userId: user.id }, orderBy: { date: "desc" }, take: 5 }),
    prisma.budget.findMany({ where: { userId: user.id } }),
    prisma.bankAccount.findMany({ where: { userId: user.id } }),
  ]);

  const totalIncome = transactions.filter(t => t.type === "income").reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactions.filter(t => t.type === "expense").reduce((sum, t) => sum + t.amount, 0);
  const balance = accounts.reduce((sum, a) => sum + a.balance, 0);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Bienvenido, {user.name?.split(" ")[0]}</h1>
          <p className="text-zinc-400">Aquí está tu resumen financiero del mes</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Saldo Total", value: `$${balance.toFixed(2)}`, icon: "💰", trend: null },
            { label: "Ingresos", value: `$${totalIncome.toFixed(2)}`, icon: "📈", trend: 12 },
            { label: "Gastos", value: `$${totalExpense.toFixed(2)}`, icon: "📉", trend: -5 },
            { label: "Cuentas", value: accounts.length, icon: "🏦", trend: null },
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50">
              <p className="text-sm text-zinc-400 mb-2">{stat.label}</p>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold">{stat.value}</span>
                {stat.trend !== null && (
                  <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${stat.trend >= 0 ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"}`}>
                    {stat.trend >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {Math.abs(stat.trend)}%
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Transactions Table */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden mb-8">
          <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Transacciones Recientes</h2>
            <Link href="/transactions" className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1">
              Ver todas <Eye className="w-3 h-3" />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-xs text-zinc-500 uppercase bg-zinc-800/30">
                <tr>
                  <th className="px-6 py-3 text-left font-medium">Descripción</th>
                  <th className="px-6 py-3 text-left font-medium">Categoría</th>
                  <th className="px-6 py-3 text-left font-medium">Monto</th>
                  <th className="px-6 py-3 text-left font-medium">Fecha</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {transactions.length > 0 ? transactions.map(t => (
                  <tr key={t.id} className="hover:bg-zinc-800/30 transition">
                    <td className="px-6 py-4 font-medium">{t.description}</td>
                    <td className="px-6 py-4 text-zinc-400">{t.category}</td>
                    <td className={`px-6 py-4 font-semibold ${t.type === "income" ? "text-emerald-400" : "text-red-400"}`}>
                      {t.type === "income" ? "+" : "-"}${t.amount.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-zinc-400">{new Date(t.date).toLocaleDateString("es-ES")}</td>
                  </tr>
                )) : (
                  <tr><td colSpan={4} className="px-6 py-8 text-center text-zinc-500">Sin transacciones aún</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/transactions" className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-blue-500/50 hover:bg-blue-500/5 transition group">
            <Plus className="w-6 h-6 text-blue-400 mb-3 group-hover:scale-110 transition" />
            <h3 className="font-semibold mb-1">Agregar Transacción</h3>
            <p className="text-sm text-zinc-400">Registra un ingreso o gasto</p>
          </Link>
          <Link href="/budgets" className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-blue-500/50 hover:bg-blue-500/5 transition group">
            <Plus className="w-6 h-6 text-blue-400 mb-3 group-hover:scale-110 transition" />
            <h3 className="font-semibold mb-1">Crear Presupuesto</h3>
            <p className="text-sm text-zinc-400">Define límites de gasto</p>
          </Link>
          <Link href="/reports" className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-blue-500/50 hover:bg-blue-500/5 transition group">
            <Plus className="w-6 h-6 text-blue-400 mb-3 group-hover:scale-110 transition" />
            <h3 className="font-semibold mb-1">Ver Reportes</h3>
            <p className="text-sm text-zinc-400">Analiza tu flujo de caja</p>
          </Link>
        </div>
      </div>
    </div>
  );
}