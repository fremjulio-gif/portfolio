'use client';

import Spline from '@splinetool/react-spline/next';
import AnimatedLogo from '@/components/AnimatedLogo';

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Scène Spline 3D interactive en plein écran */}
      <div className="absolute inset-0 w-full h-full">
        <Spline
          scene="https://prod.spline.design/B7sDEZ7ZfOlUR6PE/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Overlay Logo Glassmorphism fixé en haut à gauche */}
      <div className="fixed top-6 left-6 z-20 pointer-events-none">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-3 shadow-lg pointer-events-auto transition-all duration-300 hover:border-white/20 group">
          <AnimatedLogo size={44} />
        </div>
      </div>
    </main>
  );
}
