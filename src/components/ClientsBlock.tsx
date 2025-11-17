const ClientsBlock = () => {
  const clients = [
    "Компания А",
    "Компания Б", 
    "Компания В",
    "Компания Г"
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-foreground/90 text-center mb-12">
          Наши клиенты
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-card/50 backdrop-blur-sm p-6 rounded-lg text-center border border-border/20 hover:border-border/40 transition-all"
            >
              <p className="text-foreground/70 font-light">{client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsBlock;
