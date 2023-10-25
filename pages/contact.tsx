// import { GetStaticProps } from "next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import Image from "next/image";
// import React, { useState } from "react";
// import { Trans, useTranslation } from "next-i18next";
// import Gradient1 from "../components/gradient/gradient1";
// import { useRouter } from "next/router";
// import Head from "next/head";
// import ScrollToTop from "../components/scroll";
// import { Fade } from "react-awesome-reveal";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";

// export default function Contact() {
//   const router = useRouter();
//   const { pathname } = router;
//   const { t } = useTranslation();
//   const desc = t("contact.desc");

//   const schema = yup.object({
//     first_name: yup.string().required("First Name is required!"),
//     last_name: yup.string().required("Last Name is required!"),
//     email: yup
//       .string()
//       .email("Email format is not valid")
//       .required("Email is required!"),
//     organisasi: yup.string().required("Name Organisasi is required!"),
//     message: yup.string().required("Message is required!"),
//     services: yup.array().required("Choose Services is required!"),
//   });

//   const {
//     register,
//     reset,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = (values: any) => {
//     const email = values.email;
//     const first_name = values.first_name;
//     const last_name = values.last_name;
//     const services = values.services;
//     const organisasi = values.organisasi;
//     const message = values.message;

//     const subject = `${first_name} ${last_name} ${email} - ${services}`;
//     const body = `Nama Organisasi: ${organisasi}%0D%0A%0D%0A${message}`;
//     const emailLink = `mailto:hello@artbycode.id?subject=${subject}&body=${body}`;
//     window.location.href = emailLink;

//     reset();
//   };

//   // const [firstname, setFirstName] = useState('')
//   // const [lastname, setLastName] = useState('')
//   // const [email, setEmail] = useState('')
//   // const [organisasi, setOrganisasi] = useState('')
//   // const [message, setMessage] = useState('')

//   return (
//     <>
//       <Head>
//         <title>Art By Code - Contact Us</title>
//         <meta name="title" content="Art By Code - Contact Us" />
//         <meta name="description" content={desc} />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content={pathname} />
//         <meta property="og:title" content="Art By Code - Contact Us" />
//         <meta property="og:description" content={desc} />
//         <meta property="og:image" content="/favicon/logo.png" />
//         <meta property="twitter:card" content="summary_large_image" />
//         <meta property="twitter:url" content={pathname} />
//         <meta property="twitter:title" content="Art By Code - Contact Us" />
//         <meta property="twitter:description" content={desc} />
//         <meta property="twitter:image" content="/favicon/logo.png" />
//       </Head>
//       <Gradient1 />
//       <div className="container relative mb-2">
//         <Fade direction="right" triggerOnce>
//           <div className="lg:absolute lg:inset-5 lg:left-1/2 md:-mt-2 2xl:-mt-0 xl:-mt-0 lg:-mt-0 -mt-20">
//             <Image
//               className="w-[608px] h-[685.5px] md:mt-60 mx-auto lg:block hidden"
//               src="/img-contact.svg"
//               alt="imgPartner"
//               width={0}
//               height={0}
//             />
//           </div>
//         </Fade>
//         <Fade direction="left" triggerOnce>
//           <div className="pt-32 pb-24 sm:pt-24 sm:pb-32 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
//             <div className="px-6 2xl:-mx-10 xl:mx-12 lg:mx-20">
//               <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
//                 <h2 className="col-span-full text-green-700 font-semibold mb-[24px] text-xl">
//                   <Trans i18nKey="Tagcontact">CONTACT ME</Trans>
//                 </h2>
//                 <p className="col-span-full text-grey-900 font-semibold text-4xl md:text-5xl mb-[10px]">
//                   {t("contact.title")}
//                 </p>
//                 <p className="mt-[40px] col-span-full xl:w-11/12 lg:w-5/6 text-grey-600 md:text-xl text-lg leading-[30px]">
//                   {t("contact.desc")}
//                 </p>
//                 <form
//                   onSubmit={handleSubmit(onSubmit)}
//                   className="mx-auto mt-10 max-w-xl sm:mt-12"
//                 >
//                   <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
//                     {/* First Name */}
//                     <div>
//                       <label
//                         htmlFor="first-name"
//                         className="block text-sm font-semibold leading-6 text-gray-900"
//                       >
//                         {t("form.first_name")}
//                       </label>
//                       <div className="mt-2.5">
//                         <input
//                           className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                           type="text"
//                           placeholder={`${t("form.first_name")}`}
//                           id="first_name"
//                           autoComplete="given-name"
//                           {...register("first_name")}
//                         />
//                         <p className="msg_error">
//                           {errors.first_name?.message}
//                         </p>
//                       </div>
//                     </div>
//                     {/* End First Name */}

