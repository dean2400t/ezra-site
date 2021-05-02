import Head from 'next/head'
import Image from 'next/image'

export default function Posts() {
  return (
    <div>
      <Head>
        <title>Ezra Site</title>
        <meta name="description" content="מודעות צעירי חולון" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
        <h1>
          מודעות
        </h1>
        </div>
      </main>
    </div>
  )
}
