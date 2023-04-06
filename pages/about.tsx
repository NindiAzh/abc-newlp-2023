import Judul from "@components/judul";
import Newsletter from "@components/Newsletter";
import Gradient1 from "../components/gradient/gradient1";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans, useTranslation } from "next-i18next";

export default function About() {
  const { t } = useTranslation()

  const features = [
    {
      name: t('about.help.title'),
      description: t('about.help.desc'),
      icon: "/icon-about1.svg",
    },
    {
      name: t('about.belief.title'),
      description: t('about.belief.desc'),
      icon: "/icon-about2.svg",
    },
  ];

  const stats = [
    { id: 1, name: t('about.stats.project'), value: "400+" },
    { id: 2, name: t('about.stats.global'), value: "10k" },
    { id: 3, name: t('about.stats.star'), value: "200+" },
  ];

  return (
    <section>
      <Gradient1 />
      <div className="grid grid-cols-12 py-[64px] sm:py-[132px]">
        <Judul>
        {t('about.titleAbout')}
        </Judul>
        <p className="col-span-full 2xl:w-7/12 xl:w-8/12 lg:w-5/6 w-5/6 text-grey-900 mx-auto text-center text-3xl leading-[38px]">
          <Trans i18nKey="belief">
            Kami percaya pada pemberdayaan teknologi untuk semua, dan sadar bahwa{" "}
            <span className="font-semibold text-4xl leading-[44px]">
              kami dapat membuat perubahan dengan memberikan layanan teknologi
              yang berkualitas
            </span>
          </Trans>
        </p>
      </div>

      <div className="overflow-hidden bg-green-50 mt-10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pt-20 lg:pl-0">
              <div className="lg:max-w-2xl">
                <dl className="mt-0 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-16">
                      <dt className="inline font-semibold text-grey-900 text-xl leading-[30px]">
                        <Image
                          src={feature.icon}
                          alt=""
                          width={48}
                          height={48}
                          className="absolute top-1 left-1 h-[48px] w-[48px] text-indigo-600"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="text-base leading-[24px] text-grey-600 mt-2">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <Image
                src="/img-belief.svg"
                alt="Product screenshot"
                className="w-[483px] h-[468px] mx-auto"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 sm:py-[96px]">
        <hr className="md:w-6/6 my-6 mt-4 border-[#EAECF0] sm:mx-auto lg:my-8" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-[64px] mb-[64px]">
          <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="leading-7 text-gray-900 font-medium text-lg">
                  {stat.name}
                </dt>
                <dd className="order-first text-6xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <hr className="md:w-6/6 my-6 mt-4 border-[#EAECF0] sm:mx-auto lg:my-8" />
      </div>
      <div className="container -mt-24">
        <Newsletter />
      </div>
    </section>
  );
}

export const getStaticProps: GetStaticProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'id', [
      'common',
      'footer',
      'navbar'
    ])),
  },
})