//                     {/* Last Name */}
//                     <div>
//                       <label
//                         htmlFor="last-name"
//                         className="block text-sm font-semibold leading-6 text-gray-900"
//                       >
//                         {t("form.last_name")}
//                       </label>
//                       <div className="mt-2.5">
//                         <input
//                           type="text"
//                           placeholder={`${t("form.last_name")}`}
//                           id="last_name"
//                           autoComplete="family-name"
//                           className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                           {...register("last_name")}
//                         />
//                         <p className="msg_error">{errors.last_name?.message}</p>
//                       </div>
//                     </div>
//                     {/* End Last Name */}

//                     {/* Email */}
//                     <div className="sm:col-span-2">
//                       <label
//                         htmlFor="email"
//                         className="block text-sm font-semibold leading-6 text-gray-900"
//                       >
//                         Email
//                       </label>
//                       <div className="mt-2.5">
//                         <input
//                           type="email"
//                           placeholder="Cth. you@company.com"
//                           id="email"
//                           autoComplete="email"
//                           className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                           {...register("email")}
//                         />
//                         <p className="msg_error">{errors.email?.message}</p>
//                       </div>
//                     </div>
//                     {/* End Email */}

//                     {/* Organisasi */}
//                     <div className="sm:col-span-2">
//                       <label
//                         htmlFor="name"
//                         className="block text-sm font-semibold leading-6 text-gray-900"
//                       >
//                         {t("form.organization")}
//                       </label>
//                       <div className="mt-2.5">
//                         <input
//                           type="text"
//                           placeholder={`${t("form.organization")}`}
//                           id="organisasi"
//                           autoComplete="email"
//                           className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                           {...register("organisasi")}
//                         />
//                         <p className="msg_error">
//                           {errors.organisasi?.message}
//                         </p>
//                       </div>
//                     </div>
//                     {/* End Organisasi */}

//                     {/* Message */}
//                     <div className="sm:col-span-2">
//                       <label
//                         htmlFor="message"
//                         className="block text-sm font-semibold leading-6 text-gray-900"
//                       >
//                         {t("form.message")}
//                       </label>
//                       <div className="mt-2.5">
//                         <textarea
//                           placeholder={`${t("form.message")}`}
//                           id="message"
//                           rows={4}
//                           className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                           {...register("message")}
//                         />
//                         <p className="msg_error">{errors.message?.message}</p>
//                       </div>
//                     </div>
//                     {/* End Message */}
//                   </div>
//                   <fieldset className="mt-6 ">
//                     <legend className="block text-sm leading-5 text-grey-700 font-semibold">
//                       Services
//                     </legend>
//                     <div>
//                       <div className="grid grid-cols-1 gap-y-0 gap-x-0 sm:grid-cols-1">
//                         {/* App Development */}
//                         <div className="relative flex items-start">
//                           <div className="mt-4 flex h-6 items-center">
//                             <input
//                               id="App Development"
//                               aria-describedby="App Development"
//                               type="checkbox"
//                               className="h-4 w-4 rounded-md border-grey-300 text-green-600 focus:ring-indigo-600"
//                               value={"App Development"}
//                               {...register("services")}
//                             />
//                           </div>
//                           <div className="mt-4 ml-3 text-sm leading-6">
//                             <label
//                               htmlFor="comments"
//                               className="text-base font-medium text-grey-700"
//                             >
//                               App Development
//                             </label>
//                           </div>
//                         </div>
//                         {/* Web Development */}
//                         <div className="relative flex items-start">
//                           <div className="mt-4 flex h-6 items-center">
//                             <input
//                               id="Web Development"
//                               aria-describedby="Web Development"
//                               type="checkbox"
//                               className="h-4 w-4 rounded-md border-grey-300 text-green-600 focus:ring-indigo-600"
//                               value={"Web Development"}
//                               {...register("services")}
//                             />
//                           </div>
//                           <div className="mt-4 ml-3 text-sm leading-6">
//                             <label
//                               htmlFor="comments"
//                               className="text-base font-medium text-grey-700"
//                             >
//                               Web Development
//                             </label>
//                           </div>
//                         </div>
//                         {/* UI/UX Design */}
//                         <div className="relative flex items-start">
//                           <div className="mt-4 flex h-6 items-center">
//                             <input
//                               id="UI/UX Design"
//                               aria-describedby="UI/UX Design"
//                               type="checkbox"
//                               className="h-4 w-4 rounded-md border-grey-300 text-green-600 focus:ring-indigo-600"
//                               value={"UI/UX Design"}
//                               {...register("services", {
//                                 required: "Please select at-least one skill",
//                               })}
//                             />
//                           </div>
//                           <div className="mt-4 ml-3 text-sm leading-6">
//                             <label
//                               htmlFor="comments"
//                               className="text-base font-medium text-grey-700"
//                             >
//                               UI/UX Design
//                             </label>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <p className="msg_error">{errors.services?.message}</p>
//                   </fieldset>
//                   <div className="mt-10">
//                     <Trans i18nKey="form.submit">
//                       <button
//                         type="submit"
//                         className="block w-full rounded-md bg-grey-900 px-3.5 py-2.5 text-center text-base font-semibold text-white shadow-sm hover:bg-green-600"
//                       >
//                         Aku siap, Kirimkan Pesan!
//                       </button>
//                     </Trans>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </Fade>
//       </div>

