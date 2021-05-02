import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ezra Site</title>
        <meta name="description" content="אתר לצעירי חולון" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <div>
        <p className='text-100'>
          האתר
        </p>
        
        <Link href="/posts">
          <span>

          </span>
        </Link>
        </div>
    </div>
  )
}
