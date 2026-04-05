import Link from "next/link";
import { ArrowRight, TrendingUp, Lock, Zap, BarChart3, AlertCircle, CheckCircle2 } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-geist overflow-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 backdrop-blur-xl" style={{ background: "rgba(9,9,11,0.8)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-lg">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-sm">₹</div>
            FinTrack
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-zinc-400 hover:text-zinc-100 transition">Características</a>
            <a href="#pricing" className="text-zinc-400 hover:text-zinc-100 transition">Precios</a>
            <a href="#testimonios" className="text-zinc-400 hover:text-zinc-100 transition">Testimonios</a>
          </div>
          <Link href="/auth/login" className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-sm font-medium transition active:scale-95">
            Ingresar
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.1),transparent_70%)] -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs text-blue-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Nuevo: Sincronización bancaria automática
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Control total de tus <span style={{ background: "linear-gradient(135deg,#3b82f6,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>finanzas</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10">
            Dashboard inteligente para freelancers y pequeños negocios. Gestiona ingresos, gastos y presupuestos sin complejidad contable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/auth/signup" className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 font-medium flex items-center gap-2 transition active:scale-95 shadow-lg shadow-blue-500/30">
              Empezar gratis <ArrowRight className="w-4 h-4" />
            </Link>
            <button className="px-6 py-3 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-300 font-medium transition active:scale-95">
              Ver demo
            </button>
          </div>
          <p className="text-sm text-zinc-500">Sin tarjeta de crédito · 14 días gratis</p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-blue-400 mb-2">Características</p>
            <h2 className="text-4xl font-bold">Todo lo que necesitas para controlar tus finanzas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: BarChart3, title: "Dashboard en Tiempo Real", desc: "Visualiza ingresos, gastos y saldo en un vistazo" },
              { icon: AlertCircle, title: "Alertas de Presupuesto", desc: "Recibe notificaciones cuando te acercas al límite" },
              { icon: Zap, title: "Categorización Automática", desc: "IA que clasifica tus transacciones automáticamente" },
              { icon: TrendingUp, title: "Proyecciones de Flujo", desc: "Predice tu flujo de caja para los próximos meses" },
              { icon: Lock, title: "Seguridad Bancaria", desc: "Encriptación de nivel empresarial con Plaid" },
              { icon: CheckCircle2, title: "Reportes Automáticos", desc: "Genera reportes mensuales con un clic" },
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:border-blue-500/40 transition">
                  <f.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-blue-400 mb-2">Precios</p>
            <h2 className="text-4xl font-bold">Planes simples y transparentes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "Starter", price: 9, features: ["Hasta 3 cuentas bancarias", "Presupuestos ilimitados", "Reportes básicos", "Soporte por email"], highlight: false },
              { name: "Professional", price: 29, features: ["Cuentas bancarias ilimitadas", "Alertas avanzadas", "Proyecciones de flujo", "Soporte prioritario", "API access"], highlight: true },
            ].map((plan, i) => (
              <div key={i} className={`p-8 rounded-2xl border transition ${plan.highlight ? "border-blue-500/50 bg-blue-500/5 ring-1 ring-blue-500/20 md:scale-105" : "border-zinc-800 bg-zinc-900/50"}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6"><span className="text-4xl font-bold">${plan.price}</span><span className="text-zinc-400">/mes</span></div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500" />{f}</li>
                  ))}
                </ul>
                <button className={`w-full py-2 rounded-lg font-medium transition active:scale-95 ${plan.highlight ? "bg-blue-600 hover:bg-blue-500" : "border border-zinc-700 hover:border-zinc-500"}`}>
                  Empezar ahora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-zinc-400">
          <p>© 2024 FinTrack. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6 mt-6 md:mt-0">
            <a href="#" className="hover:text-zinc-200 transition">Privacidad</a>
            <a href="#" className="hover:text-zinc-200 transition">Términos</a>
            <a href="#" className="hover:text-zinc-200 transition">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}