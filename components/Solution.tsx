import Image from "next/image";
import Judul from "@components/judul";
import Tema from "@components/tema";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function Solution() {
  const people = [
    {
      icon: "/icon-apps.svg",
      title: "Apps Development",
      imageUrl: "/img-apps3.svg",
      desc: "Hampir semua orang punya dan bawa telepon genggam kemanapun. Tunggu apa lagi?",
    },
    {
      icon: "/icon-web.svg",
      title: "Web Development",
      imageUrl: "/img-web.svg",
      desc: "Tuangkan semua ide yang telah Anda simpan selama ini untuk website Anda, saatnya kami mewujudkan semuanya",
    },
    {
      icon: "/icon-uiux.svg",
      title: "UI/UX Design",
      imageUrl: "/img-uiux.svg",
      desc: "Pertama yang diperhatikan saat membuka website/aplikasi adalah penampilan dan penggunaannya",
    },
  ];
  return (
    <>
      <section>
        <div className="grid grid-cols-12 py-10 sm:py-8">
          <Judul>Art By Code</Judul>
          <Tema>Solusi Kami</Tema>
          <p className="col-span-full xl:w-4/6 lg:w-5/6 text-grey-600 mx-auto text-center text-xl leading-[30px]">
            Kami mengerti bahwa Kamu ingin fokus ke membuat ide dan kebutuhan
            bisnis Kamu menjadi realita. Para ahli dari kami siap membantu
            menenangkan pikiran Kamu - Ayo kita mulai membuat seni dari kode!
          </p>
        </div>

        {/* Card */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:gap-10 lg:gap-8 md:gap-10 gap-10">
          {/* card 1 */}
          <li className="col-span-1 flex flex-col rounded-xl bg-white text-center shadow-xl">
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
                Hampir semua orang punya dan bawa telepon genggam kemanapun.
                Tunggu apa lagi?
              </p>
            </div>
          </li>
          {/* card 2 */}
          <li className="col-span-1 flex flex-col rounded-xl bg-white text-center shadow-xl">
            <div className="p-4 px-14 lg:block hidden">
              <Image
                className="mx-auto mt-6"
                src="/icon-web.svg"
                alt=""
                width={48}
                height={48}
              />
              <h3 className="mt-[12px] text-xl font-medium text-gray-900">
                Apps Development
              </h3>
              <Image
                className="mx-auto mt-[24px]"
                src="/img-web.svg"
                alt=""
                width={250}
                height={250}
              />
              <p className="text-grey-600 text-base leading-[24px] mb-6 mt-[24px]">
                Tuangkan semua ide yang telah Anda simpan selama ini untuk
                website Anda, saatnya kami mewujudkan semuanya
              </p>
            </div>
          </li>
          {/* card 3 */}
          <li className="col-span-1 flex flex-col rounded-xl bg-white text-center shadow-xl">
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
                Pertama yang diperhatikan saat membuka website/aplikasi adalah
                penampilan dan penggunaannya
              </p>
            </div>
          </li>
        </ul>
      </section>
      
      {/* Swipper */}
      <section className="block lg:hidden">
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
                  Hampir semua orang punya dan bawa telepon genggam kemanapun.
                  Tunggu apa lagi?
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
                Tuangkan semua ide yang telah Anda simpan selama ini untuk
                website Anda, saatnya kami mewujudkan semuanya
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
                Pertama yang diperhatikan saat membuka website/aplikasi adalah
                penampilan dan penggunaannya
              </p>
              </div>
            </div>
          </SwiperSlide>
            <div className="flex mt-8">
            </div>
        </Swiper>
      </section>
    </>
  );
}

{
  /* <Image
                    className="mx-auto mt-6"
                    src={person.icon}
                    alt=""
                    width={48}
                    height={48}
                  />
                  <h3 className="mt-[12px] text-xl font-medium text-gray-900">
                    {person.title}
                  </h3>
                  <Image
                    className="mx-auto mt-[24px]"
                    src={person.imageUrl}
                    alt=""
                    width={200}
                    height={200}
                  />
                  <p className="text-grey-600 text-base leading-[24px] mb-6 mt-[24px]">
                    {person.desc}
                  </p> */
}
