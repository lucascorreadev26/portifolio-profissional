import BadgeSection from "../../components/Bagde/BadgeSection";

import logoImportsSolution from "../../assets/logos/logoImportsSolution.webp";
import logoEcoFogoes from "../../assets/logos/logo_eco_fogoes.jpg";

const Business = () => {
  return (
    <section className="bg-[#08090F] px-6 py-20 md:px-10 lg:px-0">
      <div className="w-full lg:ml-64 lg:max-w-4xl">
        {/* Cabeçalho */}
        <div className="max-w-3xl">
          <BadgeSection>
            <span>&gt;_</span>

            <span className="font-mono font-bold uppercase">
              Business Partner
            </span>
          </BadgeSection>

          <h2 className="font-inter mt-10 mb-2 text-center text-3xl font-extrabold uppercase sm:text-5xl lg:text-left lg:text-4xl">
            Empresas Parceiras
          </h2>

          <p className="font-inter mt-2 w-full text-center text-base text-gray-400 sm:text-lg lg:max-w-2xl lg:text-left">
            Empresas e negócios que fizeram parte da minha trajetória através de
            projetos e soluções desenvolvidas sob medida.
          </p>
        </div>

        {/* Empresas */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
          {/* Imports Solution */}
          <a
            href="https://www.importssolution.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-36 items-center gap-5 rounded-xl border border-gray-800 bg-[#0D0E15] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-[0_10px_30px_rgba(37,99,235,0.12)]"
          >
            <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-800 bg-white">
              <img
                src={logoImportsSolution}
                alt="Logo Imports Solution"
                className="h-full w-full scale-110 object-contain p-0 transition-transform duration-500 group-hover:scale-125"
              />
            </div>

            <div className="min-w-0">
              <span className="text-xs font-semibold tracking-wider text-blue-500 uppercase">
                Projeto desenvolvido
              </span>

              <h3 className="font-inter mt-1 text-lg font-bold text-white sm:text-xl">
                Imports Solution
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Catálogo digital de iPhones
              </p>
            </div>
          </a>

          {/* EcoFogões */}
          <a
            href="https://simulador-vendas-phi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-36 items-center gap-5 rounded-xl border border-gray-800 bg-[#0D0E15] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-[0_10px_30px_rgba(37,99,235,0.12)]"
          >
            <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl">
              <img
                src={logoEcoFogoes}
                alt="Logo EcoFogões"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="min-w-0">
              <span className="text-xs font-semibold tracking-wider text-blue-500 uppercase">
                Projeto desenvolvido
              </span>

              <h3 className="font-inter mt-1 text-lg font-bold text-white sm:text-xl">
                EcoFogões
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Simulador de vendas e parcelamento
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Business;
