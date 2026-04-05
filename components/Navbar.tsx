"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, LogOut } from "lucide-react";
import { useSession } from "@/lib/auth-client";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 backdrop-blur-xl"
         style={{ background: "rgba(9, 9, 11, 0.8)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500" />
          <span className="text-white">FinTrack</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
            Características
          </a>
          <a href="#pricing" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
            Precios
          </a>
          <a href="#testimonials" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
            Testimonios
          </a>
        </div>

        {/* CTA / Auth */}
        <div className="hidden md:flex items-center gap-4">
          {session?.user ? (
            <>
              <Link href="/dashboard" className="text-sm text-zinc-300 hover:text-white transition-colors">
                Dashboard
              </Link>
              <form action="/api/auth/signout" method="POST">
                <button type="submit" className="flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                  <LogOut size={16} />
                  Salir
                </button>
              </form>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm text-zinc-300 hover:text-white transition-colors">
                Ingresar
              </Link>
              <Link href="/signup"
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95"
                    style={{ boxShadow: "0 0 24px rgba(59, 130, 246, 0.35)" }}>
                Empezar gratis
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-zinc-400 hover:text-white">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-zinc-800/50 bg-zinc-950/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-4">
          <a href="#features" className="text-sm text-zinc-300 hover:text-white">Características</a>
          <a href="#pricing" className="text-sm text-zinc-300 hover:text-white">Precios</a>
          <a href="#testimonials" className="text-sm text-zinc-300 hover:text-white">Testimonios</a>
          {session?.user ? (
            <>
              <Link href="/dashboard" className="text-sm text-zinc-300">Dashboard</Link>
              <form action="/api/auth/signout" method="POST">
                <button type="submit" className="text-sm text-zinc-300">Salir</button>
              </form>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm text-zinc-300">Ingresar</Link>
              <Link href="/signup" className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium">
                Empezar gratis
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}