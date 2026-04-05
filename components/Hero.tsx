"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 pt-32 pb-24 sm:pt-40 sm:pb-32 font-sans">
      {/* Gradient Orb Background */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -60%)",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
        pointerEvents: "none",
        filter: "blur(40px)",
        zIndex: 0,
      }} />

      {/* Grid Background */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs text-blue-300 font-medium mb-8">
          <span style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#3b82f6",
            animation: "pulse 2s infinite",
          }} />
          Nuevo · Sincronización bancaria en tiempo real
        </div>

        {/* Headline */}
        <h1 className="max-w-4xl text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
          Control total de tus{" "}
          <span style={{
            background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            finanzas
          </span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl text-lg text-zinc-400 mb-10">
          Dashboard inteligente para freelancers y pequeños negocios. Sincroniza tus cuentas bancarias, automatiza categorías y obtén reportes en segundos.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link href="/signup"
                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-sm hover:shadow-lg transition-all active:scale-95"
                style={{ boxShadow: "0 0 24px rgba(59, 130, 246, 0.35)" }}>
            Empezar gratis
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href="#features"
             className="px-6 py-3 rounded-lg border border-zinc-700 text-zinc-300 font-semibold text-sm hover:border-zinc-500 hover:text-white transition-colors">
            Ver características
          </a>
        </div>

        {/* Social Proof */}
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <TrendingUp size={16} className="text-emerald-500" />
          <span>+2,400 freelancers confían en FinTrack</span>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}