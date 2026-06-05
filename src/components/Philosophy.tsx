export function Philosophy() {
  return (
    <section id="about" className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative aspect-[4/5] bg-muted rounded-lg overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/1baba9c2-f9b1-4416-868f-efc7ce07d2d5/files/9a33e89a-6149-4d07-bc08-a6bcd7f0d538.jpg"
              alt="Мыло ручной работы WeSoap"
              className="w-full h-full object-cover"
            />
            {/* Decorative accent */}
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/90 backdrop-blur-sm rounded-lg">
              <p className="text-sm text-muted-foreground italic">
                «Каждый брусочек — это ручной труд, натуральные масла и забота о вашей коже.»
              </p>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="flex flex-col gap-8">
            <span className="text-sm uppercase tracking-widest text-sage">О нас</span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-tight text-balance">
              Натуральный уход без компромиссов
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                WeSoap родился из убеждения: кожа заслуживает только честного состава. Никаких парабенов,
                сульфатов и синтетических отдушек — только органические масла, гидролаты и эфирные масла.
              </p>
              <p>
                Каждая партия варится вручную, нарезается вручную и проверяется pH-метром. Поэтому каждый брусок
                уникален — как и человек, для которого он создан.
              </p>
            </div>
            <div className="pt-4">
              <a href="#catalog" className="inline-flex items-center gap-2 text-foreground group">
                <span className="border-b border-foreground pb-0.5">Смотреть каталог</span>
                <span className="text-terracotta group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}