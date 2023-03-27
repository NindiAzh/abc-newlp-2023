import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectsItem({ name, desc, image }: any) {
  return (
    <article className="text-start">
      <Image
        className="w-full"
        src={image}
        alt="img-project"
        width={0}
        height={0}
      />
      <h3 className="lg:text-2xl text-xl font-semibold mt-4 mb-1">{name}</h3>
      <div className="flex mt-[16px]">
        <Image
          src="/icon-google-play.svg"
          alt="icon-project"
          width={22}
          height={26}
        />
        <Link href="https://play.google.com/" legacyBehavior>
          <a
            target="_blank"
            className="lg:text-base text-sm text-grey font-semibold mx-[13px]"
          >
            {desc}
          </a>
        </Link>
      </div>
      {/* <p className="text-base text-gray-400">{desc}</p> */}
    </article>
  );
}
