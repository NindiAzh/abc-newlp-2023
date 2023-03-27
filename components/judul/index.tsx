import React from "react";

export default function index({ left, children }: any) {
  return (
    <h2
      className={`col-span-full text-green-700 text-center font-semibold mb-[12px] text-s md:text-base ${
        !left ? "text-center" : "text-start"
      }`}
    >
      {children}
    </h2>
  );
}
