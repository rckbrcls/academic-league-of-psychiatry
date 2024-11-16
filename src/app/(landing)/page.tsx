import { SVG } from "@/components/SVG";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex pt-20 min-h-screen overflow-hidden">
      <div className="w-full p-10 z-20">
        <p className="text-5xl font-bold">Liga Acadêmica de Psiquiatria</p>
        <p className="text-2xl mt-2 mb-8">
          Faculdade de Medicina de Jaú - Unoeste
        </p>
        <p className="mt-4 text-lg">
          A Liga Acadêmica de Psiquiatria (LAP) da Faculdade de Medicina de Jaú
          – Unoeste é uma organização estudantil formada por alunos
          comprometidos com o estudo, a pesquisa e a promoção da saúde mental.
          Nosso objetivo é ampliar o conhecimento sobre a psiquiatria,
          desmistificar os estigmas relacionados às doenças mentais e promover a
          humanização na prática médica.
        </p>
        <p className="mt-4 text-lg">
          Composta por estudantes da Faculdade de Medicina da Unoeste, a LAP
          proporciona um espaço de aprendizado e troca de experiências, onde
          conhecimentos teóricos e práticos se complementam. Nossa liga busca
          aprofundar o entendimento das doenças mentais, incluindo transtornos
          de humor, ansiedade, dependência química e outras condições
          psicológicas, além de discutir temas emergentes na área da saúde
          mental, como a psicoterapia, o uso da tecnologia no diagnóstico e
          tratamento e a neurociência aplicada.
        </p>
        <p className="mt-4 text-lg">
          Através de eventos, palestras, workshops e projetos de extensão,
          incentivamos nossos membros a desenvolver uma visão crítica e ética
          sobre a prática psiquiátrica, com o objetivo de formar médicos mais
          empáticos e conscientes dos desafios e das responsabilidades que
          envolvem o cuidado com a saúde mental.
        </p>
        <p className="mt-4 text-lg">
          Venha conhecer e fazer parte da nossa jornada em prol do conhecimento
          e da empatia!
        </p>
      </div>
      <div className="bg-[#052B61] w-[45rem] min-h-screen flex items-center relative">
        <SVG className="absolute z-10 -top-36 -left-36 w-96 h-96" />
        <div className="relative w-full h-auto">
          <Image
            src={"/grupo.png"}
            alt="cover-meetings"
            width={1920}
            height={1080}
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <SVG className="absolute z-10 -bottom-28 -right-36 w-96 h-96" />
      </div>
    </div>
  );
}
