import Image from "next/image";
import React from "react";

export default function carwashPosCooming() {
  return (
    <div className="overflow-hidden bg-white py-4 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-40 text-5xl font-bold tracking-tight text-green-600 sm:text-6xl">
                Coming Soon!
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Our Apps will launch soon.
              </p>
            </div>
          </div>
          <Image
            src="/carwash-pos.svg"
            alt="Carwash Pos"
            className="w-[25rem] max-w-none sm:w-[38rem] md:mx-auto lg:-ml-24"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
