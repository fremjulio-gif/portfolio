'use client';

import React from 'react';
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Scène Spline 3D interactive unique en plein écran */}
      <div className="absolute inset-0 w-full h-full">
        <Spline
          scene="https://prod.spline.design/B7sDEZ7ZfOlUR6PE/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </main>
  );
}
