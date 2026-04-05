import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FinTrack — Control Total de Tus Finanzas",
  description: "Dashboard financiero para freelancers y pequeños negocios. Gestiona ingresos, gastos y presupuestos sin complejidad.",
  openGraph: {
    title: "FinTrack",
    description: "Control total de tus finanzas en un dashboard",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%233b82f6'>₹</text></svg>" />
      </head>
      <body className={`${geist.className} bg-zinc-950 text-zinc-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}