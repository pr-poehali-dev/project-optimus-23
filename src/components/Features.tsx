import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Leaf",
    title: "Никаких парабенов",
    description: "Только натуральные ингредиенты: масла, гидролаты, эфирные масла. Состав — прозрачный и понятный.",
  },
  {
    icon: "FlaskConical",
    title: "Проверка pH-метром",
    description: "Каждая партия проходит контроль кислотности — кожа получает именно то, что ей нужно.",
  },
  {
    icon: "Scissors",
    title: "Ручная нарезка",
    description: "Каждое мыло нарезается вручную — поэтому рисунок и форма уникальны, как отпечаток пальца.",
  },
  {
    icon: "Gift",
    title: "Подарок при первом заказе",
    description: "Мы кладём сюрприз в каждый первый заказ — небольшое мыло в подарок от нас.",
  },
];

export function Features() {
  return (
    <section id="catalog" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-terracotta mb-4 block">Наши преимущества</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground text-balance">
            Почему выбирают WeSoap
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-sage/30 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center mb-6 group-hover:bg-sage/20 transition-colors duration-500">
                <Icon name={feature.icon} size={24} className="text-sage" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Catalog section */}
        <div id="sets" className="mt-24">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-terracotta mb-4 block">Каталог</span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground text-balance">
              Наше мыло
            </h2>
            <p className="text-muted-foreground mt-4">Цены от 350 ₽ за брусок</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Медовое наслаждение",
                emoji: "🍯",
                desc: "Пышная пена, мёд и оливковое масло. Питает и смягчает кожу с первого использования.",
                tag: "Питание",
              },
              {
                name: "Лавандовый сон",
                emoji: "💜",
                desc: "Натуральное эфирное масло лаванды. Успокаивает кожу и расслабляет после долгого дня.",
                tag: "Релакс",
              },
              {
                name: "Детская ромашка",
                emoji: "🌼",
                desc: "Без отдушек и аллергенов. Нежная формула для самой чувствительной кожи малышей.",
                tag: "Для детей",
              },
            ].map((soap, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-card border border-border hover:border-sage/30 transition-colors duration-500">
                <div className="text-5xl mb-6">{soap.emoji}</div>
                <div className="inline-block px-3 py-1 rounded-full bg-sage/10 text-sage text-xs mb-4">
                  {soap.tag}
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3">«{soap.name}»</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{soap.desc}</p>
                <p className="text-sm text-muted-foreground">Вес: 100±5 г · Подходит для чувствительной кожи</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
