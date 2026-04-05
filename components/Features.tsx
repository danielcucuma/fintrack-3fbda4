"use client";

import { BarChart3, Zap, Lock, TrendingUp, AlertCircle, FileText } from "lucide-react";

const FEATURES = [
  {
    icon: BarChart3,
    title: "Dashboard en Tiempo Real",
    description: "Visualiza tus ingresos, gastos y saldo disponible al instante. Sincronización automática cada hora.",
  },
  {
    icon: Zap,
    title: "Categorización Automática",
    description: "La IA aprende tus patrones de gasto y categoriza transacciones automáticamente. Ahorra 5 horas al mes.",
  },
  {
    icon: AlertCircle,
    title: "Alertas de Presupuesto",
    description: "Recibe notificaciones cuando te acercas al límite de gasto en cualquier categoría. Control total.",
  },
  {
    icon: TrendingUp,
    title: "Proyecciones de Flujo",
    description: "Predice tu flujo de caja para los próximos 3 meses basado en tus patrones históricos.",
  },
  {
    icon: FileText,
    title: "Reportes Automáticos",
    description: "Genera reportes mensuales en PDF. Perfecto para impuestos, auditorías y análisis de negocio.",
  },
  {
    icon: Lock,
    title: "Seguridad Bancaria",
    description: "Encriptación de nivel militar. Tus datos nunca se almacenan en nuestros servidores, solo metadatos.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative bg-zinc-950 py-24 sm:py-32 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2">
            ✦ Características
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Todo lo que necesitas para controlar tus finanzas
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Herramientas poderosas diseñadas específicamente para freelancers y pequeños negocios.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-blue-500/30 hover:bg-zinc-900/80 transition-all duration-300 cursor-pointer"
                style={{
                  background: "rgba(24, 24, 27, 0.5)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Icon Box */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{
                    background: "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.05))",
                    border: "1px solid rgba(59, 130, 246, 0.2)",
                  }}
                >
                  <Icon size={24} className="text-blue-400" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Large Feature Highlight */}
        <div className="mt-16 rounded-2xl border border-zinc-800 overflow-hidden"
             style={{
               background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.05))",
               backdropFilter: "blur(12px)",
             }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 lg:p-12">
            <div className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2">
                ✦ Integración Bancaria
              </p>
              <h3 className="text-3xl font-bold text-white mb-4">
                Conecta tus cuentas en 2 minutos
              </h3>
              <p className="text-zinc-400 mb-6">
                Usa Plaid para conectar de forma segura tus cuentas bancarias. Sincronización automática, sin acceso a contraseñas.
              </p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Soporta 12,000+ instituciones financieras
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Sincronización cada hora
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Historial de 2 años
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full h-64 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-400 mb-2">2m</div>
                  <p className="text-sm text-zinc-400">Tiempo de configuración</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}