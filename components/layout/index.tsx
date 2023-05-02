import Footer from "@components/footer/footer";
// import dynamic from "next/dynamic";
import Navbar from "../navbar";
// const Navbar = dynamic(() => import("../navbar/index"))
import { ReactNode } from "react";

interface Props {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
