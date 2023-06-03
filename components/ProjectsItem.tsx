import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectsItem({ name, desc, hrefgoogle, hrefappstore, descPlay, descStore, image }: any) {
  return (
    <article className="text-start">
      <Image
        className="w-full"
        src={image}
        alt="img-project"
        width={592}
        height={360}
      />
      <h3 className="lg:text-2xl text-xl font-semibold mt-4 mb-1">{name}</h3>
      <p className="text-grey-600 mx-auto lg:text-xl text-base">{desc}</p>
      <div className="flex mt-[16px]">
        <Image
          src="/icon-google-play.svg"
          alt="icon-project"
          width={0}
          height={0}
          className="w-[22px] h-[26px]"
        />
        <Link href={hrefgoogle} legacyBehavior>
          <a
            target="_blank"
            className="lg:text-base text-sm text-grey font-semibold mx-[13px] hover:text-grey-900"
          >
            {descPlay}
          </a>
        </Link>

        <Image
          src="/icon-appstore.svg"
          alt="icon-project"
          width={0}
          height={0}
          className="w-[28px] h-[26]"
        />
        <Link href={hrefappstore} legacyBehavior>
          <a
            target="_blank"
            className="lg:text-base text-sm text-grey font-semibold mx-[8px] hover:text-grey-900"
          >
            {descStore}
          </a>
        </Link>
      </div>
    </article>
  );
}
