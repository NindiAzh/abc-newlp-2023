import Image from "next/image";
import { useTranslation, Trans } from "next-i18next";
import Button from "./button";
import Gradient1 from "./gradient/gradient1";
import { Fade } from "react-awesome-reveal";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="mt-10 py-10 sm:py-20">
      <Gradient1 />
      <div className="mx-auto grid lg:grid-cols-2 gap-0">
        <div className="flex flex-col justify-center lg:mx-0 mx-0">
          <Fade direction="left">
            <h3 className="md:text-xl text-base text-green-600 font-semibold">
              {t("home.header.title")} 
              <span>
              <Fade delay={1e3} cascade damping={1e-1}>Art By Code | ABC</Fade>
              </span>
            </h3>
            <div className="mt-[12px] leading-[72px]">
              <h1 className="text-grey-900 font-bold md:text-6xl text-4xl">
                <Trans i18nKey="home.header.desc" id="title">
                  Ayo ciptakan sesuatu yang{" "}
                  <span className="text-green-600">indah</span> dengan sebuah{" "}
                </Trans>
                <span className="relative">
                  {t("home.header.code")}
                  <Image
                    className="absolute left-0 bottom-0 animate-bounce"
                    src="/icon-code.svg"
                    alt="icon-code"
                    width={135}
                    height={0}
                  />
                </span>
              </h1>
            </div>
          </Fade>
          <div className="mt-[64px] duration-300 hover:scale-110">
            <Fade direction="left" delay={400}>
              <Trans i18nKey={"more"}>
                <Button>Mau tahu lebih banyak</Button>
              </Trans>
            </Fade>
          </div>
        </div>
        <Fade direction="right">
          <div>
            <Image
              className="w-[483px] h-[468px] mx-auto lg:mt-0 mt-20 2xl:mx-48"
              src="/hero-img.svg"
              alt="Art By Code Hero"
              width={0}
              height={0}
            />
          </div>
        </Fade>
      </div>
    </section>
  );
}
