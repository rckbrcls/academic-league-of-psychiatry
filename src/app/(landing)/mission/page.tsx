import { SVG } from "@/components/SVG";
import React from "react";

interface BoxProps {
  className: string;
  text: string;
  title?: string;
}

const Box: React.FC<BoxProps> = ({ className, text, title }) => {
  return (
    <div className={`glass-dark p-6 rounded-2xl ${className}`}>
      {title && <p className="text-4xl font-bold mb-2">{title}</p>}
      <p>{text}</p>
    </div>
  );
};

export default function Mission() {
  const boxes: BoxProps[] = [
    {
      className: "col-span-2",
      text: `Nossa missão na Liga Acadêmica de Psiquiatria é promover o conhecimento aprofundado e responsável sobre saúde mental. Queremos oferecer aos estudantes e futuros profissionais da medicina um espaço que os capacite tanto academicamente quanto humanamente, buscando sempre a ética e a empatia como pilares fundamentais na prática psiquiátrica.`,
      title: "Nossa Missão",
    },
    {
      className: "col-span-1 row-span-2",
      text: `Acreditamos que o estudo da psiquiatria é essencial para desmistificar preconceitos e promover um cuidado mais humanizado. Nossos membros têm a oportunidade de participar de palestras, workshops e discussões sobre temas relevantes, como transtornos mentais, neurociência e inovações tecnológicas aplicadas ao diagnóstico e tratamento.`,
      title: "Nossos Valores",
    },
    {
      className: "col-span-1",
      text: `Com o intuito de fomentar uma formação médica completa, a liga incentiva a prática de habilidades clínicas e de comunicação, permitindo que nossos membros estejam cada vez mais preparados para os desafios da saúde mental.`,
    },
    {
      className: "col-span-1",
      text: `Promovemos encontros com profissionais experientes e especialistas na área de psiquiatria, que compartilham suas vivências e conhecimentos, proporcionando uma perspectiva prática e inspiradora para nossos estudantes.`,
    },
    {
      className: "col-span-2",
      text: `Nosso compromisso é criar um ambiente de aprendizado colaborativo, onde cada estudante possa crescer academicamente e se tornar um agente de mudança para o futuro da psiquiatria e da saúde mental, promovendo o bem-estar e a compreensão dentro e fora da comunidade acadêmica.`,
      title: "Compromisso",
    },
    {
      className: "col-span-1",
      text: `Além das atividades acadêmicas, a liga valoriza o desenvolvimento de uma consciência social, incentivando projetos de extensão voltados à comunidade, contribuindo para a disseminação de conhecimento e cuidado em saúde mental.`,
    },
  ];

  return (
    <>
      <SVG
        className="absolute -top-10 -right-36 -z-10  w-96 h-96"
        shape="circle"
      />
      <SVG
        className="absolute -bottom-10 -left-52 -z-10  w-96 h-96"
        shape="circle"
      />
      <div className=" grid grid-cols-3 gap-4 auto-rows-fr px-10 pt-28 pb-10">
        {boxes.map((box, i) => (
          <Box
            key={i}
            className={box.className}
            text={box.text}
            title={box.title}
          />
        ))}
      </div>
    </>
  );
}
