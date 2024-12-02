import React from "react";

export default function Members() {
  const boardMembers = [
    {
      name: "Dr. João Silva",
      role: "Presidente",
      imageUrl:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&h=200&fit=crop",
    },
    {
      name: "Dra. Maria Oliveira",
      role: "Vice-Presidente",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    },
    {
      name: "Dr. Pedro Santos",
      role: "Diretor Científico",
      imageUrl:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop",
    },
    {
      name: "Dra. Ana Souza",
      role: "Diretora de Eventos",
      imageUrl:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200&h=200&fit=crop",
    },
    {
      name: "Dr. Rafael Lima",
      role: "Tesoureiro",
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    },
    {
      name: "Dra. Camila Araújo",
      role: "Secretária",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop",
    },
  ];

  const leagueMembers = [
    {
      name: "Lucas Almeida",
      imageUrl:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&h=200&fit=crop",
    },
    {
      name: "Juliana Costa",
      imageUrl:
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=200&h=200&fit=crop",
    },
    {
      name: "Fernanda Lima",
      imageUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    },
    {
      name: "Mateus Ribeiro",
      imageUrl:
        "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=200&h=200&fit=crop",
    },
    {
      name: "Carlos Souza",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    },
    {
      name: "Bianca Martins",
      imageUrl:
        "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?w=200&h=200&fit=crop",
    },
    {
      name: "André Rocha",
      imageUrl:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&h=200&fit=crop",
    },
    {
      name: "Mariana Silva",
      imageUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop",
    },
  ];

  return (
    <div className="pb-40 px-10 pt-24 relative overflow-hidden">
      <p className="text-4xl font-bold">Membros da Liga</p>

      {/* Diretoria */}
      <div className="glass-dark w-full rounded-xl p-4 flex flex-col gap-4 mt-6">
        <p className="text-2xl font-bold">Diretoria</p>
        <div className="overflow-x-auto flex w-full gap-4">
          {boardMembers.map((member, i) => (
            <div key={i} className="text-center">
              <div className="avatar">
                <div className="w-40 rounded-full">
                  <img src={member.imageUrl} alt={`${member.name}`} />
                </div>
              </div>
              <p className="font-bold text-xl">{member.name}</p>
              <p className="text-lg">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Membros da Liga */}
      <div className="glass-dark w-full rounded-xl p-4 flex flex-col gap-4 mt-6">
        <p className="text-2xl font-bold">Membros</p>
        <div className="overflow-x-auto flex w-full gap-4">
          {leagueMembers.map((member, i) => (
            <div key={i} className="text-center">
              <div className="avatar">
                <div className="w-28 rounded-full">
                  <img src={member.imageUrl} alt={`${member.name}`} />
                </div>
              </div>
              <p className="font-bold text-md">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
