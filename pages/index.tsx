import Head from "next/head";
import Gradient2 from "../components/gradient/gradient2";
import Hero from "../components/Hero";
import Stats from "@components/Stats";
import Solution from "@components/Solution";
import Belief from "@components/Belief";
import Project from "@components/Project";
import Client from "@components/Client";
import Newsletter from "@components/Newsletter";

export default function Home() {
  return (
    <>
      <Head>
        <title>Art By Code</title>
        <meta name="description" content="Art By Code" />
        <meta name="keywords" content="Art By Code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container w-full">
          <Hero />
          <Stats />
          <Gradient2 />
          <Solution />
        </div>
        <Belief />
        <div className="container w-full">
          <Project />
          <Client />
          <Newsletter />
        </div>
      </main>
    </>
  );
}
