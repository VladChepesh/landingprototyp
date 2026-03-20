import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-[#1E3A8A] rounded-lg flex items-center justify-center text-white font-bold">B</div>
          <div>
            <h1 className="text-[#0F172A] font-bold text-xl leading-none">Berlin Service</h1>
            <p className="text-[#475569] text-xs">Дезинсекция и контроль</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {['Услуги', 'О нас', 'Цены', 'Отзывы'].map((item) => (
            <a key={item} href={`#${item}`} className="text-[#475569] hover:text-[#2563EB] font-medium transition-colors">
              {item}
            </a>
          ))}
          <button className="bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1 rounded-md text-sm font-semibold">
            RU ▾
          </button>
        </nav>
      </div>
    </header>
  );
}
