import Judul from "@components/judul";
import Tema from "@components/tema";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Popup } from "../components/motion";
import { Fade } from "react-awesome-reveal";

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
          <div className="overflow-hidden absolute -left-32 pointer-events-none">
            <Image
              src="/gradient-klien.svg"
              alt="gradient-klien"
              width={0}
              height={0}
              className="lg:block hidden relative w-[1427.5px] h-[841.5px] object-cover "
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
        {/* line 1 */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:gap-x-4 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-8 md:grid-cols-8">
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 h-auto"
              src="/client1.svg"
              alt="majelis"
              width={0}
              height={0}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 h-auto"
              src="/client2.svg"
              alt="ctcrop"
              width={0}
              height={0}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 h-auto"
              src="/client3.svg"
              alt="trans-shopping-mal"
              width={0}
              height={0}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain  lg:col-span-1 h-auto"
              src="/client4.svg"
              alt="mufit"
              width={0}
              height={0}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain  lg:col-span-1 h-auto"
              src="/client5.svg"
              alt="vbd"
              width={0}
              height={0}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain  lg:col-span-1 h-auto"
              src="/client6.svg"
              alt="sm"
              width={0}
              height={0}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain  lg:col-span-1 h-auto"
              src="/client7.svg"
              alt="docotel"
              width={0}
              height={0}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 h-auto"
              src="/client8.svg"
              alt="kyoob"
              width={0}
              height={0}
            />
          </div>
        </div>
        {/* line 2 */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:gap-x-0 sm:gap-y-14 mt-20 xl:mx-20 lg:mx-14 lg:max-w-none lg:grid-cols-4 md:grid-cols-6">
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 h-auto"
              src="/client9.svg"
              alt="peradi"
              width={0}
              height={0}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 h-auto"
              src="/client10.svg"
              alt="menbiska"
              width={0}
              height={0}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 h-auto"
              src="/client11.svg"
              alt="medco-energi"
              width={0}
              height={0}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain  lg:col-span-1 h-auto"
              src="/client12.svg"
              alt="bank-dki"
              width={0}
              height={0}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}
