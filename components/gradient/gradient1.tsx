import Image from "next/image";
import React from "react";

export default function gradient1() {
  return (
    <>
      <div className="overflow-hidden hidden md:block absolute xl:-inset-x-0 xl:-top-10 lg:-top-60 md:-top-72 left-0 pointer-events-none">
        <Image
          className="relative w-[2000px] lg:left-[calc(20%-20rem)] md:left-[calc(40%-20rem)] left-[calc(90%-10rem)] sm:h-[65.375rem]"
          src="/gradient-hero1.svg"
          alt=""
          width={2000}
          height={1046}
        />
      </div>
      <div className="overflow-hidden hidden md:block absolute xl:-inset-x-0 xl:-top-12 xl:mt-12 lg:-top-80 md:-top-80 mt-20 left-0 pointer-events-none">
        <Image
          className="relative w-[2000px] lg:left-[calc(40%-20rem)] md:left-[calc(70%-20rem)] left-[calc(20%-10rem)] sm:h-[65.375rem]"
          src="/gradient-hero2.svg"
          alt=""
          width={2000}
          height={1046}
        />
      </div>
      {/* For Mobile */}
      <div className="overflow-hidden absolute block md:hidden top-0 left-0 pointer-events-none">
        <Image
          className="relative w-[1427.5px] h-[841.5px]"
          src="/gradient-hero-mobile.svg"
          alt=""
          height={1427.5}
          width={841.5}
        />
      </div>
    </>
  );
}
