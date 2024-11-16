import { SVG } from "@/components/SVG";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MeetingCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  extendedText: string; // Texto mais extenso para a página de detalhes
}

const MeetingCard: React.FC<MeetingCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  extendedText,
}) => {
  return (
    <Link
      href={{
        pathname: `/meetings/${id}`,
        query: {
          title,
          description,
          imageUrl,
          extendedText,
        },
      }}
      passHref
    >
      <div className="glass-dark w-full h-full rounded-lg p-4 hover:scale-105 hover:cursor-pointer duration-500">
        <div className="relative w-full h-48">
          <Image
            className="rounded-lg"
            fill
            style={{ objectFit: "cover" }}
            priority
            src={imageUrl}
            alt={title}
          />
        </div>
        <p className="text-2xl font-bold mt-4">{title}</p>
        <p className="text-base mt-2">{description}</p>
      </div>
    </Link>
  );
};

export default function Meetings() {
  const meetings: MeetingCardProps[] = [
    {
      id: 1,
      title: "Reunião sobre Depressão e Ansiedade",
      description:
        "Discussão sobre as últimas abordagens terapêuticas para depressão e ansiedade, além de estratégias para identificação precoce.",
      imageUrl:
        "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&h=300&fit=crop",
      extendedText:
        "Esta reunião discutirá estudos de caso e novas pesquisas sobre depressão e ansiedade, buscando fornecer insights sobre estratégias terapêuticas eficazes e práticas de prevenção. Abordaremos as abordagens de tratamento mais recentes e práticas recomendadas para lidar com esses transtornos complexos...",
    },
    {
      id: 2,
      title: "Workshop: Psicoterapia na Prática",
      description:
        "Sessão prática para explorar diferentes técnicas de psicoterapia com base em estudos de caso.",
      imageUrl:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
      extendedText:
        "Neste workshop, os participantes terão a chance de praticar técnicas de psicoterapia em um ambiente controlado. Exploraremos métodos variados, discutindo estudos de caso reais e analisando as respostas terapêuticas...",
    },
    {
      id: 3,
      title: "Discussão sobre Saúde Mental e Tecnologia",
      description:
        "Exploração dos impactos da tecnologia moderna sobre a saúde mental, incluindo benefícios e desafios.",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=300&fit=crop",
      extendedText:
        "Uma análise aprofundada de como a tecnologia influencia a saúde mental, abordando tanto as vantagens quanto os riscos associados. A reunião cobrirá temas como telemedicina, aplicativos de saúde mental e o uso de IA...",
    },
    {
      id: 4,
      title: "Debate: O Estigma das Doenças Mentais",
      description:
        "Um debate sobre os estigmas em torno das doenças mentais e como combatê-los na prática clínica e social.",
      imageUrl:
        "https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?w=500&h=300&fit=crop",
      extendedText:
        "Este debate busca explorar as raízes do estigma associado às doenças mentais e discutir estratégias para reduzir preconceitos. Os participantes aprenderão sobre abordagens de sensibilização e inclusão...",
    },
    {
      id: 5,
      title: "Reunião sobre Transtornos de Humor",
      description:
        "Análise das abordagens para tratamento e gestão dos transtornos de humor mais comuns.",
      imageUrl:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&h=300&fit=crop",
      extendedText:
        "Uma discussão aprofundada sobre os transtornos de humor, suas causas e os tratamentos mais eficazes. A reunião abrangerá estudos recentes e estratégias para apoiar indivíduos com transtornos de humor...",
    },
    {
      id: 6,
      title: "Simpósio: Neurociência e Comportamento",
      description:
        "Palestras sobre as descobertas recentes em neurociência e sua aplicação no entendimento do comportamento humano.",
      imageUrl:
        "https://images.unsplash.com/photo-1510070009289-b5bc34383727?w=500&h=300&fit=crop", // Imagem alternativa sobre neurociência
      extendedText:
        "Um simpósio com especialistas em neurociência que abordarão as mais recentes descobertas sobre como o cérebro influencia o comportamento humano. Este evento visa fornecer uma visão abrangente dos avanços em neurociência...",
    },
  ];

  return (
    <div className="pb-40 px-10 pt-24">
      <SVG className="absolute -top-10 -left-28 -z-10 w-96 h-96" />
      <SVG className="absolute -bottom-10 -right-28 -z-10 w-96 h-96" />

      <p className="text-4xl font-bold">Reuniões</p>
      <div className="flex mt-4">
        <select
          className="select glass-dark select-bordered w-full max-w-xs"
          defaultValue={"Ordenar por"}
        >
          <option disabled>Ordenar por</option>
          <option>Data mais recente</option>
          <option>Data mais antiga</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {meetings.map((meeting) => (
          <MeetingCard
            key={meeting.id}
            id={meeting.id}
            title={meeting.title}
            description={meeting.description}
            imageUrl={meeting.imageUrl}
            extendedText={meeting.extendedText} // Passa o texto extenso para a página de detalhes
          />
        ))}
      </div>
    </div>
  );
}
