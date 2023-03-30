import Image from "next/image";
import React from "react";
import Button from "./button";
import { HiArrowSmRight } from "react-icons/hi";

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
                  Kami percaya pada pemberdayaan teknologi untuk semua, dan
                  sadar bahwa{" "}
                  <span className="font-semibold text-grey-900">
                    kami dapat membuat perubahan dengan memberikan layanan
                    teknologi yang berkualitas
                  </span>{" "}
                </p>
                <div className="mt-[54px]">
                  <Button>Mau tau lebih banyak</Button>
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

    // <section className="mt-24 py-20 sm:py-24">
    //   <div className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8">
    //     <div className="flex-1 flex justify-center items-center mx-auto">
    //       <Image
    //         className="w-[483px] h-[468px] mx-auto"
    //         src="/img-belief.svg"
    //         alt="img-belief"
    //         width={0}
    //         height={0}
    //       />
    //     </div>
    //     <div className="xl:flex-[1.1] lg:flex-[1.4] flex justify-center flex-col">
    //       <h2 className="text-green-600 font-semibold text-sm md:text-base mb-1 md:mb-3">
    //       OUR BELIEF
    //     </h2>
    //     <p className="text-3xl lg:text-4xl leading-[44px] text-grey-900">
    //       Kami percaya pada pemberdayaan teknologi untuk semua, dan sadar bahwa{" "}
    //       <span className="font-semibold text-grey-900">
    //         kami dapat membuat perubahan dengan memberikan layanan teknologi
    //         yang berkualitas
    //       </span>{" "}
    //     </p>
    //     <div className="mt-[54px]">
    //       <Button>Mau tau lebih banyak</Button>
    //     </div>
    //     </div>
    //   </div>
    // </section>
  );
}
