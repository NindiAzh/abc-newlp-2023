import Judul from "@components/judul";
import Tema from "@components/tema";
import Image from "next/image";

export default function Client() {
  return (
    <>
      <div className="grid grid-cols-12 py-10 sm:py-24">
        <Judul>Art By Code</Judul>
        <Tema>Klien Kami</Tema>
        <div className="overflow-hidden absolute -left-32">
        <Image
          src="/gradient-klien.svg"
          alt=""
          width={1427.5}
          height={841.5}
          className="lg:block hidden relative w-[1427.5px] h-[841.5px] object-cover "
        ></Image>
        <Image  className="lg:hidden block relative w-[1427.5px] h-[841.5px] object-cover " src='/gradient-klien-md.svg' alt=""  width={1427.5}
          height={841.5}/>
      </div>{" "}
        <p className="col-span-full xl:w-4/6 lg:w-5/6 text-grey-600 mx-auto text-center text-xl leading-[30px]">
          Bergabunglah dengan daftar klien puas kami yang telah mengalami
          layanan dan keahlian luar biasa yang kami tawarkan. Temukan bagaimana
          kami telah membantu bisnis seperti milikmu mencapai tujuan mereka.
        </p>
      </div>

      <div className="py-0 sm:py-0">
        <div className="mx-auto max-w-5xl px-0 lg:px-0">
          {/* line 1 */}
          <div className="-mx-6 grid grid-cols-2 gap-0 overflow-hidden sm:mx-0 sm:rounded-2xl lg:grid-cols-6 md:grid-cols-3">
            <div className="p-8 sm:p-4 xl:mt-8 md:mt-6">
              <Image
                className="max-h-[100px] w-full object-contain"
                src="/ctcrop.svg"
                alt="ctcrop"
                width={158}
                height={48}
              />
            </div>
            <div className="p-6 sm:p-10">
              <Image
                className="max-h-[100px] w-full object-contain"
                src="/transmall.svg"
                alt="transmall"
                width={158}
                height={48}
              />
            </div>
            <div className="p-6 sm:p-10">
              <Image
                className="max-h-[100px] w-full object-contain"
                src="kyoob.svg"
                alt="kyoob"
                width={158}
                height={48}
              />
            </div>
            <div className="p-6 sm:p-10">
              <Image
                className="max-h-[100px] w-full object-contain"
                src="mufit.svg"
                alt="mufit"
                width={158}
                height={48}
              />
            </div>
            <div className="p-6 sm:p-10">
              <Image
                className="max-h-[100px] w-full object-contain"
                src="vbd.svg"
                alt="vbd"
                width={158}
                height={48}
              />
            </div>
            <div className="p-6 sm:p-10">
              <Image
                className="max-h-[100px] w-full object-contain"
                src="sm.svg"
                alt="sm"
                width={158}
                height={48}
              />
            </div>
          </div>

          {/* line 2 */}
          <div className="-mx-6 grid grid-cols-2 gap-0 overflow-hidden sm:mx-0 sm:rounded-2xl lg:grid-cols-4 md:grid-cols-3">
            <div className="p-8 sm:p-10">
              <Image
                className="max-h-[100px] w-full object-contain"
                src="/logs.svg"
                alt="logs"
                width={158}
                height={48}
              />
            </div>
            <div className="p-6 sm:p-10">
              <Image
                className="max-h-[100px] w-full object-contain"
                src="/peradi.svg"
                alt="peradi"
                width={158}
                height={48}
              />
            </div>
            <div className="p-6 sm:p-10">
              <Image
                className="max-h-[100px] w-full object-contain"
                src="menbiska.svg"
                alt="menbiska"
                width={158}
                height={48}
              />
            </div>
            <div className="p-6 sm:p-10">
              <Image
                className="max-h-[100px] w-full object-contain"
                src="medco.svg"
                alt="medco"
                width={158}
                height={48}
              />
            </div>
          </div>

          {/* line 3 */}
          <div className="-mx-6 grid grid-cols-2 overflow-hidden sm:mx-0 sm:rounded-2xl lg:grid-cols-2 md:grid-cols-2">
            <div className="p-8 sm:p-18">
              <Image
                className="max-h-[50px] w-full object-contain xl:mx-20 lg:mx-20"
                src="/dki.svg"
                alt="dki"
                width={158}
                height={48}
              />
            </div>
            <div className="p-6 sm:p-18">
              <Image
                className="max-h-[80px] w-full object-contain xl:-mx-20 lg:-mx-18"
                src="/docotel.svg"
                alt="docotel"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
