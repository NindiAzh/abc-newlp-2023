import Judul from "@components/judul";
import Tema from "@components/tema";
import Image from "next/image";
import ProjectsItem from "./ProjectsItem";

export default function Project() {
  return (
    <>
      <div className="grid grid-cols-12 py-20 sm:py-24">
        <Judul>Art By Code</Judul>
        <Tema>Project Kami</Tema>
        <div className="overflow-hidden absolute -left-12">
          <Image
            src="/gradient-project.svg"
            alt=""
            width={1427.5}
            height={841.5}
            className="lg:block hidden relative w-[1427.5px] h-[841.5px] object-cover xl:-top-0"
          ></Image>
          <Image
            className="lg:hidden block relative w-[1427.5px] h-[841.5px] object-cover md:-top-10 -top-20"
            src="/gradient-project-mobile.svg"
            alt=""
            width={1427.5}
            height={841.5}
          />
        </div>{" "}
        <p className="col-span-full xl:w-4/6 lg:w-5/6 text-grey-600 mx-auto text-center text-xl leading-[30px]">
          Dari desain website yang menakjubkan hingga aplikasi yang mudah
          digunakan dan lain-lain, kami sangat bangga dengan proyek-proyek kami
          yang telah selesai
        </p>
      </div>

      <div className="flex -mx-4 mt-0 flex-wrap">
        <div className="md:w-6/12 px-5 pb-10">
          <ProjectsItem
            name="Trans Shopping Mall App Design"
            desc="Visit Google Play"
            image="/img-trans.svg"
          />
        </div>
        <div className="md:w-6/12 px-5 pb-10">
          <ProjectsItem
            name="Sato Carwash park App Design"
            desc="Visit Google Play"
            image="/img-sato-carwash.svg"
          />
        </div>
        <div className="md:w-6/12 px-5 pb-10 md:mt-[64px]">
          <ProjectsItem
            name="Sato Point Of Sale App Design"
            desc="Visit Google Play"
            image="/img-sato-pos.svg"
          />
        </div>
      </div>

      <hr className="md:w-6/6 my-6 mt-4 border-[#EAECF0] sm:mx-auto lg:my-8" />
    </>
  );
}
