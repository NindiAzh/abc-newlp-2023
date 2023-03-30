import Image from "next/image";
import Button from "./button";
import Gradient1 from "./gradient/gradient1";

export default function Hero() {
  return (
    <section className="mt-10 py-10 sm:py-20">
      <Gradient1 />
      <div className="mx-auto grid lg:grid-cols-2 gap-0">
        <div className="flex flex-col justify-center lg:mx-0 mx-0">
          <h3 className="md:text-xl text-base text-green-600 font-semibold">
            Hai, kami adalah Art By Code | ABC
          </h3>
          <div className="mt-[12px] leading-[72px]">
            <h1 className="text-grey-900 font-bold md:text-6xl text-4xl">
              Ayo ciptakan sesuatu yang{" "}
              <span className="text-green-600">indah</span> dengan sebuah{" "}
              <span className="relative">
                kode
                <Image
                  className="absolute left-0 bottom-0"
                  src="/icon-code.svg"
                  alt="icon-code"
                  width={135}
                  height={0}
                />
              </span>
            </h1>
          </div>
          <div className="mt-[64px]">
            <Button>Mau tau lebih banyak</Button>
          </div>
        </div>
        <Image
          className="w-[483px] h-[468px] mx-auto lg:mt-0 mt-20 2xl:mx-48"
          src="/hero-img.svg"
          alt="Art By Code Hero"
          width={0}
          height={0}
        />
      </div>
    </section>
  );
}
