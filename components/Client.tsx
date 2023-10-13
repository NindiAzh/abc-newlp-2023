import Judul from "@components/judul";
import JudulClient from "@components/judul_client";
import Tema from "@components/tema";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Popup } from "../components/motion";
import { Fade } from "react-awesome-reveal";
import MobileClient from "@components/mobile_client";

export default function Client() {
  const { t } = useTranslation();

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("vissible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <>
      <Fade direction="top-left" triggerOnce>
        <div className="grid grid-cols-12 py-10 sm:py-24">
          <Judul>Art By Code</Judul>
          <Tema>{t("home.client.title")}</Tema>
          <div className="overflow-hidden absolute 2xl:-left-0 -left-16 pointer-events-none">
            <Image
              src="/gradient-klien.svg"
              alt="gradient-klien"
              width={0}
              height={0}
              className="lg:block hidden relative w-[1427.5px] h-[841.5px] object-cover"
            ></Image>
            <Image
              className="lg:hidden block relative w-[1427.5px] h-[841.5px] object-cover "
              src="/gradient-klien-md.svg"
              alt="gradient-klien-md"
              width={0}
              height={0}
            />
          </div>{" "}
          <p className="col-span-full xl:w-4/6 lg:w-5/6 text-grey-600 mx-auto text-center text-xl leading-[30px]">
            {t("home.client.desc")}
          </p>
        </div>
      </Fade>

      <motion.div
        className="bg-white py-0 sm:py-0"
        ref={ref}
        initial="hidden"
        variants={Popup}
        animate={control}
      >
        <div className="hidden md:block">
          {/* line 1 */}
          <div className="mx-auto max-w-7xl px-6 2xl:px-[70px] lg:px-8">
            <div className="mx-auto grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:gap-x-8 sm:gap-y-14 lg:mx-0 lg:max-w-none xl:grid-cols-8 lg:grid-cols-2 md:grid-cols-1">
              {/* Strategic Partner */}
              <div className="border flex flex-row rounded-2xl border-grey-200 lg:w-[460px] lg:h-[75px] md:w-[400px] md:h-[75px] items-center">
                <JudulClient>Strategic Partner</JudulClient>
                <Image
                  className="lg:ml-10 col-span-2 lg:max-h-12 md:max-h-10 w-full object-contain lg:col-span-1 h-auto"
                  src="/ctcrop.svg"
                  alt="ctcrop"
                  width={0}
                  height={0}
                />
                <Image
                  className="lg:ml-4 col-span-2 lg:max-h-12 md:max-h-10 w-full object-contain lg:col-span-1 h-auto"
                  src="/docotel.svg"
                  alt="docotel"
                  width={0}
                  height={0}
                />
                <Image
                  className="lg:ml-4 col-span-2 lg:max-h-12 md:max-h-10 w-full object-contain lg:col-span-1 h-auto"
                  src="/kyoob.svg"
                  alt="kyoob"
                  width={0}
                  height={0}
                />
              </div>
              {/* real Estate */}
              <div className="xl:mx-[350px] lg:mx-[60px] border flex flex-row rounded-2xl border-grey-200 lg:w-[260px] lg:h-[75px] md:w-[255px] md:h-[75px] md:-mt-8 2xl:-mt-0 lg:-mt-0 items-center">
                <JudulClient>Real Estate</JudulClient>
                <div className="flex">
                  <Image
                    className="lg:ml-4 col-span-2 lg:max-h-12 md:max-h-10 w-full object-contain lg:col-span-1 h-auto"
                    src="/transpark.svg"
                    alt="transpark"
                    width={0}
                    height={0}
                  />
                </div>
              </div>
              {/* Energy */}
              <div className="xl:mx-[500px] border flex flex-row rounded-2xl border-grey-200 lg:w-[320px] lg:h-[75px] md:w-[300px] md:h-[75px] items-center lg:mx-[200px] md:-mt-8 2xl:-mt-0 lg:-mt-6">
                <JudulClient>Energy</JudulClient>
                <Image
                  className="lg:ml-8 col-span-2 lg:max-h-12 md:max-h-10 w-full object-contain lg:col-span-1 h-auto"
                  src="/medco-energi.svg"
                  alt="medco-energi"
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
          {/* line 2 */}
          <div className="mx-auto max-w-7xl px-6 2xl:px-[70px] lg:px-8 mt-8 items-center">
            <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:gap-x-8 sm:gap-y-14 lg:mx-0 lg:max-w-none xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1">
              {/* Financial Services */}
              <div className="border flex flex-row rounded-2xl border-grey-200 lg:w-[780px] lg:h-[75px] items-center justify-center xl:mx-40 lg:mx-auto md:w-[620px] md:h-[75px] md:-mt-2 2xl:-mt-0 lg:-mt-0">
                <JudulClient>Financial Services</JudulClient>
                <Image
                  className="lg:ml-10 md:ml-4 col-span-2 lg:max-h-12 md:max-h-6 w-full object-contain lg:col-span-1 h-auto"
                  src="/mandala.svg"
                  alt="mandala"
                  width={0}
                  height={0}
                />
                <Image
                  className="lg:ml-6 md:ml-4 col-span-2 lg:max-h-12 md:max-h-6 w-full object-contain lg:col-span-1 h-auto"
                  src="/bankdki.svg"
                  alt="bank-dki"
                  width={0}
                  height={0}
                />
                <Image
                  className="lg:ml-6 md:ml-0 col-span-2 lg:max-h-12 md:max-h-8 w-full object-contain lg:col-span-1 h-auto"
                  src="/bankmega.svg"
                  alt="bankmega"
                  width={0}
                  height={0}
                />
                <Image
                  className="lg:ml-6 md:ml-0 lg:mr-3 md:mr-4 col-span-2 max-h-12 lg:max-h-12 md:max-h-6  w-full object-contain lg:col-span-1 h-auto"
                  src="/allobank.svg"
                  alt="allobank"
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
          {/* line 3 */}
          <div className="mx-auto max-w-7xl px-6 mt-8 2xl:px-[70px] lg:px-8">
            <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:gap-x-8 sm:gap-y-14 lg:mx-0 lg:max-w-none xl:grid-cols-8 lg:grid-cols-1 md:grid-cols-1">
              {/* Wellness Education */}
              <div className="border flex flex-row rounded-2xl border-grey-200 lg:w-[575px] lg:h-[75px] items-center lg:mx-auto md:w-[500px] md:h-[75px] md:-mt-2 2xl:-mt-0 lg:-mt-0">
                <JudulClient>Wellness Education</JudulClient>
                <Image
                  className="lg:ml-10 col-span-2 lg:max-h-12 md:max-h-10 w-full object-contain lg:col-span-1 h-auto"
                  src="/alfajar.svg"
                  alt="alfajar"
                  width={0}
                  height={0}
                />
                <Image
                  className="lg:ml-4 col-span-2 lg:max-h-12 md:max-h-10 w-full object-contain lg:col-span-1 h-auto"
                  src="/sm.svg"
                  alt="sm"
                  width={0}
                  height={0}
                />
                <Image
                  className="lg:ml-4 col-span-2 lg:max-h-12 md:max-h-10 w-full object-contain lg:col-span-1 h-auto"
                  src="/panara.svg"
                  alt="panara"
                  width={0}
                  height={0}
                />
                <Image
                  className="lg:ml-4 col-span-2 lg:max-h-12 md:max-h-10 w-full object-contain lg:col-span-1 h-auto"
                  src="/bwa.svg"
                  alt="bwa"
                  width={0}
                  height={0}
                />
                <Image
                  className="lg:ml-4 mr-3 col-span-2 lg:max-h-12 md:max-h-10 w-full object-contain lg:col-span-1 h-auto"
                  src="/menbiska.svg"
                  alt="menbiska"
                  width={0}
                  height={0}
                />
              </div>
              {/* Retail */}
              <div className="xl:mx-[465px] lg:mx-auto border flex flex-row rounded-2xl border-grey-200 lg:w-[470px] lg:h-[75px] items-center md:w-[400px] md:h-[75px] md:-mt-8 2xl:-mt-0 lg:-mt-6">
                <JudulClient>Retail</JudulClient>
                <Image
                  className="lg:ml-4 col-span-2 lg:max-h-12 md:max-h-10 w-full object-contain lg:col-span-1 h-auto"
                  src="/transshop.svg"
                  alt="transshop"
                  width={0}
                  height={0}
                />
                <Image
                  className="lg:ml-4 col-span-2 lg:max-h-12 md:max-h-10 w-full object-contain lg:col-span-1 h-auto"
                  src="/tsm.svg"
                  alt="tsm"
                  width={0}
                  height={0}
                />
                <Image
                  className="lg:ml-4 mr-3 col-span-2 lg:max-h-12 md:max-h-6 w-full object-contain lg:col-span-1 h-auto"
                  src="/transmart.svg"
                  alt="transmart"
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
          {/* line 4 */}
          <div className="mx-auto max-w-7xl px-6 mt-8 2xl:px-[70px] lg:px-8">
            <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:gap-x-8 sm:gap-y-14 lg:mx-0 lg:max-w-none xl:grid-cols-8 lg:grid-cols-2 md:grid-cols-1">
              {/* Health Wellness */}
              <div className="border flex flex-row rounded-2xl border-grey-200 lg:w-[280px] lg:h-[75px] items-center xl:mx-20 md:w-[250px] md:h-[75px] md:-mt-2 2xl:-mt-0 lg:-mt-0">
                <JudulClient>Health & Wellness</JudulClient>

                <Image
                  className="ml-0 col-span-2 lg:max-h-12 md:max-h-10 w-full object-contain lg:col-span-1 h-auto"
                  src="/mufit.svg"
                  alt="mufit"
                  width={0}
                  height={0}
                />
                <Image
                  className="-ml-8 col-span-2 lg:max-h-12 md:max-h-10 w-full object-contain lg:col-span-1 h-auto"
                  src="/vbd.svg"
                  alt="vbd"
                  width={0}
                  height={0}
                />
              </div>
              {/* Wellness Education */}
              <div className="xl:mx-[252px] lg:-mx-[125px] border flex flex-row rounded-2xl border-grey-200 lg:w-[590px] lg:h-[75px] items-center md:w-[550px] md:h-[75px] md:-mt-8 2xl:-mt-0 lg:-mt-0">
                <JudulClient>Wellness Education</JudulClient>
                <Image
                  className="lg:ml-4 md:ml-4 col-span-2 lg:max-h-12 md:max-h-10 w-full object-contain lg:col-span-1 h-auto"
                  src="/simgroup.svg"
                  alt="simgroup"
                  width={0}
                  height={0}
                />
                <Image
                  className="lg:ml-4 md:ml-4 col-span-2 lg:max-h-12 md:max-h-10 w-full object-contain lg:col-span-1 h-auto"
                  src="/army.svg"
                  alt="army"
                  width={0}
                  height={0}
                />
                <Image
                  className="lg:ml-4 md:ml-4 col-span-2 lg:max-h-12 md:max-h-10 w-full object-contain lg:col-span-1 h-auto"
                  src="/peradi.svg"
                  alt="peradi"
                  width={0}
                  height={0}
                />
                <Image
                  className="lg:ml-4 md:ml-4 col-span-2 lg:max-h-12 md:max-h-10 w-full object-contain lg:col-span-1 h-auto"
                  src="/panah.svg"
                  alt="panah"
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
        </div>
        {/* ver.Mobile */}
        <div className="block md:hidden">
          <MobileClient />
        </div>
      </motion.div>
    </>
  );
}
