import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import about3 from "@/assets/about-3.jpg";
import about4 from "@/assets/about-4.jpg";
import about5 from "@/assets/about-5.jpg";
import about6 from "@/assets/about-6.jpg";
import about7 from "@/assets/about-7.jpg";
import about8 from "@/assets/about-8.jpg";

const AboutBlock = () => {
  const slides = [
    { image: about1, title: "Коммерческое предложение" },
    { image: about2, title: "Почему мы?" },
    { image: about3, title: "Наши клиенты" },
    { image: about4, title: "Наши достижения" },
    { image: about5, title: "Этапы работы" },
    { image: about6, title: "Пакеты услуг" },
    { image: about7, title: "Сертификаты" },
    { image: about8, title: "Контакты" }
  ];

  return (
    <section className="py-16 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-foreground/90 text-center mb-12">
          О нас
        </h2>
        
        <Carousel className="w-full max-w-2xl mx-auto">
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <Card className="border-border/20 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-3">
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </section>
  );
};

export default AboutBlock;
