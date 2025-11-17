import { useState } from "react";
import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Введите имя").max(100, "Имя слишком длинное"),
  email: z.string().trim().email("Неверный email").max(255, "Email слишком длинный"),
  phone: z.string().trim().min(1, "Введите телефон").max(20, "Телефон слишком длинный"),
  service: z.string().trim().min(1, "Выберите услугу").max(100, "Название услуги слишком длинное"),
  message: z.string().trim().max(1000, "Сообщение слишком длинное").optional(),
});

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validated = contactSchema.parse(formData);
      setLoading(true);

      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Заявка отправлена",
        description: "Мы свяжемся с вами в ближайшее время",
      });

      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Ошибка валидации",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Ошибка отправки",
          description: "Попробуйте позже",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-light text-foreground/90 text-center mb-12">
          Заказать услугу
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border/20">
          <div>
            <Input
              placeholder="Ваше имя"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-background/50"
              maxLength={100}
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-background/50"
              maxLength={255}
            />
          </div>
          <div>
            <Input
              type="tel"
              placeholder="Телефон"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-background/50"
              maxLength={20}
            />
          </div>
          <div>
            <Input
              placeholder="Интересующая услуга"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="bg-background/50"
              maxLength={100}
            />
          </div>
          <div>
            <Textarea
              placeholder="Дополнительная информация (необязательно)"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-background/50 min-h-[100px]"
              maxLength={1000}
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Отправка..." : "Отправить заявку"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
