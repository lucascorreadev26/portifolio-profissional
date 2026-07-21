import BadgeSection from "../../components/Bagde/BadgeSection";
import { services } from "../Servicos/services";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#08090F] px-6 pt-24 pb-20 md:px-10 lg:pr-16 lg:pl-64"
    >
      <div className="w-full min-w-0">
        {/* Cabeçalho da seção */}
        <div className="max-w-3xl">
          <BadgeSection>
            <span>&gt;_</span>

            <span className="font-mono font-bold uppercase">Serviços</span>
          </BadgeSection>

          <h2 className="font-inter mt-10 mb-2 text-left text-3xl font-extrabold uppercase sm:text-4xl lg:text-4xl">
            Soluções que posso criar para você
          </h2>

          <p className="font-inter mt-2 max-w-2xl text-left text-base leading-7 text-gray-400 lg:text-lg">
            Desenvolvo soluções web completas, modernas e personalizadas,
            cuidando de todas as etapas do projeto, desde a arquitetura até o
            deploy em produção, com foco em performance, escalabilidade,
            experiência do usuário e resultados para o negócio.
          </p>
        </div>

        {/* Lista de cards */}
        <div className="mt-10 flex w-full flex-wrap items-stretch justify-start gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
