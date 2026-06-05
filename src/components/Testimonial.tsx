export function Testimonial() {
  return (
    <section id="reviews" className="py-32 px-6 bg-sage/5">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-sm uppercase tracking-widest text-muted-foreground mb-8 block">Отзывы</span>

        <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight tracking-tight mb-10 text-balance">
          «У дочки атопия — перепробовали всё. Ваше мыло с ромашкой стало настоящим спасением для её кожи.»
        </blockquote>

        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
            <img
              src="/placeholder-user.jpg"
              alt="Елена"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <p className="text-foreground font-medium">Елена</p>
            <p className="text-sm text-muted-foreground">Постоянный покупатель WeSoap</p>
          </div>
        </div>

        {/* Social proof badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
          <div className="px-6 py-4 rounded-2xl bg-background border border-border">
            <p className="text-2xl font-serif text-foreground mb-1">50+</p>
            <p className="text-sm text-muted-foreground">наборов для корпоратива</p>
          </div>
          <div className="px-6 py-4 rounded-2xl bg-background border border-border">
            <p className="text-2xl font-serif text-foreground mb-1">ЕАЭС</p>
            <p className="text-sm text-muted-foreground">сертификат соответствия</p>
          </div>
          <div className="px-6 py-4 rounded-2xl bg-background border border-border">
            <p className="text-2xl font-serif text-foreground mb-1">0</p>
            <p className="text-sm text-muted-foreground">парабенов и сульфатов</p>
          </div>
        </div>
      </div>
    </section>
  );
}
