import Icon from "@/components/ui/icon";

const plans = [
  {
    name: "Один брусок",
    price: "от 350 ₽",
    description: "Попробуйте любое мыло из каталога",
    features: [
      "Мыло на выбор: Медовое, Лавандовое или Ромашка",
      "Вес 100±5 г",
      "Подарок при первом заказе",
      "Состав на этикетке",
    ],
    cta: "Выбрать мыло",
    highlighted: false,
  },
  {
    name: "Набор на выбор",
    price: "от 950 ₽",
    description: "Соберите свой набор из 3 брусков — идеально как подарок",
    features: [
      "3 мыла на ваш выбор",
      "Красивая упаковка в подарок",
      "Подходит для корпоративных заказов",
      "Персональная открытка",
      "Доставка по Москве и России",
      "Подарок при первом заказе",
    ],
    cta: "Собрать набор",
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-amber mb-4 block">Наборы</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-4 text-balance">
            Выберите свой формат
          </h2>
          <p className="text-muted-foreground text-lg">Корпоративные заказы от 10 наборов — напишите нам.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 md:p-10 rounded-2xl border ${
                plan.highlighted ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"
              }`}
            >
              <h3 className={`text-xl mb-2 ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-serif text-5xl tracking-tight">{plan.price}</span>
              </div>
              <p className={`mb-8 ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Icon name="Check" size={18} className="text-sage" />
                    <span className={plan.highlighted ? "text-primary-foreground/90" : "text-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full py-3.5 rounded-full text-center transition-opacity duration-300 hover:opacity-90 ${
                  plan.highlighted ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
