import Image from "next/image";
import React from "react";
import Gradient1 from "../components/gradient/gradient1";
import Judul from "@components/judul";
import Tema from "@components/tema";
import Newsletter from "@components/Newsletter";

export default function works() {
  const collab = [
    {
      name: "Perencanaan Project",
      description:
        "Membahas perencanaan pengembangan kebutuhan kamu yang transparan",
      icon: "/icon-check.svg",
    },
    {
      name: "Laporan Eksekutif",
      description:
        "Dapatkan laporan berkala mengenai pengembangan yang telah dikerjakan",
      icon: "/icon-check.svg",
    },
    {
      name: "Komunikasi Rutin",
      description:
        "Kami siap menjawab semua pertanyaan dan memberikan informasi yang kamu butuhkan",
      icon: "/icon-check.svg",
    },
  ];

  const passion = [
    {
      name: "Kualitas Kode",
      description:
        "Memberiakan Kode berkualitas baik yang telah kami tinjau dan uji.",
      icon: "/icon-check.svg",
    },
    {
      name: "Tes Otomatis",
      description:
        "Melakukan rangkaian tes otomatis dengan solusi internasional",
      icon: "/icon-check.svg",
    },
    {
      name: "Selalu Terkini",
      description:
        "Membangun solusi kamu dengan teknologi dan informasi terkini",
      icon: "/icon-check.svg",
    },
  ];

  const tech = [
    {
      name: "Mobile Devolopment",
      description: "Flutter, Dart, Kotlin",
      icon: "/icon-check.svg",
    },
    {
      name: "Database",
      description: "MySQL, PostgreSQL, Redis DB",
      icon: "/icon-check.svg",
    },
    {
      name: "Framework Backand  & Frontend",
      description:
        "Laravel, Django, Flask, Next JS, Nuxt JS,React JS, Vue JS, Angular JS",
      icon: "/icon-check.svg",
    },
    {
      name: "Framework",
      description: "Tailwind CSS, Bootstrap 5",
      icon: "/icon-check.svg",
    },
    {
      name: "Programming Language Development",
      description: "PHP, Node JS, Golang, Python, Javascript",
      icon: "/icon-check.svg",
    },
    {
      name: "Stack",
      description: "MERN, MEVN, MEAN, TALL",
      icon: "/icon-check.svg",
    },
    {
      name: "Middleware",
      description: "Spatial Laravel, JSON Web Token (JWT)",
      icon: "/icon-check.svg",
    },
    {
      name: "Notification",
      description: "Firebase",
      icon: "/icon-check.svg",
    },
    {
      name: "Design",
      description: "Figma, Zeplin",
      icon: "/icon-check.svg",
    },
  ];

  const toolOne = [
    {
      name: "Telegram",
      description: "Untuk berkelanjutan komunikasi dengan tim",
      imageSrc: "/telegram.svg",
      link: "View integration",
      href: "#",
    },
    {
      name: "Microsoft Teams",
      description: "Untuk konferensi video dan koordinas ",
      imageSrc: "/micro.svg",
      link: "View integration",
      href: "#",
    },
    {
      name: "Google Docs",
      description: "Untuk dinamis kolaborasi dan dokumentasi",
      imageSrc: "/gdocs.svg",
      link: "View integration",
      href: "#",
    },
    {
      name: "Figma",
      description: "Untuk berkelanjutan komunikasi dengan tim",
      imageSrc: "/figma.svg",
      link: "View integration",
      href: "#",
    },
    {
      name: "Whimsical",
      description: "Untuk merancang dan menyajikandesain maket",
      imageSrc: "/whimsical.svg",
      link: "View integration",
      href: "#",
    },
  ];

  const toolTwo = [
    {
      name: "Figma",
      description: "Untuk berkelanjutan komunikasi dengan tim",
      imageSrc: "/figma.svg",
      link: "View integration",
      href: "#",
    },
    {
      name: "Whimsical",
      description: "Untuk merancang dan menyajikandesain maket",
      imageSrc: "/whimsical.svg",
      link: "View integration",
      href: "#",
    },
  ];

  return (
    <section>
      <Gradient1 />

      {/* Collab */}
      <div className="container overflow-hidden py-16 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-[24px] text-green-600">
                  COLLABORATIUM
                </h2>
                <p className="mt-[24px] text-4xl font-semibold text-grey-900 sm:text-3xl">
                  Kami suka bekolaborasi
                </p>
                <p className="mt-4 text-lg leading-7 text-gray-600">
                  Komunikasi dan transparasi adalah pondasi dari hubungan jangka
                  panjang yang kita semua inginkan. Jadi, ayo ngobrol dan gali
                  lebih dalam lagi kebutuhan kamu!
                </p>
                <dl className="mt-8 max-w-xl space-y-[20px] lg:max-w-none md:text-lg text-base leading-7 px-4">
                  {collab.map((collabs) => (
                    <div key={collabs.name} className="relative pl-11">
                      <dt className="font-semibold text-grey-900">
                        <Image
                          src={collabs.icon}
                          alt="check"
                          className="absolute top-1 left-1 h-[28px] w-[28px]"
                          width={28}
                          height={28}
                          aria-hidden="true"
                        />
                        {collabs.name}
                      </dt>{" "}
                      <dd className="text-grey-600">{collabs.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="sm:-my-14 -my-48">
              <Image
                src="/img-works-collab.svg"
                alt="collab"
                className="w-[720px] h-[750px] mx-auto"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Passion */}
      <div className="overflow-hidden bg-green-50 py-16 sm:py-32">
        <div className="container mx-auto">
          <div className="mx-auto grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pt-4 lg:pl-4">
              <div className="lg:max-w-lg">
                <h2 className="md:text-base text-sm font-semibold leading-6 text-green-600">
                  PASSION
                </h2>
                <p className="mt-[14px] text-2xl font-semibold text-grey-900 sm:text-3xl">
                  Kami membangun dengan sepenuh hati
                </p>
                <p className="mt-4 text-lg leading-7 text-grey-600">
                  Membangun sesuatu bukan hanya merupakan sebuah pekerjaan bagi
                  kami. Kami suka (dengan penuh hasrat) membangun solusi luar
                  biasa untuk orang-orang luar biasa!
                </p>
                <dl className="mt-8 max-w-xl space-y-8 lg:max-w-none md:text-lg text-base leading-6 px-4">
                  {passion.map((passions) => (
                    <div key={passions.name} className="relative pl-11">
                      <dt className="font-semibold text-gray-900">
                        <Image
                          src={passions.icon}
                          alt="passion"
                          width={28}
                          height={28}
                          className="absolute top-1 left-1 h-[28] w-[28]"
                          aria-hidden="true"
                        />
                        {passions.name}
                      </dt>{" "}
                      <dd className="text-grey-600">{passions.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <Image
                src="/img-works-passion.svg"
                alt="passion"
                className="w-[547px] h-[536px] mx-auto"
                width={547}
                height={536}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Clean Code */}
      <div className="container mt-10 py-10 sm:py-20">
        <div className="mx-auto grid lg:grid-cols-2 gap-0">
          <div className="flex flex-col justify-center lg:mx-0 mx-0 lg:max-w-lg">
            <h2 className="md:text-base text-sm font-semibold leading-6 text-green-600">
              CLEAN CODE
            </h2>
            <p className="mt-[14px] text-2xl font-semibold text-grey-900 sm:text-3xl">
              Kami percaya dengan kode yang bersih
            </p>
            {/* gradient */}
            <div className="absolute lg:block hidden">
              <Image
                className="relative w-[1427.5px] h-[841.5px] top-96 -z-10"
                src="/gradient-work-page1.svg"
                alt=""
                width={1427.5}
                height={841.5}
              />
              <Image
                className="relative w-[1427.5px] h-[841.5px] -top-44 -left-28"
                src="/gradient-work-page2.svg"
                alt=""
                width={1427.5}
                height={841.5}
              />
            </div>

            <p className="mt-4 md:text-lg text-base leading-7 text-grey-600">
              Kode yang bersih dapat berbicara lebih jelas dibandingkan dengan
              catatan berwarna yang menumpuk - kami belajar dari pengalaman.
              Fokus kami adalah untuk membangun dengan prinsip kode yang bersih
              (yang tentunya akan membuat tenang tim IT kamu juga) demi produk
              yang berjangka panjang dan dapat selalu dikembangkan.
            </p>
          </div>
          <Image
            className="w-[568.26px] h-[487.82px] mx-auto lg:mt-0 mt-[48px] 2xl:mx-32 lg:mx-20"
            src="/img-works-code.svg"
            alt="Art By Code Hero"
            width={0}
            height={0}
          />
        </div>
      </div>

      {/* Technical Expertise */}
      <div className="overflow-hidden bg-green-50 py-16 sm:py-32">
        <div className="container mx-auto">
          <div className="mx-auto grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pt-4 lg:pl-4">
              <div className="lg:max-w-lg">
                <h2 className="md:text-base text-sm font-semibold leading-6 text-green-600">
                  TECHNICAL EXPERTISE
                </h2>
                <p className="mt-[14px] text-2xl font-semibold text-grey-900 sm:text-3xl">
                  Kemampuan teknis kami
                </p>
                <p className="mt-4 text-lg leading-7 text-grey-600">
                  Kami tidak akan pernah berhenti belajar bahasa dan teknologi
                  terbaru agar dapat memberikan solusi yang terbaik bagi kamu
                </p>
                <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-2 sm:text-base text-lg leading-7 sm:grid-cols-2 lg:gap-y-2 px-4 mt-8">
                  {tech.map((techs) => (
                    <div key={techs.name} className="relative pl-11">
                      <dt className="font-semibold text-gray-900">
                        <Image
                          src={techs.icon}
                          alt=""
                          width={28}
                          height={28}
                          className="absolute top-1 left-0 h-[28] w-[28]"
                          aria-hidden="true"
                        />
                        {techs.name}
                      </dt>
                      <dd className="text-grey-600">{techs.description}</dd>
                    </div>
                  ))}
                </dl>

                {/* <div className="mx-auto mt-10 max-w-7xl px-6 sm:mt-8 md:mt-8 lg:px-2">
                  <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-0 text-lg sm:text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8 lg:gap-y-2">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-11">
                        <dt className="font-semibold text-grey-9900">
                          <Image
                            src={feature.icon}
                            alt=""
                            width={28}
                            height={28}
                            className="absolute top-1 left-1 h-[28] w-[28]"
                            aria-hidden="true"
                          />
                          {feature.name}
                        </dt>{" "}
                        <dd className="text-grey-600">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div> */}

                {/* <div className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-2 text-lg sm:text-base leading-7 sm:grid-cols-2 lg:gap-y-2 mt-8">
                  <div className="relative pl-9">
                    <dt className="font-semibold text-gray-900">
                      <Image
                        src="/icon-check.svg"
                        alt=""
                        width={28}
                        height={28}
                        className="absolute top-1 left-0 h-[28] w-[28]"
                        aria-hidden="true"
                      />
                      <h1 className="text-puerto-rico-500 font-black text-lg font-nuni">
                        Mobile Development
                      </h1>
                      <p className="font-normal text-sm font-nuni">
                        Flutter, Dart, Kotlin
                      </p>
                      <h1 className="text-puerto-rico-500 font-black text-lg font-nuni mt-7">
                        Framework Backend & Frontend
                      </h1>
                      <p className="font-normal text-sm font-nuni w-4/6">
                        Laravel, Django, Flask, Next JS, Nuxt JS, React JS, Vue
                        JS, Angular JS
                      </p>

                      <h1 className="text-puerto-rico-500 font-black text-lg font-nuni mt-7">
                        Programming Language Development
                      </h1>
                      <p className="font-normal text-sm font-nuni">
                        PHP, Node JS, Golang, Python, Javascript
                      </p>

                      <h1 className="text-puerto-rico-500 font-black text-lg font-nuni mt-7">
                        Middleware
                      </h1>
                      <p className="font-normal text-sm font-nuni">
                        Spatial Laravel, JSON Web Token (JWT)
                      </p>
                      <h1 className="text-puerto-rico-500 font-black text-lg font-nuni ml-3">
                        Database
                      </h1>
                    </dt>
                  </div>
                  <div className="relative pl-9">
                    <dt className="font-semibold text-gray-900">
                      <Image
                        src="/icon-check.svg"
                        alt=""
                        width={28}
                        height={28}
                        className="absolute top-1 left-0 h-[28] w-[28]"
                        aria-hidden="true"
                      />
                      <p className="font-normal text-sm font-nuni ml-3 mx-4">
                        MySQL, PostgreSQL, Redis DB
                      </p>

                      <h1 className="text-puerto-rico-500 font-black text-lg font-nuni mt-2 ml-3">
                        Framework CSS
                      </h1>
                      <p className="font-normal text-sm font-nuni ml-3">
                        Tailwind CSS, Bootstrap 5
                      </p>

                      <h1 className="text-puerto-rico-500 font-black text-lg font-nuni mt-2 ml-3">
                        Stack
                      </h1>
                      <p className="font-normal text-sm font-nuni ml-3">
                        MERN, MEVN, MEAN, TALL
                      </p>

                      <h1 className="text-puerto-rico-500 font-black text-lg font-nuni  mt-2 ml-3">
                        Notification
                      </h1>
                      <p className="font-normal text-sm font-nuni ml-3">
                        Firebase
                      </p>

                      <h1 className="text-puerto-rico-500 font-black text-lg font-nuni  mt-2 ml-3">
                        Design
                      </h1>
                      <p className="font-normal text-sm font-nuni ml-3">
                        Figma, Zeplin
                      </p>
                    </dt>
                </div>
                </div> */}
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <Image
                src="/img-works-tech.svg"
                alt="passion"
                className="w-[490px] h-[498.24px] mx-auto"
                width={547}
                height={536}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Alat Kolaborasi */}
      <div className="container grid grid-cols-12 py-24 sm:py-24">
        <Judul>Art By Code</Judul>
        <Tema>Alat Kolaborasi Kami</Tema>
        <p className="col-span-full xl:w-4/6 lg:w-5/6 text-grey-600 mx-auto text-center sm:text-xl text-lg leading-[30px]">
          Kami sepenuhnya mengutamakan kolaborasi dan kerja sama tim! Oleh
          karena itu, kami menggunakan sejumlah alat yang memudahkan Anda untuk
          bergabung dan menjadi bagian dari proses tersebut. Bersama-sama, kita
          dapat mencapai hal-hal luar biasa!
        </p>
      </div>
      {/* Line 1 */}
      <div className="mx-auto max-w-7xl py-4 sm:px-2 sm:py-16 lg:px-4">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-10 gap-x-8 px-4 lg:max-w-none lg:grid-cols-3 md:grid-cols-2">
          {toolOne.map((toolOnes) => (
            <div
              key={toolOnes.name}
              className="text-center sm:flex sm:text-left md:block md:text-center"
            >
              <div className="sm:flex-shrink-0">
                <div className="flow-root">
                  <Image
                    className="mx-auto h-16 w-16"
                    src={toolOnes.imageSrc}
                    alt=""
                    width={64}
                    height={64}
                  />
                </div>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-4 lg:ml-0">
                <h3 className="sm:text-xl text-lg font-medium text-gray-900">
                  {toolOnes.name}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {toolOnes.description}
                </p>
                <div className="relative mt-[20px] flex">
                  <div className="mt-0 flex mx-auto text-center">
                    <a href="#" className="text-base text-green-600">
                      View integration <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Line 2 */}
      {/* <div className="mx-auto max-w-7xl py-4 sm:px-2 lg:-my-0 md:-my-10 lg:px-4">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-10 gap-x-8 px-4 lg:max-w-none lg:grid-cols-2">
          {toolTwo.map((toolTwos) => (
            <div
              key={toolTwos.name}
              className="text-center sm:flex sm:text-left lg:block lg:text-center"
            >
              <div className="sm:flex-shrink-0">
                <div className="flow-root">
                  <Image
                    className="mx-auto h-16 w-16"
                    src={toolTwos.imageSrc}
                    alt=""
                    width={64}
                    height={64}
                  />
                </div>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-4 lg:ml-0">
                <h3 className="sm:text-xl text-lg font-medium text-gray-900">
                  {toolTwos.name}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {toolTwos.description}
                </p>
                <div className="relative mt-[20px] flex">
                  <div className="mt-0 flex mx-auto text-center">
                    <a href="#" className="text-base text-green-600">
                      View integration <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div> */}
      <div className="container">
        <Newsletter />
      </div>
    </section>
  );
}
