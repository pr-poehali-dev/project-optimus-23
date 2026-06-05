import { useState, FormEvent } from "react";
import Icon from "@/components/ui/icon";

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (form.name && form.phone) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-card">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">Заказать</span>
        <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-6 text-balance">
          Соберите свой набор
        </h2>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          Напишите нам — и мы поможем подобрать мыло под ваши задачи, кожу или в подарок.
        </p>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-sage/10 border border-sage/20">
            <p className="text-foreground font-serif text-2xl mb-2">Спасибо за заявку!</p>
            <p className="text-muted-foreground">Менеджер свяжется с вами в течение 15 минут для подтверждения.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto text-left">
            <input
              type="text"
              placeholder="Ваше имя"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-6 py-4 rounded-full bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sage/30 transition-all duration-300"
              required
            />
            <input
              type="tel"
              placeholder="+7 (999) 123-45-67"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-6 py-4 rounded-full bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sage/30 transition-all duration-300"
              required
            />
            <textarea
              placeholder="Что вас интересует? (необязательно)"
              value={form.comment}
              onChange={(e) => setForm({ ...form, comment: e.target.value })}
              rows={3}
              className="w-full px-6 py-4 rounded-2xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sage/30 transition-all duration-300 resize-none"
            />
            <button
              type="submit"
              className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity duration-300"
            >
              Отправить заказ
            </button>
          </form>
        )}

        {/* Contacts */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <a href="tel:+79991234567" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Icon name="Phone" size={16} />
            +7 (999) 123-45-67
          </a>
          <a href="mailto:hello@wesoop.ru" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Icon name="Mail" size={16} />
            hello@wesoop.ru
          </a>
          <a href="https://t.me/weSoap_bot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Icon name="Send" size={16} />
            @weSoap_bot
          </a>
          <span className="flex items-center gap-2">
            <Icon name="MapPin" size={16} />
            Москва, ул. Плеханова, д. 7 (павильон 12)
          </span>
        </div>
      </div>
    </section>
  );
}
