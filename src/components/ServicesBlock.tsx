const ServicesBlock = () => {
  const services = [
    { name: "Дизайн логотипа", price: "от 5000 тенге" },
    { name: "Наружная реклама", price: "от 15000 тенге" },
    { name: "Широкоформатная печать", price: "от 20000 тенге" },
    { name: "Брендинг", price: "от 30000 тенге" }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-foreground/90 text-center mb-12">
          Услуги и цены
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/20 hover:border-border/40 transition-all"
            >
              <h3 className="text-xl font-light text-foreground/90 mb-2">{service.name}</h3>
              <p className="text-2xl text-foreground/70">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesBlock;
