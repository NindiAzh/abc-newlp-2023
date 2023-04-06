import Image from "next/image";
import React from "react";
import Button from "./button";
import { Trans } from "next-i18next";

export default function Belief() {
  return (
    <>
      <section className="overflow-hidden bg-green-50 mt-20 py-10 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pt-20 lg:pl-0">
              <div className="lg:max-w-2xl">
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
                <div className="mt-[54px]">
                  <Trans i18nKey={'more'}>
                    <Button>
                      Mau tahu lebih banyak
                    </Button>
                  </Trans>
                </div>
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
      </section>
    </>
  );
}
