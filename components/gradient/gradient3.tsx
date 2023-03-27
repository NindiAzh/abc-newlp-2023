import React from "react";

export default function gradient3() {
  return (
    <>
      <div className="absolute -inset-x-0 -top-0 -z-10 transform-gpu overflow-hidden blur-[50px] sm:-top-20">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[90.1875rem] max-w-none -translate-x-1/2 rotate-[0deg] sm:left-[calc(40%-30rem)] sm:h-[75.375rem] lg:mt-[2200px] md:mt-[3600px] mt-[4180px]"
          viewBox="0 0 1155 678"
        >
          <path
            d="M106 109L1533.5 950.5"
            stroke="url(#paint0_linear_1354_93351)"
            stroke-opacity="0.5"
            stroke-width="20"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1354_93351"
              x1="819.75"
              y1="109"
              x2="819.75"
              y2="950.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1DC0AD" />
              <stop offset="1" stop-color="#1DC0AD" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
