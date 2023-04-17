import Image from "next/image";
import React from "react";
import Gradient1 from "../components/gradient/gradient1";
import Judul from "@components/judul";
import Tema from "@components/tema";
import Newsletter from "@components/Newsletter";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Head from "next/head";
import ScrollToTop from "../components/scroll";
import { Fade } from "react-awesome-reveal";

export default function Works() {
  const router = useRouter();
  const { pathname } = router;
  const { t } = useTranslation();
  const desc = t("work.collab.desc");

  const collab = [
    {
      name: t("work.collab.explainTitleOne"),
      description: t("work.collab.explainDescOne"),
      icon: "/icon-check.svg",
    },
    {
      name: t("work.collab.explainTitleTwo"),
      description: t("work.collab.explainDescTwo"),
      icon: "/icon-check.svg",
    },
    {
      name: t("work.collab.explainTitleThree"),
      description: t("work.collab.explainDescTwo"),
      icon: "/icon-check.svg",
    },
  ];

  const passion = [
    {
      name: t("work.passion.explainTitleOne"),
      description: t("work.passion.explainDescOne"),
      icon: "/icon-check.svg",
    },
    {
      name: t("work.passion.explainTitleTwo"),
      description: t("work.passion.explainDescTwo"),
      icon: "/icon-check.svg",
    },
    {
      name: t("work.passion.explainTitleThree"),
      description: t("work.passion.explainDescThree"),
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
      description: t("work.collabTools.teleDesc"),
      imageSrc: "/telegram.svg",
      href: "#",
    },
    {
      name: "Microsoft Teams",
      description: t("work.collabTools.microDesc"),
      imageSrc: "/micro.svg",
      href: "#",
    },
    {
      name: "Google Docs",
      description: t("work.collabTools.gdocsDesc"),
      imageSrc: "/gdocs.svg",
      href: "#",
    },
    {
      name: "Figma",
      description: t("work.collabTools.figmaDesc"),
      imageSrc: "/figma.svg",
      href: "#",
    },
    {
      name: "Whimsical",
      description: t("work.collabTools.whimDesc"),
      imageSrc: "/whimsical.svg",
      href: "#",
    },
  ];

  return (
    <>
      <Head>
        <title>Art By Code - Works</title>
        <meta name="title" content="Art By Code - Works" />
        <meta name="description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pathname} />
        <meta property="og:title" content="Art By Code - Works" />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content="/favicon/logo.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pathname} />
        <meta property="twitter:title" content="Art By Code - Works" />
        <meta property="twitter:description" content={desc} />
        <meta property="twitter:image" content="/favicon/logo.png" />
      </Head>
      <section>
        <Gradient1 />

        {/* Collab */}
        <div className="container overflow-hidden py-16 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <Fade direction="left">
                <div className="lg:pr-8 lg:pt-4">
                  <div className="lg:max-w-lg">
                    <h2 className="text-base font-semibold leading-[24px] text-green-600">
                      {t("work.collab.coll")}
                    </h2>
                    <p className="mt-[24px] text-4xl font-semibold text-grey-900 sm:text-3xl">
                      {t("work.collab.title")}
                    </p>
                    <p className="mt-4 text-lg leading-7 text-gray-600">
                      {t("work.collab.desc")}
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
                          <dd className="text-grey-600">
                            {collabs.description}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </Fade>
              <Fade direction="right">
                <div className="sm:-my-14 -my-48">
                  <Image
                    src="/img-works-collab.svg"
                    alt="collab"
                    className="w-[720px] h-[750px] mx-auto"
                    width={2432}
                    height={1442}
                  />
                </div>
              </Fade>
            </div>
          </div>
        </div>

        {/* Passion */}
        <div className="overflow-hidden bg-green-50 py-16 sm:py-32">
          <div className="container mx-auto">
            <div className="mx-auto grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <Fade direction="right">
                <div className="lg:ml-auto lg:pt-4 lg:pl-4">
                  <div className="lg:max-w-lg">
                    <h2 className="md:text-base text-sm font-semibold leading-6 text-green-600">
                      {t("work.passion.pass")}
                    </h2>
                    <p className="mt-[14px] text-2xl font-semibold text-grey-900 sm:text-3xl">
                      {t("work.passion.title")}
                    </p>
                    <p className="mt-4 text-lg leading-7 text-grey-600">
                      {t("work.passion.desc")}
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
                          <dd className="text-grey-600">
                            {passions.description}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </Fade>
              <div className="flex items-start justify-end lg:order-first">
                <Fade direction="left">
                  <Image
                    src="/img-works-passion.svg"
                    alt="passion"
                    className="w-[547px] h-[536px] mx-auto"
                    width={547}
                    height={536}
                  />
                </Fade>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Code */}
        <div className="container mt-10 py-10 sm:py-20">
          <div className="mx-auto grid lg:grid-cols-2 gap-0">
            <div className="flex flex-col justify-center lg:mx-0 mx-0 lg:max-w-lg">
              <Fade direction="left">
                <h2 className="md:text-base text-sm font-semibold leading-6 text-green-600">
                  {t("work.cleanCode.code")}
                </h2>
                <p className="mt-[14px] text-2xl font-semibold text-grey-900 sm:text-3xl">
                  {t("work.cleanCode.title")}
                </p>
              </Fade>
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
              <Fade direction="left">
                <p className="mt-4 md:text-lg text-base leading-7 text-grey-600">
                  {t("work.cleanCode.desc")}
                </p>
              </Fade>
            </div>
            <Fade direction="right">
              <Image
                className="w-[568.26px] h-[487.82px] mx-auto lg:mt-0 mt-[48px] 2xl:mx-32 lg:mx-20"
                src="/img-works-code.svg"
                alt="Art By Code Hero"
                width={0}
                height={0}
              />
            </Fade>
          </div>
        </div>

        {/* Technical Expertise */}
        <div className="overflow-hidden bg-green-50 py-16 sm:py-32">
          <div className="container mx-auto">
            <div className="mx-auto grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <Fade direction="right">
                <div className="lg:ml-auto lg:pt-4 lg:pl-4">
                  <div className="lg:max-w-lg">
                    <h2 className="md:text-base text-sm font-semibold leading-6 text-green-600">
                      {t("work.technical.tech")}
                    </h2>
                    <p className="mt-[14px] text-2xl font-semibold text-grey-900 sm:text-3xl">
                      {t("work.technical.title")}
                    </p>
                    <p className="mt-4 text-lg leading-7 text-grey-600">
                      {t("work.technical.desc")}
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
                  </div>
                </div>
              </Fade>
              <div className="flex items-start justify-end lg:order-first">
                <Fade direction="left">
                  <Image
                    src="/img-works-tech.svg"
                    alt="passion"
                    className="w-[490px] h-[498.24px] mx-auto"
                    width={547}
                    height={536}
                  />
                </Fade>
              </div>
            </div>
          </div>
        </div>

        {/* Alat Kolaborasi */}
        <Fade direction="top-left" triggerOnce>
          <div className="container grid grid-cols-12 py-24 sm:py-24">
            <Judul>Art By Code</Judul>
            <Tema>{t("work.collabTools.title")}</Tema>
            <p className="col-span-full xl:w-4/6 lg:w-5/6 text-grey-600 mx-auto text-center sm:text-xl text-lg leading-[30px]">
              {t("work.collabTools.desc")}
            </p>
          </div>
        </Fade>
        {/* Line 1 */}
        <Fade direction="left">
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
                          {t("work.collabTools.link")}{" "}
                          <span aria-hidden="true">&rarr;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Fade>
        <div className="container">
          <Newsletter />
        </div>

        <ScrollToTop />
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "id", ["common", "navbar"])),
  },
});
