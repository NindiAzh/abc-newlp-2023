import Button from '@components/button'
import Head from 'next/head'
import Layout from "@components/layout"

export default function Home() {
  return (
    <>
      <Head>
        <title>Art By Code</title>
        <meta name="description" content="Art By Code" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex py-4">
          <Button>
            Ini Button
          </Button>
        </div>
      </main>
    </>
  )
}
