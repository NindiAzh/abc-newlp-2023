import Image from "next/image";
import Link from "next/link";
import React from "react";
import Newsletter from "@components/Newsletter";
import Gradient1 from "../components/gradient/gradient1";
import Gradient6 from "../components/gradient/gradient6";

export default function solusi() {
  const appdev = [
    {
      name: "Pembuatan aplikasi yang berfokus pada pengguna dan unik",
      description:
        "Kami akan bekerja sama dengan Anda untuk membuat aplikasi seluler yang benar-benar milik Anda.",
      icon: "/icon-mess.svg",
      link: "Lihat lainnya",
      href: "#",
    },
    {
      name: "Ahli yang penuh semangat untuk melayani Anda",
      description:
        "Di Art By Code, kami sangat senang memiliki tim ahli pengembangan aplikasi yang bersemangat membantu bisnis mencapai tujuan digital mereka.",
      icon: "/icon-kilat.svg",
      link: "Lihat lainnya",
      href: "#",
    },
    {
      name: "Integrasi lancar dengan sistem dan proses bisnis Anda",
      description:
        "Di Art By Code, kami memahami pentingnya memastikan bahwa aplikasi Anda terintegrasi dengan sistem dan proses yang sudah ada dengan mulus.",
      icon: "/icon-share.svg",
      link: "Lihat lainnya",
      href: "#",
    },
  ];

  const webdev = [
    {
      name: "Desain web yang menakjubkan dan menonjol!",
      description:
        "Tim ahli kami akan menghidupkan website Anda dengan desain yang menarik perhatian, sehingga merek Anda akan lebih mencolok.",
      icon: "/icon-mess.svg",
    },
    {
      name: "Website yang disesuaikan untuk Anda!",
      description:
        "Kami tidak percaya pada solusi yang cocok untuk semua. Sebaliknya, kami bekerja dengan Anda untuk memahami kebutuhan unik Anda dan mengembangkan website yang disesuaikan dengan merefleksikan merek dan tujuan Anda.",
      icon: "/icon-kilat.svg",
    },
    {
      name: "Pengembangan yang menyenangkan di depan!",
      description:
        "Kami percaya bahwa pengembangan web seharusnya menyenangkan! Itulah mengapa kami menambahkan sentuhan ceria pada proyek kami sehingga membedakan kami dari pesaing.",
      icon: "/icon-share.svg",
    },
  ];

  const uiux = [
    {
      name: "Desain berpusat pada pengguna untuk pengalaman yang intuitif",
      description:
        "Tim desainer berpengalaman kami menggunakan pendekatan desain berpusat pada manusia untuk menciptakan pengalaman pengguna yang intuitif dan menarik yang mencerminkan merek Anda dan kebutuhan pelanggan Anda.",
      icon: "/icon-mess.svg",
    },
    {
      name: "Solusi UI/UX yang disesuaikan dengan kebutuhan bisnis dan pelanggan Anda",
      description:
        "Kami meluangkan waktu untuk memahami bisnis dan pelanggan Anda, dan menggunakan pengetahuan itu untuk membuat solusi UI/UX yang disesuaikan dengan kebutuhan dan tujuan Anda yang spesifik.",
      icon: "/icon-kilat.svg",
    },
    {
      name: "Desain yang sesuai dengan gaya dan suara merek Anda",
      description:
        "Dari desain minimalis hingga desain berani, klasik hingga modern, desainer kami memiliki keberagaman untuk membuat desain UI/UX yang sesuai dengan gaya dan suara merek Anda, sambil juga efektif dalam mencapai hasil yang diinginkan.",
      icon: "/icon-share.svg",
    },
  ];

  return (
    <>
      {/* App Dev */}
      <section>
        <Gradient1 />
        <Gradient6 />
        <div className="container grid grid-cols-12 py-10 sm:py-24 text-start">
          <h2 className="text-base font-semibold leading-[24px] text-green-600 flex">
            APP <span className="mx-1">DEVELOPMENT</span>
          </h2>
          <h2 className="mt-[12px] col-span-full text-grey-900 font-semibold mb-[12px] md:text-4xl text-3xl leading-[44px] max-w-3xl">
            Ayo Bangun Aplikasi Bersama! Tim Ahli ABC Akan Membantu Anda
            Mencapai Tujuan Digital dengan Solusi yang Disesuaikan dan Sentuhan
            Ceria!
          </h2>
          <p className="mt-[20px] col-span-full text-grey-600 md:text-xl text-lg leading-[30px] max-w-3xl">
            Hai! Siap untuk membawa bisnis Anda ke level selanjutnya dengan
            aplikasi yang luar biasa? Art By Code siap membantu! Tim ahli kami
            menawarkan solusi pengembangan aplikasi yang disesuaikan dengan
            kebutuhan dan tujuan Anda. Dengan teknologi terbaru dan sentuhan
            kreatif yang ceria, kami akan membuat aplikasi yang pasti
            mengesankan dan membantu Anda mencapai mimpi digital Anda. Mari kita
            bekerja sama untuk menghidupkan visi aplikasi Anda!
          </p>
        </div>
        <div className="container overflow-hidden md:-my-32 lg:my-0 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:-mt-24">
                <div className="lg:max-w-xl">
                  <dl className="mt-8 max-w-xl space-y-[20px] lg:max-w-none px-4">
                    {appdev.map((appdevs) => (
                      <div key={appdevs.name} className="relative pl-16">
                        <dt className="text-xl leading-[30px] font-semibold text-grey-900">
                          <Image
                            src={appdevs.icon}
                            alt="check"
                            className="absolute top-1 left-1 h-[48px] w-[48px]"
                            width={48}
                            height={48}
                            aria-hidden="true"
                          />
                          {appdevs.name}
                        </dt>{" "}
                        <dd className="mt-2 text-base leading-6 text-grey-600">
                          {appdevs.description}
                        </dd>
                        <div className="mt-[20px]">
                          <Link href={appdevs.href} legacyBehavior>
                            <a className="text-base text-green-600 font-semibold leading-6">
                              {appdevs.link}
                            </a>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="sm:-my-0 -my-[48px]">
                <Image
                  src="/img-solusi-app.svg"
                  alt="AppDev"
                  className="w-[548.33px] h-[450px] mx-auto"
                  width={548.33}
                  height={450}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Dev */}
      <section className="bg-green-50 lg:mt-[96px] mt-16">
        <div className="container grid grid-cols-12 py-10 sm:py-28 text-start">
          <h2 className="text-base font-semibold leading-[24px] text-green-600 flex">
            WEB <span className="mx-1">DEVELOPMENT</span>
          </h2>
          <h2 className="mt-[12px] col-span-full text-grey-900 font-semibold mb-[12px] md:text-4xl text-3xl leading-[44px] max-w-3xl">
            Mentransformasikan Kehadiran Web Anda dengan Seni Melalui Kode:
            Dimana Kreativitas Ceria Bertemu dengan Keahlian Profesional!
          </h2>
          <p className="mt-[20px] col-span-full text-grey-600 md:text-xl text-lg leading-[30px] max-w-3xl">
            Hai! Ingin memiliki website yang unik dan menonjol dari yang lain?
            Art By Code adalah solusinya untuk pengembangan website yang
            terbaik! Tim ahli kami akan menghidupkan visi Anda dengan sentuhan
            kreatif yang ceria. Mari kita membuat website Anda menjadi
            perbincangan di kota!
          </p>
        </div>
        <div className="overflow-hidden md:-my-40 lg:my-0 sm:py-16">
          <div className="container mx-auto">
            <div className="mx-auto grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:ml-auto lg:-mt-24 lg:pl-4">
                <div className="lg:max-w-xl">
                  <dl className="mt-8 max-w-xl space-y-[48px] lg:max-w-none px-4">
                    {webdev.map((webdevs) => (
                      <div key={webdevs.name} className="relative pl-16">
                        <dt className="text-xl font-semibold text-gray-900 leading-[30px]">
                          <Image
                            src={webdevs.icon}
                            alt="passion"
                            width={48}
                            height={48}
                            className="absolute top-1 left-1 h-[48px] w-[48px]"
                            aria-hidden="true"
                          />
                          {webdevs.name}
                        </dt>{" "}
                        <dd className="text-base text-grey-600 leading-6">
                          {webdevs.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="flex items-start justify-end lg:order-first">
                <Image
                  src="/img-solusi-webdev.svg"
                  alt="passion"
                  className="w-[561px] h-[387px] mx-auto"
                  width={561}
                  height={387}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UIUX Design */}
      <section>
        <div className="container grid grid-cols-12 py-12 lg:py-24 md:py-60 text-start">
          <h2 className="text-base font-semibold leading-[24px] text-green-600 flex">
            UI/UX <span className="mx-1">DESIGN</span>
          </h2>
          <h2 className="mt-[12px] col-span-full text-grey-900 font-semibold mb-[12px] md:text-4xl text-3xl leading-[44px] max-w-3xl">
            Buatlah Pengalaman Pengguna yang Menarik dan Tingkatkan Desain Anda
            dengan Solusi Pengembangan UI/UX Kami yang Komprehensif.
          </h2>
          <p className="mt-[20px] col-span-full text-grey-600 md:text-xl text-lg leading-[30px] max-w-3xl">
            Di Art By Code, kami percaya bahwa desain yang baik lebih dari
            sekadar estetika - ini tentang menciptakan pengalaman yang dicintai
            pengguna Anda. Solusi pengembangan UI/UX kami menggabungkan
            kreativitas dan fungsionalitas untuk membuat antarmuka yang mulus
            yang tidak hanya memukau secara visual tetapi juga mudah digunakan.
            Dari tahap penemuan hingga pengujian, kami bekerja sama dengan Anda
            untuk memastikan bahwa antarmuka Anda memenuhi tujuan bisnis Anda
            dan memuaskan pengguna Anda pada setiap langkahnya.
          </p>
        </div>
        <div className="container overflow-hidden md:-my-32 lg:my-0 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:-mt-24">
                <div className="lg:max-w-xl">
                  <dl className="mt-8 max-w-xl space-y-[20px] lg:max-w-none px-4">
                    {uiux.map((uiuxs) => (
                      <div key={uiuxs.name} className="relative pl-16">
                        <dt className="text-xl leading-[30px] font-semibold text-grey-900">
                          <Image
                            src={uiuxs.icon}
                            alt="check"
                            className="absolute top-1 left-1 h-[48px] w-[48px]"
                            width={48}
                            height={48}
                            aria-hidden="true"
                          />
                          {uiuxs.name}
                        </dt>{" "}
                        <dd className="mt-2 text-base leading-6 text-grey-600">
                          {uiuxs.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="sm:-my-0 -my-[48px]">
                <Image
                  src="/img-solusi-uiux.svg"
                  alt="AppDev"
                  className="w-[576px] h-[351px] mx-auto"
                  width={576}
                  height={351}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <Newsletter />
      </div>
    </>
  );
}

// xl:pl-36
