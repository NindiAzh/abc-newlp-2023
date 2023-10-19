import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectsItem({ name, desc, hrefwebsite, descLink, image }: any) {
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
          src="/icon-link-web.svg"
          alt="icon-link-web"
          width={0}
          height={0}
          className="w-[22px] h-[26px]"
        />
        <Link href={hrefwebsite} legacyBehavior>
          <a
            target="_blank"
            className="lg:text-base text-sm text-grey font-semibold mx-[13px] hover:text-grey-900"
          >
            {descLink}
          </a>
        </Link>
      </div>
    </article>
  );
}
