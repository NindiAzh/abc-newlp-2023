import React from "react";

const index = ({ children }: { children?: string }) => {
  return (
    <h1 className="text-green-500 text-base mx-4 font-semibold">{children}</h1>
  );
};

export default index;
