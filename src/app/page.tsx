import Header from '../components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Header />
      
      {/* Hero Section согласно док-ту */}
      <section className="max-w-[1280px] mx-auto px-4 py-24 text-center">
        <h1 className="text-[#0F172A] text-5xl md:text-6xl font-[800] mb-6">
          Профессиональная дезинсекция в Берлине
        </h1>
        <p className="text-[#475569] text-xl mb-10 max-w-2xl mx-auto">
          Быстрое и безопасное избавление от вредителей с гарантией результата.
        </p>
        
        {/* Кнопка Call-to-Action с твоим цветом #2563EB */}
        <a 
          href="#wizard" 
          className="inline-block bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-[600] px-8 py-4 rounded-lg shadow-md transition-all active:scale-95"
        >
          Оформить заказ сейчас
        </a>
      </section>

      {/* Секция для Визарда (заглушка) */}
      <section id="wizard" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-4 text-center text-[#475569]">
          Тут будет твой Визард...
        </div>
      </section>
    </main>
  );
}
