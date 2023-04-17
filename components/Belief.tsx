import Image from "next/image";
import React, { useEffect } from "react";
import Button from "./button";
import { Trans } from "next-i18next";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-awesome-reveal";

export default function Belief() {
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
      <section className="overflow-hidden bg-green-50 mt-20 py-10 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pt-20 lg:pl-0">
              <div className="lg:max-w-2xl">
                <Fade direction="right">
                  <h2 className="text-green-600 font-semibold text-sm md:text-base mb-1 md:mb-3">
                    OUR BELIEF
                  </h2>
                  <p className="text-3xl lg:text-4xl leading-[44px] text-grey-900">
                    <Trans i18nKey="belief">
                      Kami percaya pada pemberdayaan teknologi untuk semua, dan
                      sadar bahwa{" "}
                      <span className="font-semibold text-grey-900">
                        kami dapat membuat perubahan dengan memberikan layanan
                        teknologi yang berkualitas
                      </span>{" "}
                    </Trans>
                  </p>
                </Fade>
                <Fade direction="right" delay={300}>
                  <div className="mt-[54px] duration-300 hover:scale-110">
                    <Trans i18nKey={"more"}>
                      <Button>Mau tahu lebih banyak</Button>
                    </Trans>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <Fade direction="left">
                <Image
                  src="/img-belief.svg"
                  alt="Product screenshot"
                  className="w-[483px] h-[468px] mx-auto"
                  width={2432}
                  height={1442}
                />
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
