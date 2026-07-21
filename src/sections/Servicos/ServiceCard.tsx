import { HiArrowRight, HiCheckCircle } from "react-icons/hi2";
import { SiWhatsapp } from "react-icons/si";
import type { ServicesProps } from "./typeServices";

type ServiceCardProps = {
  service: ServicesProps;
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  const whatsappNumber = "5521999999999";

  const whatsappMessage = encodeURIComponent(
    `Olá, Lucas! Gostaria de saber mais sobre o serviço de ${service.title}.`,
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <article className="group relative flex w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0D1117] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/70 hover:shadow-[0_20px_50px_rgba(37,99,235,0.18)] sm:w-72 sm:shrink-0 sm:p-7">
      {/* Linha decorativa superior */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Efeito de luz */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-blue-600/10 blur-3xl transition-all duration-500 group-hover:bg-blue-600/20" />

      <div className="relative z-10 flex h-full min-w-0 flex-col">
        <header>
          <span className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase">
            Serviço
          </span>

          <h3 className="mt-3 text-xl leading-tight font-bold break-words text-white sm:text-2xl">
            {service.title}
          </h3>

          <p className="mt-4 text-sm leading-6 break-words text-gray-400 sm:text-base sm:leading-7">
            {service.description}
          </p>
        </header>

        <div className="my-6 h-px w-full bg-gradient-to-r from-blue-500/50 to-transparent" />

        <ul className="space-y-4">
          {service.includedServices.map((includedService) => (
            <li
              key={`${service.title}-${includedService}`}
              className="flex min-w-0 items-start gap-3 text-sm leading-6 text-gray-300 transition-colors duration-300 group-hover:text-gray-200"
            >
              <HiCheckCircle
                className="mt-0.5 shrink-0 text-xl text-blue-500"
                aria-hidden="true"
              />

              <span className="min-w-0 wrap-break-word">{includedService}</span>
            </li>
          ))}
        </ul>

        {/* Botão do WhatsApp */}
        <div className="mt-auto pt-8">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Saber mais sobre ${service.title} pelo WhatsApp`}
            className="group/button flex w-full items-center justify-center gap-3 rounded-xl border border-blue-500/40 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-400 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white hover:shadow-[0_10px_30px_rgba(37,99,235,0.30)] focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1117] focus-visible:outline-none"
          >
            <SiWhatsapp className="text-lg" aria-hidden="true" />

            <span>Saber mais</span>

            <HiArrowRight
              className="text-lg transition-transform duration-300 group-hover/button:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
