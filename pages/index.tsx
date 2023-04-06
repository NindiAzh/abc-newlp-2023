import Head from "next/head";
import Gradient2 from "@components/gradient/gradient2";
import Hero from "@components/Hero";
import Stats from "@components/Stats";
import Solution from "@components/Solution";
import Belief from "@components/Belief";
import Project from "@components/Project";
import Client from "@components/Client";
import Newsletter from "@components/Newsletter";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router";

const Home = (
  _props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const router = useRouter()
  const { pathname } = router
  const { t } = useTranslation()
  const desc = t('home.solution.desc')

  return (
    <>
      <Head>
        <title>Art By Code - Home</title>
        <meta name="title" content="Art By Code - Home" />
        <meta name="description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pathname} />
        <meta property="og:title" content="Art By Code - Home" />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content="/favicon/logo.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pathname} />
        <meta property="twitter:title" content="Art By Code - Home" />
        <meta property="twitter:description" content={desc} />
        <meta property="twitter:image" content="/favicon/logo.png" />
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

export const getStaticProps: GetStaticProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'id', [
      'common',
      'navbar'
    ])),
  },
})

export default Home
