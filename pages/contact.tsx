import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import React from "react";
import { Trans, useTranslation } from "next-i18next";
import Gradient1 from "../components/gradient/gradient1";

export default function Contact() {
  const { t } = useTranslation()

  return (
    <>
     <Gradient1 />
      <div className="container relative mb-2">
        <div className="lg:absolute lg:inset-5 lg:left-1/2 md:-mt-2 2xl:-mt-0 xl:-mt-0 lg:-mt-0 -mt-20">
          <Image
            className="w-[608px] h-[685.5px] md:mt-60 mx-auto lg:block hidden"
            src="/img-contact.svg"
            alt="imgPartner"
            width={608}
            height={685.5}
          />
        </div>
        <div className="pt-32 pb-24 sm:pt-24 sm:pb-32 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
          <div className="px-6 2xl:-mx-10 xl:mx-12 lg:mx-20">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="col-span-full text-green-700 font-semibold mb-[24px] text-xl">
                CONTACT ME
              </h2>
              <p className="col-span-full text-grey-900 font-semibold text-4xl md:text-5xl mb-[10px]">
                {t('contact.title')}
              </p>
              <p className="mt-[40px] col-span-full xl:w-11/12 lg:w-5/6 text-grey-600 md:text-xl text-lg leading-[30px]">
                {t('contact.desc')}
              </p>
              <form
                action="#"
                method="POST"
                className="mx-auto mt-10 max-w-xl sm:mt-12"
              >
                <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      {t('form.first_name')}
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        placeholder={`${t('form.first_name')}`}
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      {t('form.last_name')}
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        placeholder={`${t('form.last_name')}`}
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
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
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      {t('form.organization')}
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        placeholder={`${t('form.organization')}`}
                        name="name-organisasi"
                        id="name-organisasi"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      {t('form.message')}
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        placeholder={`${t('form.message')}`}
                        id="message"
                        rows={4}
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <fieldset className="mt-6 ">
                  <legend className="block text-sm leading-5 text-grey-700 font-semibold">
                    Services
                  </legend>
                  <div>
                    <div className="grid grid-cols-1 gap-y-0 gap-x-0 sm:grid-cols-2">
                      {/* website design */}
                      <div className="relative flex items-start">
                        <div className="mt-4 flex h-6 items-center">
                          <input
                            id="website-design"
                            aria-describedby="website-design"
                            name="website-design"
                            type="checkbox"
                            className="h-4 w-4 rounded-md border-grey-300 text-green-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="mt-4 ml-3 text-sm leading-6">
                          <label
                            htmlFor="comments"
                            className="text-base font-medium text-grey-700"
                          >
                            Website design
                          </label>
                        </div>
                      </div>
                      {/* Strategy & consulting */}
                      <div className="relative flex items-start">
                        <div className="mt-4 flex h-6 items-center">
                          <input
                            id="strategy-consulting"
                            aria-describedby="strategy-consulting"
                            name="strategy-consulting"
                            type="checkbox"
                            className="h-4 w-4 rounded-md border-grey-300 text-green-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="mt-4 ml-3 text-sm leading-6">
                          <label
                            htmlFor="comments"
                            className="text-base font-medium text-grey-700"
                          >
                            Strategy & consulting
                          </label>
                        </div>
                      </div>
                      {/* uiux design */}
                      <div className="relative flex items-start">
                        <div className="mt-4 flex h-6 items-center">
                          <input
                            id="uiux-design"
                            aria-describedby="uiux-design"
                            name="uiux-design"
                            type="checkbox"
                            className="h-4 w-4 rounded-md border-grey-300 text-green-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="mt-4 ml-3 text-sm leading-6">
                          <label
                            htmlFor="comments"
                            className="text-base font-medium text-grey-700"
                          >
                            UI/UX design
                          </label>
                        </div>
                      </div>
                      {/* content creation */}
                      <div className="relative flex items-start">
                        <div className="mt-4 flex h-6 items-center">
                          <input
                            id="content-creation"
                            aria-describedby="content-creation"
                            name="content-creation"
                            type="checkbox"
                            className="h-4 w-4 rounded-md border-grey-300 text-green-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="mt-4 ml-3 text-sm leading-6">
                          <label
                            htmlFor="comments"
                            className="text-base font-medium text-grey-700"
                          >
                            Content creation
                          </label>
                        </div>
                      </div>
                      {/* user research */}
                      <div className="relative flex items-start">
                        <div className="mt-4 flex h-6 items-center">
                          <input
                            id="user-research"
                            aria-describedby="user-research"
                            name="user-research"
                            type="checkbox"
                            className="h-4 w-4 rounded-md border-grey-300 text-green-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="mt-4 ml-3 text-sm leading-6">
                          <label
                            htmlFor="comments"
                            className="text-base font-medium text-grey-700"
                          >
                            User research
                          </label>
                        </div>
                      </div>
                      {/* Other */}
                      <div className="relative flex items-start">
                        <div className="mt-4 flex h-6 items-center">
                          <input
                            id="other"
                            aria-describedby="other"
                            name="other"
                            type="checkbox"
                            className="h-4 w-4 rounded-md border-grey-300 text-green-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="mt-4 ml-3 text-sm leading-6">
                          <label
                            htmlFor="comments"
                            className="text-base font-medium text-grey-700"
                          >
                            Other
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
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
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'id', [
      'common',
      'footer',
      'navbar'
    ])),
  },
})
