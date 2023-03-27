/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import Image from "next/image";

export default function index() {
  const [value, setValue] = useState("");
  return (
    <div className="flex">
      <Image src="/translate.svg" alt="icon translate" width={16} height={16} />
      <select
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="cursor-pointer "
      >
        <option value="IN">IN</option>
        <option value="EN">EN</option>
      </select>
    </div>
  );
}
