import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-8">
      <div className="text-center space-y-4 max-w-md">
        <h1 className="text-3xl font-black tracking-tight">Jules Frémondière</h1>
        <p className="text-sm text-white/60 font-mono uppercase tracking-widest">
          Ingénieur du son · Sound Designer
        </p>
      </div>
    </main>
  );
}
