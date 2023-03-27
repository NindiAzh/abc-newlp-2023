import Footer from "@components/footer/footer";
import Navbar from "@components/navbar";
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
