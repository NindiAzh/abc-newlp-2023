import React from "react";

export default function index({ left, children }: any) {
  return (
    <p
      className={`col-span-full text-grey-900 text-center font-semibold text-3xl md:text-4xl mb-[20px] ${
        !left ? "text-center" : ""
      }`}
    >
      {children}
    </p>
  );
}
