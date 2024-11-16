"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import React from "react";
import { MeetingDetailsHeader } from "@/components/MeetingDetailsHeader";

export default function MeetingDetails() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "Título não disponível";
  const description =
    searchParams.get("description") || "Descrição não disponível";
  const imageUrl = searchParams.get("imageUrl") || "/meeting.png";
  const extendedText =
    searchParams.get("extendedText") || "Texto extenso não disponível.";

  return (
    <div>
      <MeetingDetailsHeader />
      <div className="relative w-full h-96">
        <Image
          fill
          style={{ objectFit: "cover" }}
          priority
          src={imageUrl}
          alt="cover-meetings"
        />
      </div>

      <div className="p-10">
        <p className="text-5xl font-bold">{title}</p>
        <p className="mt-4 text-lg font-semibold">{description}</p>
        <p className="mt-4 text-lg">{extendedText}</p>
      </div>
    </div>
  );
}
