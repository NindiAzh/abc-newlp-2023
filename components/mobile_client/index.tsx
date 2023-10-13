import JudulClient from "@components/judul_client";
import Image from "next/image";

const index = () => {
  return (
    <div className="">
      {/* line 1 */}
      <div className="mx-auto">
        <div className="mx-auto grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-12">
          {/* Strategic Partner */}
          <div className="border flex flex-nowrap rounded-2xl border-grey-200 w-auto h-[75px] items-center">
            <JudulClient>Strategic Partner</JudulClient>
            <Image
              className="col-span-2 max-h-8 w-full object-contain h-auto"
              src="/ctcrop.svg"
              alt="ctcrop"
              width={0}
              height={0}
            />
            <Image
              className="col-span-2 max-h-8 w-full object-contain h-auto"
              src="/docotel.svg"
              alt="docotel"
              width={0}
              height={0}
            />
            <Image
              className="col-span-2 max-h-8 w-full object-contain h-auto"
              src="/kyoob.svg"
              alt="kyoob"
              width={0}
              height={0}
            />
          </div>
          {/* real Estate */}
          <div className="border flex flex-row rounded-2xl border-grey-200 w-[210px] h-[75px] -mt-6 items-center mx-auto">
            <JudulClient>Real Estate</JudulClient>
            <div className="flex">
              <Image
                className="col-span-2 max-h-8 w-full object-contain h-auto"
                src="/transpark.svg"
                alt="transpark"
                width={0}
                height={0}
              />
            </div>
          </div>
          {/* Energy */}
          <div className="border flex flex-row rounded-2xl border-grey-200 w-[240px] h-[75px] items-center -mt-6 mx-auto">
            <JudulClient>Energy</JudulClient>
            <Image
              className="col-span-2 max-h-8 w-full object-contain h-auto"
              src="/medco-energi.svg"
              alt="medco-energi"
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
      {/* line 2 */}
      <div className="mx-auto mt-6">
        <div className="grid grid-cols-1 items-center">
          {/* Financial Services */}
          <div className="border flex flex-col rounded-2xl border-grey-200 items-center justify-center w-auto h-[100px]">
            <JudulClient>Financial Services</JudulClient>
            <div className="grid grid-cols-5 mt-3">
              <Image
                className="col-span-2 max-h-5 w-full object-contain h-auto"
                src="/mandala.svg"
                alt="mandala"
                width={0}
                height={0}
              />
              <Image
                className="col-span-2 max-h-5 w-full object-contain h-auto"
                src="/bankdki.svg"
                alt="bank-dki"
                width={0}
                height={0}
              />
              <Image
                className="col-span-2 max-h-5 w-full object-contain h-auto"
                src="/bankmega.svg"
                alt="bankmega"
                width={0}
                height={0}
              />
              <Image
                className="mt-2 col-span-10 max-h-5 w-full object-contain h-auto"
                src="/allobank.svg"
                alt="allobank"
                width={0}
                height={0}
              />
            </div>
          </div>
        </div>
      </div>
      {/* line 3 */}
      <div className="mx-auto mt-6">
        <div className="grid grid-cols-1 items-center">
          {/* Wellness Education */}
          <div className="border flex flex-col rounded-2xl border-grey-200 items-center justify-center w-auto h-[100px]">
            <JudulClient>Wellness Education</JudulClient>
            <div className="grid grid-cols-11 mt-3">
              <Image
                className="col-span-2 max-h-10 w-full object-contain h-auto"
                src="/alfajar.svg"
                alt="alfajar"
                width={0}
                height={0}
              />
              <Image
                className="col-span-2 max-h-10 w-full object-contain h-auto"
                src="/sm.svg"
                alt="sm"
                width={0}
                height={0}
              />
              <Image
                className="col-span-2 max-h-10 w-full object-contain h-auto"
                src="/panara.svg"
                alt="panara"
                width={0}
                height={0}
              />
              <Image
                className="col-span-2 max-h-10 w-full object-contain h-auto"
                src="/bwa.svg"
                alt="bwa"
                width={0}
                height={0}
              />
              <Image
                className="col-span-3 max-h-10 w-full object-contain h-auto"
                src="/menbiska.svg"
                alt="menbiska"
                width={0}
                height={0}
              />
            </div>
          </div>
          {/* Retail */}
          <div className="border flex flex-col rounded-2xl border-grey-200 items-center justify-center w-auto h-[100px] mt-6">
            <JudulClient>Retail</JudulClient>
            <div className="flex flex-row mt-3 mx-auto">
              <Image
                className="mx-3 max-h-10 w-full object-contain h-auto"
                src="/transshop.svg"
                alt="transshop"
                width={0}
                height={0}
              />
              <Image
                className="mx-3 max-h-10 w-full object-contain h-auto"
                src="/tsm.svg"
                alt="tsm"
                width={0}
                height={0}
              />
              <Image
                className="mx-3 mt-4 max-h-4 w-full object-contain h-auto"
                src="/transmart.svg"
                alt="transmart"
                width={0}
                height={0}
              />
            </div>
          </div>
        </div>
      </div>
      {/* line 4 */}
      <div className="mx-auto mt-6">
        <div className="grid grid-cols-1 items-center">
          {/* Health Wellness */}
          <div className="border flex flex-nowrap rounded-2xl border-grey-200 w-[250px] h-[75px] items-center mx-auto">
            <JudulClient>Health & Wellness</JudulClient>
            <Image
              className="col-span-2 max-h-10 w-full object-contain h-auto"
              src="/mufit.svg"
              alt="mufit"
              width={0}
              height={0}
            />
            <Image
              className="col-span-2 max-h-10 w-full object-contain h-auto"
              src="/vbd.svg"
              alt="vbd"
              width={0}
              height={0}
            />
          </div>
          {/* Wellness Education */}
          <div className="border flex flex-col rounded-2xl border-grey-200 items-center justify-center w-auto h-[100px] mt-6">
            <JudulClient>Wellness Education</JudulClient>
            <div className="grid grid-cols-4 mt-3 mx-4">
              <Image
                className="col-span-0 mt-2 max-h-10 w-full object-contain h-auto"
                src="/simgroup.svg"
                alt="simgroup"
                width={0}
                height={0}
              />
              <Image
                className="col-span-0 max-h-10 w-full object-contain h-auto"
                src="/army.svg"
                alt="army"
                width={0}
                height={0}
              />
              <Image
                className="col-span-0 mt-2 max-h-10 w-full object-contain h-auto"
                src="/peradi.svg"
                alt="peradi"
                width={0}
                height={0}
              />
              <Image
                className="col-span-0 max-h-10 w-full object-contain h-auto"
                src="/panah.svg"
                alt="panah"
                width={0}
                height={0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
