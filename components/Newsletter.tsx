import Image from "next/image";
import React from "react";
import { Trans, useTranslation } from "next-i18next";
import Button from "./button";

export default function Newsletter() {
  const { t } = useTranslation()

  return (
    <div className="bg-green-50 rounded-2xl py-16 sm:py-18 lg:py-20 md:mt-[96px] mt-20 md:flex md:items-center md:justify-between 2xl:p-20 xl:p-14 lg:p-10 md:p-10 p-6">
      <Image
        className="md:text-start md:mx-0 text-center mx-auto"
        src="/icon-newsletter.svg"
        alt="newsletter"
        width={137}
        height={137}
      />
      <div className="xl:px-10 lg:px-12 xl:mt-0 lg:mt-0 md:mx-8 mt-8">
        <h1 className="text-grey-900 lg:text-3xl text-2xl font-semibold leading-[38px] ">
          {t('home.contact.title')}
        </h1>
        <p className="mt-2 lg:text-xl text-lg leading-[30px] text-grey-500">
          {t('home.contact.desc')}
        </p>
      </div>
      <div className="mt-8 lg:mt-6 md:mt-10 lg:ml-3 md:ml-0 sm:flex-shrink-0">
        <Trans i18nKey="contact_us">
          <Button>Hubungi Kami</Button>
        </Trans>
      </div>
    </div>
  );
}
