import React from 'react';
import { Globe, ChevronDown, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#E2E8F0] shadow-sm font-inter">
      <div className="max-w-[1280px] mx-auto px-4">
        
        {/* ВЕРХНЯЯ ЛИНИЯ: Лого, Название и Язык */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-4">
            {/* Логотип [cite: 10] */}
            <div className="w-12 h-12 bg-[#1E3A8A] rounded-lg flex items-center justify-center text-white font-bold text-xl cursor-pointer">
              B
            </div>
            {/* Название и подзаголовок [cite: 11] */}
            <div className="flex flex-col">
              <h1 className="text-[#0F172A] text-lg font-extrabold leading-none uppercase">Berlin Service</h1>
              <p className="text-[#475569] text-[10px] mt-1 font-medium uppercase tracking-wider">Дезинсекция и контроль</p>
            </div>
          </div>

          {/* Выбор языка [cite: 12] */}
          <button className="flex items-center gap-2 text-[#475569] text-sm font-semibold border border-[#E2E8F0] px-3 py-1.5 rounded-lg hover:bg-[#F8FAFC] transition-all">
            <Globe size={16} />
            <span>RU</span>
            <ChevronDown size={14} />
          </button>
        </div>

        {/* НИЖНЯЯ ЛИНИЯ: Навигация (Якоря) [cite: 14] */}
        <div className="flex justify-between items-center py-2 border-t border-[#F1F5F9]">
          <nav className="flex gap-6 overflow-x-auto no-scrollbar py-1">
            {['Услуги', 'О нас', 'Цены', 'Отзывы', 'FAQ'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-[#475569] text-sm font-semibold hover:text-[#2563EB] transition-colors whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </nav>
          
          {/* Кнопка открытия списка [cite: 15] */}
          <button className="ml-4 p-1 text-[#1E3A8A] hover:bg-[#F8FAFC] rounded">
            <Menu size={20} />
          </button>
        </div>

      </div>
    </header>
  );
}
