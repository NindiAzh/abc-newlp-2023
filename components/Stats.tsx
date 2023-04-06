import React from "react";
import { useTranslation, Trans } from "next-i18next";


export default function Stats() {
    const { t } = useTranslation()

  const stats = [
    { id: 1, name:t('home.stats.success'), value: "20+" },
    { id: 2, name:t('home.stats.happy'), value: "10+" },
    { id: 3, name:t('home.stats.pro'), value: "200+" },
  ];

  return (
    <div className="py-10 sm:py-10">
      <hr className="md:w-6/6 my-6 mt-4 border-[#EAECF0] sm:mx-auto lg:my-8" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-[64px] mb-[64px]">
        <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="leading-7 text-gray-900 font-medium text-lg">
                {stat.name}
              </dt>
              <dd className="order-first text-6xl font-semibold tracking-tight text-gray-900">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <hr className="md:w-6/6 my-6 mt-4 border-[#EAECF0] sm:mx-auto lg:my-8" />
    </div>
  );
}
