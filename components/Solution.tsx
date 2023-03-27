import Image from "next/image";
import Judul from "@components/judul";
import Tema from "@components/tema";

export default function Solution() {
  const people = [
    {
      icon: "/icon-apps.svg",
      title: "Apps Development",
      imageUrl: "/img-apps2.svg",
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

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:gap-10 lg:gap-8 md:gap-10 gap-10">
          {people.map((person) => (
            <li
              key={person.title}
              className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-xl bg-white text-center shadow-xl"
            >
              <div className="flex flex-1 flex-col p-4 px-14">
                <Image
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
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
