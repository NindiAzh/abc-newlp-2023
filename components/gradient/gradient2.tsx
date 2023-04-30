import Image from "next/image";
import React from "react";

export default function gradient2() {
  return (
    <>
      <div className="overflow-hidden hidden md:block absolute -inset-x-0 -top-40 -z-10">
        <Image
          className="relative w-[1427.5px] h-[841.5px] lg:left-[calc(20%-20rem)] md:left-0 lg:mt-[1250px] md:mt-[1900px]"
          src="/gradient-solusi1.svg"
          alt=""
          width={1427.5}
          height={841.5}
        />
      </div>
      <div className="overflow-hidden hidden md:block absolute -inset-x-0 lg:-top-24 md:top-14 -z-10">
        <Image
          className="relative w-[1427.5px] h-[841.5px] lg:left-[calc(40%-20rem)] md:left-[calc(75%-20rem)] lg:mt-[1250px] md:mt-[1700px]"
          src="/gradient-solusi2.svg"
          alt="/gradient-solusi2"
          width="0"
          height="0"
        />
      </div>

      {/* For Mobile */}
      <div className="overflow-hidden absolute block md:hidden top-0 left-0 -z-10">
        <Image
          className="relative mt-[1530px] w-[1427.5px] h-[841.5px]"
          src="/gradient-solusi2.svg"
          alt="gradient-solusi2"
          width="0"
          height="0"
        />
      </div>
    </>
  );
}
