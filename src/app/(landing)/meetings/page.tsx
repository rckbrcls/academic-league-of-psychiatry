import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Meetings() {
  return (
    <div className="pb-40 px-10 pt-24">
      <div className=" absolute -top-10 -left-28 -z-10  w-96 h-96">
        <Image
          fill
          style={{ objectFit: "cover" }}
          priority
          src={"circle.svg"}
          alt="cover-meetings"
        />
      </div>

      <div className="absolute -bottom-10 -right-28 -z-10  w-96 h-96">
        <Image
          fill
          style={{ objectFit: "cover" }}
          priority
          src={"star.svg"}
          alt="cover-meetings"
        />
      </div>

      <p className="text-4xl font-bold">Reuniões</p>
      <div className="flex mt-4">
        <select className="select glass-dark select-bordered w-full max-w-xs">
          <option disabled selected>
            Ordenar por
          </option>
          <option>Data mais recente</option>
          <option>Data mais antiga</option>
        </select>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <MeetingCard />
        <MeetingCard />
        <MeetingCard />
        <MeetingCard />
        <MeetingCard />
        <MeetingCard />
      </div>
    </div>
  );
}

export const MeetingCard = () => {
  return (
    <Link passHref href={"/meetings/1"}>
      <div className="glass-dark w-full rounded-lg p-4 hover:scale-105 hover:cursor-pointer duration-500">
        <div className="relative w-full h-48">
          <Image
            className="rounded-lg"
            fill
            style={{ objectFit: "cover" }}
            priority
            src={"/meeting.png"}
            alt="cover-meetings"
          />
        </div>
        <p className="text-2xl font-bold mt-4">Reunião sobre algo</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet
          arcu neque. In felis nunc, aliquam et neque quis, tempus eleifend
          lorem...
        </p>
      </div>
    </Link>
  );
};
