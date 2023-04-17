import Image from "next/image";
import Judul from "@components/judul";
import Tema from "@components/tema";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useTranslation } from "next-i18next";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";

export default function Solution() {
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
      <section>
        <Fade direction="top-left" triggerOnce>
          <div className="grid grid-cols-12 py-10 sm:py-8">
            <Judul title="Art By Code" textStyles="text-center" />
            <Tema>{t("home.solution.title")}</Tema>
            <p className="col-span-full xl:w-4/6 lg:w-5/6 text-grey-600 mx-auto text-center text-xl leading-[30px]">
              {t("home.solution.desc")}
            </p>
          </div>
        </Fade>
        {/* Card */}
        <Fade direction="left">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:gap-10 lg:gap-8 md:gap-10 gap-10">
            {/* card 1 */}
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="col-span-1 flex flex-col rounded-xl bg-white text-center shadow-xl"
            >
              <div className="p-4 px-14 lg:block hidden">
                <Image
                  className="mx-auto mt-6"
                  src="/icon-apps.svg"
                  alt=""
                  width={48}
                  height={48}
                />
                <h3 className="mt-[12px] text-xl font-medium text-gray-900">
                  Apps Development
                </h3>
                <Image
                  className="mx-auto mt-[24px]"
                  src="/img-apps3.svg"
                  alt=""
                  width={90}
                  height={90}
                />
                <p className="text-grey-600 text-base leading-[24px] mb-6 mt-[24px]">
                  {t("home.solution.apps")}
                </p>
              </div>
            </motion.li>
            {/* card 2 */}
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="col-span-1 flex flex-col rounded-xl bg-white text-center shadow-xl"
            >
              <div className="p-4 px-14 lg:block hidden">
                <Image
                  className="mx-auto mt-6"
                  src="/icon-web.svg"
                  alt=""
                  width={48}
                  height={48}
                />
                <h3 className="mt-[12px] text-xl font-medium text-gray-900">
                  Web Development
                </h3>
                <Image
                  className="mx-auto mt-[24px]"
                  src="/img-web.svg"
                  alt=""
                  width={250}
                  height={250}
                />
                <p className="text-grey-600 text-base leading-[24px] mb-6 mt-[24px]">
                  {t("home.solution.web")}
                </p>
              </div>
            </motion.li>
            {/* card 3 */}
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="col-span-1 flex flex-col rounded-xl bg-white text-center shadow-xl"
            >
              <div className="p-4 px-14 lg:block hidden">
                <Image
                  className="mx-auto mt-6"
                  src="/icon-uiux.svg"
                  alt=""
                  width={48}
                  height={48}
                />
                <h3 className="mt-[12px] text-xl font-medium text-gray-900">
                  UI/UX Design
                </h3>
                <Image
                  className="mx-auto mt-[24px]"
                  src="/img-uiux.svg"
                  alt=""
                  width={250}
                  height={250}
                />
                <p className="text-grey-600 text-base leading-[24px] mb-6 mt-[24px]">
                  {t("home.solution.uiux")}
                </p>
              </div>
            </motion.li>
          </ul>
        </Fade>
      </section>

      {/* Swipper */}
      <section className="block lg:hidden">
        <Fade direction="left">
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className="rounded-xl bg-white text-center shadow-xl">
                <div className="p-4 px-6 lg:hidden block">
                  <Image
                    className="mx-auto mt-6"
                    src="/icon-apps.svg"
                    alt=""
                    width={48}
                    height={48}
                  />
                  <h3 className="mt-[12px] text-xl font-medium text-gray-900">
                    Apps Development
                  </h3>
                  <Image
                    className="mx-auto mt-[24px]"
                    src="/img-apps3.svg"
                    alt=""
                    width={90}
                    height={90}
                  />
                  <p className="text-grey-600 text-base leading-[24px] mb-6 mt-[24px]">
                    {t("home.solution.apps")}
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="rounded-xl bg-white text-center shadow-xl">
                <div className="md:p-4 p-[4px] px-4 lg:hidden block">
                  <Image
                    className="mx-auto mt-6"
                    src="/icon-web.svg"
                    alt=""
                    width={48}
                    height={48}
                  />
                  <h3 className="mt-[12px] text-xl font-medium text-gray-900">
                    Web Development
                  </h3>
                  <Image
                    className="mx-auto mt-[24px]"
                    src="/img-web.svg"
                    alt=""
                    width={250}
                    height={250}
                  />
                  <p className="text-grey-600 text-base leading-[24px] mb-6 mt-[24px]">
                    {t("home.solution.web")}
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="rounded-xl bg-white text-center shadow-xl">
                <div className="md:p-4 p-[4px] px-4 lg:hidden block">
                  <Image
                    className="mx-auto mt-6"
                    src="/icon-uiux.svg"
                    alt=""
                    width={48}
                    height={48}
                  />
                  <h3 className="mt-[12px] text-xl font-medium text-gray-900">
                    UI/UX Design
                  </h3>
                  <Image
                    className="mx-auto mt-[24px]"
                    src="/img-uiux.svg"
                    alt=""
                    width={250}
                    height={250}
                  />
                  <p className="text-grey-600 text-base leading-[24px] mb-6 mt-[24px]">
                    {t("home.solution.uiux")}
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <div className="flex mt-8"></div>
          </Swiper>
        </Fade>
      </section>
    </>
  );
}
