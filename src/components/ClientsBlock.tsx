import ferreroLogo from "@/assets/client-ferrero.jpg";
import siberianLogo from "@/assets/client-siberian.jpg";
import kulikovLogo from "@/assets/client-kulikov.jpg";
import olympLogo from "@/assets/client-olymp.jpg";

const ClientsBlock = () => {
  const clients = [
    { name: "Компания А", logo: ferreroLogo },
    { name: "Компания Б", logo: siberianLogo },
    { name: "Компания В", logo: kulikovLogo },
    { name: "Компания Г", logo: olympLogo }
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
              className="bg-card/50 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center justify-center border border-border/20 hover:border-border/40 transition-all"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="w-full h-auto object-contain mb-3"
              />
              <p className="text-foreground/70 font-light text-sm">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsBlock;