//       <ScrollToTop />
//     </>
//   );
// }

// export const getStaticProps: GetStaticProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale ?? "id", ["common", "navbar"])),
//   },
// });

import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import React, { useState } from "react";
import { Trans, useTranslation } from "next-i18next";
import Gradient1 from "../components/gradient/gradient1";
import { useRouter } from "next/router";
import Head from "next/head";
import ScrollToTop from "../components/scroll";
import { Fade } from "react-awesome-reveal";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Contact() {
  const router = useRouter();
  const { pathname } = router;
  const { t } = useTranslation();
  const desc = t("contact.desc");

  const schema = yup.object({
    first_name: yup.string().required("First Name is required!"),
    last_name: yup.string().required("Last Name is required!"),
    email: yup
      .string()
      .email("Email format is not valid")
      .required("Email is required!"),
    organisasi: yup.string().required("Name Organisasi is required!"),
    message: yup.string().required("Message is required!"),
    services: yup
      .mixed()
      .label("Services")
      .test(
        "array",
        "Please select at-least one skill",
        (val) => Array.isArray(val) && val.length >= 1
      ),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: any) => {
    const email = values.email;
    const first_name = values.first_name;
    const last_name = values.last_name;
    const services = values.services;
    const organisasi = values.organisasi;
    const message = values.message;

    const subject = `Question about services from ${organisasi}`;
    const body = `
    Dear Support Team,

    I am interested in the following services:

    Services: ${services.join(" ")}

    My name is ${first_name} ${last_name}, and you can reach me at ${email}.

    Message:
    ${message}

    Sincerely,
    ${first_name} ${last_name}
  `;
    const mailtoLink = `mailto:hello@artbycode.id?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    reset();
  };

// Hafizh, [10/25/2023 11:46 AM]
return (
    <>
      <Head>
        <title>Art By Code - Contact Us</title>
        <meta name="title" content="Art By Code - Contact Us" />
        <meta name="description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pathname} />
        <meta property="og:title" content="Art By Code - Contact Us" />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content="/favicon/logo.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pathname} />
        <meta property="twitter:title" content="Art By Code - Contact Us" />
        <meta property="twitter:description" content={desc} />
        <meta property="twitter:image" content="/favicon/logo.png" />
      </Head>
      <Gradient1 />
      <div className="container relative mb-2">
        <Fade direction="right" triggerOnce>
          <div className="lg:absolute lg:inset-5 lg:left-1/2 md:-mt-2 2xl:-mt-0 xl:-mt-0 lg:-mt-0 -mt-20">
            <Image
              className="w-[608px] h-[685.5px] md:mt-60 mx-auto lg:block hidden"
              src="/img-contact.svg"
              alt="imgPartner"
              width={0}
              height={0}
            />
          </div>
        </Fade>
        <Fade direction="left" triggerOnce>
          <div className="pt-32 pb-24 sm:pt-24 sm:pb-32 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
            <div className="px-6 2xl:-mx-10 xl:mx-12 lg:mx-20">
              <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                <h2 className="col-span-full text-green-700 font-semibold mb-[24px] text-xl">
                  <Trans i18nKey="Tagcontact">CONTACT ME</Trans>
                </h2>
                <p className="col-span-full text-grey-900 font-semibold text-4xl md:text-5xl mb-[10px]">
                  {t("contact.title")}
                </p>
                <p className="mt-[40px] col-span-full xl:w-11/12 lg:w-5/6 text-grey-600 md:text-xl text-lg leading-[30px]">
                  {t("contact.desc")}
                </p>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mx-auto mt-10 max-w-xl sm:mt-12"
                >
                  <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                    {/* First Name */}
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        {t("form.first_name")}
                      </label>
                      <div className="mt-2.5">
                        <input
                          className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          type="text"
                          placeholder={`${t("form.first_name")}`}
                          id="first_name"
                          autoComplete="given-name"
                          {...register("first_name")}
                        />
                        <p className="msg_error">
                          {errors.first_name?.message}
                        </p>
                      </div>
                    </div>
                    {/* End First Name */}

{/* Hafizh, [10/25/2023 11:46 AM] */}
{/* Last Name */}
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        {t("form.last_name")}
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          placeholder={`${t("form.last_name")}`}
                          id="last_name"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          {...register("last_name")}
                        />
                        <p className="msg_error">{errors.last_name?.message}</p>
                      </div>
                    </div>
                    {/* End Last Name */}

                    {/* Email */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Email
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="email"
                          placeholder="Cth. you@company.com"
                          id="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          {...register("email")}
                        />
                        <p className="msg_error">{errors.email?.message}</p>
                      </div>
                    </div>
                    {/* End Email */}

                    {/* Organisasi */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        {t("form.organization")}
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          placeholder={`${t("form.organization")}`}
                          id="organisasi"
                          className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          {...register("organisasi")}
                        />
                        <p className="msg_error">
                          {errors.organisasi?.message}
                        </p>
                      </div>
                    </div>
                    {/* End Organisasi */}

{/* Hafizh, [10/25/2023 11:46 AM] */}
{/* Message */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        {t("form.message")}
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          placeholder={`${t("form.message")}`}
                          id="message"
                          rows={4}
                          className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          {...register("message")}
                        />
                        <p className="msg_error">{errors.message?.message}</p>
                      </div>
                    </div>
                    {/* End Message */}
                  </div>
                  <fieldset className="mt-6 ">
                    <legend className="block text-sm leading-5 text-grey-700 font-semibold">
                      Services
                    </legend>
                    <div>
                      <div className="grid grid-cols-1 gap-y-0 gap-x-0 sm:grid-cols-1">
                        {/* App Development */}
                        <div className="relative flex items-start">
                          <div className="mt-4 flex h-6 items-center">
                            <input
                              id="App Development"
                              aria-describedby="App Development"
                              type="checkbox"
                              className="h-4 w-4 rounded-md border-grey-300 text-green-600 focus:ring-indigo-600"
                              value={"App Development"}
                              {...register("services", {
                                required: "Please select at-least one skill",
                              })}
                            />
                          </div>
                          <div className="mt-4 ml-3 text-sm leading-6">
                            <label
                              htmlFor="comments"
                              className="text-base font-medium text-grey-700"
                            >
                              App Development
                            </label>
                          </div>
                        </div>
                        {/* Web Development */}
                        <div className="relative flex items-start">
                          <div className="mt-4 flex h-6 items-center">
                            <input
                              id="Web Development"
                              aria-describedby="Web Development"
                              type="checkbox"
                              className="h-4 w-4 rounded-md border-grey-300 text-green-600 focus:ring-indigo-600"
                              value={"Web Development"}
                              {...register("services", {
                                required: "Please select at-least one skill",
                              })}
                            />
                          </div>
                          <div className="mt-4 ml-3 text-sm leading-6">
                            <label
                              htmlFor="comments"
                              className="text-base font-medium text-grey-700"
                            >
                              Web Development
                            </label>
                          </div>
                        </div>
                        {/* UI/UX Design */}
                        <div className="relative flex items-start">
                          <div className="mt-4 flex h-6 items-center">
                            <input
                              id="UI/UX Design"

// Hafizh, [10/25/2023 11:46 AM]
aria-describedby="UI/UX Design"
                              type="checkbox"
                              className="h-4 w-4 rounded-md border-grey-300 text-green-600 focus:ring-indigo-600"
                              value={"UI/UX Design"}
                              {...register("services", {
                                required: "Please select at-least one skill",
                              })}
                            />
                          </div>
                          <div className="mt-4 ml-3 text-sm leading-6">
                            <label
                              htmlFor="comments"
                              className="text-base font-medium text-grey-700"
                            >
                              UI/UX Design
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="msg_error">{errors.services?.message}</p>
                  </fieldset>
                  <div className="mt-10">
                    <Trans i18nKey="form.submit">
                      <button
                        type="submit"
                        className="block w-full rounded-md bg-grey-900 px-3.5 py-2.5 text-center text-base font-semibold text-white shadow-sm hover:bg-green-600"
                      >
                        Aku siap, Kirimkan Pesan!
                      </button>
                    </Trans>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Fade>
      </div>

      <ScrollToTop />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "id", ["common", "navbar"])),
  },
});