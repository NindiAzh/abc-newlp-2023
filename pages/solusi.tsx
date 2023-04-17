import Image from "next/image";
import Link from "next/link";
import React from "react";
import Newsletter from "@components/Newsletter";
import Gradient1 from "../components/gradient/gradient1";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Head from "next/head";
import ScrollToTop from "../components/scroll";
import { Fade } from "react-awesome-reveal";

export default function Solusi() {
  const router = useRouter();
  const { pathname } = router;
  const { t } = useTranslation();
  const desc = t("solution.appdev.title");

  const appdev = [
    {
      name: t("solution.appdev.explainTitleOne"),
      description: t("solution.appdev.explainDescOne"),
      icon: "/icon-mess.svg",
      link: t("solution.appdev.link"),
      href: "#",
    },
    {
      name: t("solution.appdev.explainTitleTwo"),
      description: t("solution.appdev.explainDescTwo"),
      icon: "/icon-kilat.svg",
      link: t("solution.appdev.link"),
      href: "#",
    },
    {
      name: t("solution.appdev.explainTitleThree"),
      description: t("solution.appdev.explainDescThree"),
      icon: "/icon-share.svg",
      link: t("solution.appdev.link"),
      href: "#",
    },
  ];

  const webdev = [
    {
      name: t("solution.webdev.explainTitleOne"),
      description: t("solution.webdev.explainDescOne"),
      icon: "/icon-mess.svg",
    },
    {
      name: t("solution.webdev.explainTitleTwo"),
      description: t("solution.webdev.explainDescTwo"),
      icon: "/icon-kilat.svg",
    },
    {
      name: t("solution.webdev.explainTitleThree"),
      description: t("solution.webdev.explainDescThree"),
      icon: "/icon-share.svg",
    },
  ];

  const uiux = [
    {
      name: t("solution.ui/ux.explainTitleOne"),
      description: t("solution.ui/ux.explainDescOne"),
      icon: "/icon-mess.svg",
    },
    {
      name: t("solution.ui/ux.explainTitleTwo"),
      description: t("solution.ui/ux.explainDescTwo"),
      icon: "/icon-kilat.svg",
    },
    {
      name: t("solution.ui/ux.explainTitleThree"),
      description: t("solution.ui/ux.explainDescOne"),
      icon: "/icon-share.svg",
    },
  ];

  return (
    <>
      <Head>
        <title>Art By Code - Solution</title>
        <meta name="title" content="Art By Code - Solution" />
        <meta name="description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pathname} />
        <meta property="og:title" content="Art By Code - Solution" />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content="/favicon/logo.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pathname} />
        <meta property="twitter:title" content="Art By Code - Solution" />
        <meta property="twitter:description" content={desc} />
        <meta property="twitter:image" content="/favicon/logo.png" />
      </Head>
      <section>
        <Gradient1 />
        {/* App Dev */}
        <Fade direction="left" triggerOnce>
          <div className="container grid grid-cols-14 py-10 sm:py-24 text-start">
            <h2 className="text-base font-semibold leading-[24px] text-green-600 flex">
              {t("solution.appdev.app")}
            </h2>
            <h2 className="mt-[12px] col-span-full text-grey-900 font-semibold mb-[12px] md:text-4xl text-3xl leading-[44px] max-w-3xl">
              {t("solution.appdev.title")}
            </h2>
            <p className="mt-[20px] col-span-full text-grey-600 md:text-xl text-lg leading-[30px] max-w-3xl">
              {t("solution.appdev.desc")}
            </p>
          </div>
        </Fade>
        <div className="container overflow-hidden md:-my-32 lg:my-0 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <Fade direction="left">
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
              </Fade>
              <Fade direction="right">
                <div className="sm:-my-0 -my-[48px]">
                  <Image
                    src="/img-solusi-app.svg"
                    alt="AppDev"
                    className="w-[548.33px] h-[450px] mx-auto"
                    width={548.33}
                    height={450}
                  />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      {/* Web Dev */}
      <section className="bg-green-50 lg:mt-[96px] mt-16">
      <Fade direction="left" triggerOnce>
        <div className="container grid grid-cols-42 py-10 sm:py-28 text-start">
          <h2 className="text-base font-semibold leading-[24px] text-green-600 flex">
            {t("solution.webdev.web")}
          </h2>
          <h2 className="mt-[12px] col-span-full text-grey-900 font-semibold mb-[12px] md:text-4xl text-3xl leading-[44px] max-w-3xl">
            {t("solution.webdev.title")}
          </h2>
          <p className="mt-[20px] col-span-full text-grey-600 md:text-xl text-lg leading-[30px] max-w-3xl">
            {t("solution.webdev.desc")}
          </p>
        </div>
        </Fade>
        <div className="overflow-hidden md:-my-40 lg:my-0 sm:py-16">
          <div className="container mx-auto">
            <div className="mx-auto grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <Fade direction="left">
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
              </Fade>
              <Fade direction="right">
              <div className="flex items-start justify-end lg:order-first">
                <Image
                  src="/img-solusi-webdev.svg"
                  alt="passion"
                  className="w-[561px] h-[387px] mx-auto"
                  width={561}
                  height={387}
                />
              </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      {/* UIUX Design */}
      <section>
      <Fade direction="left" triggerOnce>
        <div className="container grid grid-cols-14 py-12 lg:py-24 md:py-60 text-start">
          <h2 className="text-base font-semibold leading-[24px] text-green-600 flex">
            {t("solution.ui/ux.uiux")}
          </h2>
          <h2 className="mt-[12px] col-span-full text-grey-900 font-semibold mb-[12px] md:text-4xl text-3xl leading-[44px] max-w-3xl">
            {t("solution.ui/ux.title")}
          </h2>
          {/* gradient */}
          <div className="absolute pointer-events-none">
            <Image
              className="relative w-[1427.5px] h-[841.5px]"
              src="/gradient-solusi-page1.svg"
              alt=""
              width={1427.5}
              height={841.5}
            />
            <Image
              className="relative w-[1427.5px] h-[841.5px] -top-44 -left-28"
              src="/gradient-solusi-page2.svg"
              alt=""
              width={1427.5}
              height={841.5}
            />
          </div>
          <p className="mt-[20px] col-span-full text-grey-600 md:text-xl text-lg leading-[30px] max-w-3xl">
            {t("solution.ui/ux.desc")}
          </p>
        </div>
        </Fade>
        <div className="container overflow-hidden md:-my-32 lg:my-0 sm:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <Fade direction="left">
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
              </Fade>
              <Fade direction="right">
              <div className="sm:-my-0 -my-[48px]">
                <Image
                  src="/img-solusi-uiux.svg"
                  alt="AppDev"
                  className="w-[576px] h-[351px] mx-auto"
                  width={576}
                  height={351}
                />
              </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <Newsletter />
      </div>

      <ScrollToTop />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "id", ["common", "navbar"])),
  },
});
