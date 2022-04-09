import React from "react";
import Image from "next/image";

type Props = {};

export default function index({}: Props) {
  return (
    <section className="relative h-[500px] md:h-[700px]">
      <div className="h-[500px] md:h-[700px] absolute top-0 w-full border-b-[12px] border-secondary-500 mx-auto flex flex-col justify-end ">
        <div className="max-w-7xl mx-auto relative z-30 py-12 w-full px-6 md:px-12">
          <h1 className="text-secondary-500 uppercase font-bold tracking-widest text-sm">
            Nothing matters more than
            <em className="text-2xl md:text-6xl italic block text-white font-normal font-serif tracking-widest">
              Our Clients
            </em>
          </h1>
        </div>
        <Image
          src="/client-work.jpg"
          objectFit="cover"
          alt="hero"
          layout="fill"
          className=" object-right "
        />
        <div className="bg-gradient-to-b from-secondary-700 to-primary-700 h-full opacity-40 absolute bottom-0 w-full" />
        <div className="bg-gradient-to-t from-primary-800 to-transparent h-1/2 opacity-70 z-20 absolute bottom-0 w-full" />
        <div className="bg-gradient-to-b from-primary-800 to-transparent h-1/4 opacity-80 z-20 absolute top-0 w-full" />
      </div>
    </section>
  );
}
