'use client';

import React from 'react';
import Spline from '@splinetool/react-spline/next';
import AnimatedLogo from '@/components/AnimatedLogo';

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#050505] text-white">
      {/* ── Scène 3D Interactive Spline (Fond plein écran) ── */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Spline
          scene="https://prod.spline.design/B7sDEZ7ZfOlUR6PE/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* ── Overlay HUD / Logo Glassmorphism (Superposition) ── */}
      {/* 'pointer-events-none' sur le wrapper pour garantir l'interactivité complète de Spline 3D */}
      <header className="fixed top-6 left-6 z-20 pointer-events-none flex items-center gap-4 animate-in fade-in zoom-in-95 duration-700">
        <div className="pointer-events-auto flex items-center gap-3.5 backdrop-blur-md bg-black/25 hover:bg-black/40 border border-white/10 hover:border-white/20 rounded-2xl p-2.5 md:p-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group">
          {/* Logo vectoriel interactif */}
          <AnimatedLogo
            size={42}
            color="#ffffff"
            glowColor="rgba(255, 255, 255, 0.4)"
          />

          {/* Label de branding HUD minimaliste */}
          <div className="flex flex-col pr-2">
            <span className="text-xs font-bold tracking-widest uppercase text-white/90 group-hover:text-white transition-colors">
              Portfolio
            </span>
            <span className="text-[9px] font-mono tracking-wider text-white/40 uppercase">
              3D Experience
            </span>
          </div>
        </div>
      </header>
    </main>
  );
}
