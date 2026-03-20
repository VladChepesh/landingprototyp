import Header from '../components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="max-w-[1280px] mx-auto px-4 py-24 flex flex-col items-center text-center">
        <h1 className="text-[#0F172A] text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl">
          Профессиональная дезинсекция в Берлине
        </h1>
        <p className="text-[#475569] text-xl mb-10 max-w-2xl">
          Быстрое и безопасное избавление от вредителей с гарантией результата. 
          Используем только сертифицированные Эко-средства.
        </p>
        
      <a 
  href="#" 
  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
>
  Оформить заказ сейчас
</a>

        {/* Заглушка для Marquee из дока */}
        <div className="mt-20 w-full border-y border-[#E2E8F0] py-8 overflow-hidden bg-[#F8FAFC]">
          <p className="text-[#94A3B8] text-sm uppercase tracking-widest font-semibold mb-4">Наши сертификаты</p>
          <div className="flex justify-center gap-12 opacity-50 grayscale">
             <span className="font-bold text-2xl">CE</span>
             <span className="font-bold text-2xl">ISO 9001</span>
             <span className="font-bold text-2xl">BIO-CERT</span>
             <span className="font-bold text-2xl">TÜV</span>
          </div>
        </div>
      </section>
    </main>
  );
}
