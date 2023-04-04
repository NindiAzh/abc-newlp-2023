import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiX, BiMenu } from "react-icons/bi";
import { useRouter } from "next/router";
import Language from "@components/language";
import Button from "@components/button";
import { Trans, useTranslation } from "next-i18next";

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { t } = useTranslation("navbar")

  const navigation = [
    { path: "/", title: t('home') },
    { path: "/solusi", title: t('solution') },
    { path: "/about", title: t('about') },
    { path: "/project", title: t('project') },
    { path: "/works", title: t('work') },
  ];

  return (
    <header>
      <div className="container w-full relative flex justify-between items-center py-4 md:py-6 z-50">
        {/* Logo */}
        <Link href="/" legacyBehavior>
          <a>
            <Image
              src="/logo.svg"
              alt="Logo Art By Code"
              className="max-h-16 md:max-h-20 md:cursor-pointer"
              width={60}
              height={60}
            />
          </a>
        </Link>

        {/* Mobile Button */}
        <button
          className="flex xl:hidden"
          aria-label="Menu Toggle"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <BiX className="opacity-75 w-9 h-9" />
          ) : (
            <BiMenu className="opacity-75 w-9 h-9" />
          )}
        </button>

        {/* Desktop Nav */}
        <ul className="md:hidden hidden 2xl:flex xl:flex items-center">
          {navigation.map((nav, index) => (
            <li
              key={index}
              className="ml-8 text-lg text-gray-600 font-semibold hover:text-green-600 duration-200"
            >
              <Link href={nav.path} legacyBehavior>
                <a className={router.pathname === nav.path ? "active" : ""}>
                  {nav.title}
                </a>
              </Link>
            </li>
          ))}
          <div className="ml-8">
            <Language />
          </div>
          <div className="ml-8">
            <Trans i18nKey="contact_us">
              <Button>Hubungi Kami</Button>
            </Trans>
          </div>
        </ul>
      </div>

      {/* Mobile Nav */}
      <div
        className={`container absolute duration-500 bg-white py-10 z-50 block xl:hidden ${
          open
            ? "translate-y-0 z-50 opacity-100"
            : "-translate-y-96 z-0 opacity-0"
        }`}
      >
        <ul>
          {navigation.map((nav, index) => (
            <li
              key={index}
              className="text-lg mb-2 text-gray-600 font-semibold hover:text-green-600 duration-200"
            >
              <Link href={nav.path} legacyBehavior>
                <a className={router.pathname === nav.path ? "active" : ""}>
                  {nav.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="ml-0">
          <Language />
        </div>
        <div className="ml-0 mt-8">
          <Button>Hubungi Kami</Button>
        </div>
      </div>
    </header>
  );
}
