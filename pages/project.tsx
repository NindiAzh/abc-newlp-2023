import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import ProjectsItem from "../components/ProjectsItem";
import Gradient1 from "../components/gradient/gradient1";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Project() {
  const tabs = [
    {
      name: "Mobile",
    },
    {
      name: "Web Design",
    },
  ];

  return (
    <>
      <div className="container grid grid-cols-12 py-10 sm:py-24 text-start ">
        <Gradient1 />
        <h2 className="col-span-full text-green-700 font-semibold mb-[12px] md:text-base">
          Art By Code
        </h2>
        <p className="col-span-full text-grey-900 font-semibold text-3xl md:text-4xl mb-[20px]">
          Project
        </p>
        <p className="mt-[40px] col-span-full xl:w-11/12 lg:w-5/6 text-grey-600 text-xl leading-[30px]">
          Kami sangat senang untuk membagikan portofolio kami kepada Anda! Ini
          bukan hanya koleksi proyek masa lalu, tetapi juga bukti keahlian kami
          dan cara untuk membangun kepercayaan Anda bahwa kami dapat memberikan
          hasil yang Anda cari. Cek portofolio kami dan mari diskusikan
          bagaimana kami dapat membawa proyek Anda ke level yang lebih tinggi!
        </p>
      </div>

      <section className="mx-auto md:-my-[64px] -my-10">
        <div className="mx-auto container">
          <Tab.Group as="div" className="mt-4">
            <div className="flex-auto px-4 sm:px-0">
              <Tab.List className="flex space-x-10">
                {tabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? "border-green-600 text-green-600"
                          : "text-grey-500",
                        "whitespace-nowrap border-b-4 py-6 text-xl font-semibold"
                      )
                    }
                  >
                    {tab.name}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            {/* Tab Mobile */}
            <Tab.Panels as={Fragment}>
              <Tab.Panel className="space-y-16 pt-10 lg:pt-16">
                <div className="flex -mx-4 mt-0 flex-wrap">
                  <div className="md:w-6/12 px-5 pb-10">
                    <ProjectsItem
                      name="Trans Shopping Mall App Design"
                      desc="Visit Google Play"
                      image="/img-trans.svg"
                    />
                  </div>
                  <div className="md:w-6/12 px-5 pb-10">
                    <ProjectsItem
                      name="Sato Carwash park App Design"
                      desc="Visit Google Play"
                      image="/img-sato-carwash.svg"
                    />
                  </div>
                  <div className="md:w-6/12 px-5 pb-10 md:mt-[64px]">
                    <ProjectsItem
                      name="Sato Point Of Sale App Design"
                      desc="Visit Google Play"
                      image="/img-sato-pos.svg"
                    />
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>

            {/* Tab Web Design */}
            <Tab.Panels as={Fragment}>
              <Tab.Panel className="space-y-16 pt-10 lg:pt-16">
                <div className="flex -mx-4 mt-0 flex-wrap">
                  <div className="md:w-6/12 px-5 pb-10">
                    <ProjectsItem
                      name="Trans Shopping Mall App Design"
                      desc="Visit Google Play"
                      image="/img-trans.svg"
                    />
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </>
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
