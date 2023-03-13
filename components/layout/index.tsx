import Footer from "@components/footer/footer";
import Navbar from "@components/navbar";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="p-4">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
