/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const LangComponent = () => {
  const router = useRouter()
  const [value, setValue] = useState(router.locale)

  const toggleLang = (locale: string) => {
    setValue(locale)
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale })
  }

  return (
    <div className="flex">
      <Image src="/translate.svg" alt="icon translate" width={16} height={16} />
      <select
        value={value}
        onChange={(e) => {
          toggleLang(e.target.value)
        }}
        className="cursor-pointer "
      >
        <option value="id">ID</option>
        <option value="en">EN</option>
      </select>
    </div>
  )
}

export default LangComponent
