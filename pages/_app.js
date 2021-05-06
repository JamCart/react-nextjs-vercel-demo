import Head from 'next/head'
import Link from 'next/link'

import './_app.css'
import style from './_app.module.css'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <script type="module" data-id="KbTF8dXGss" src="https://api.jamcart.dev/v1/jamcart.js"></script>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="A demo e-commerce storefront built with Next.js and JamCart" />
    </Head>

    <nav className={ style.nav }>
      <h1 className={ style.logo }>
        <Link href="/">
          <a>Jewels {/* Our Demo Website's Title */}</a>
        </Link>
      </h1>
      <jamcart-open class={ style.open } />
    </nav>

    <Component {...pageProps} />

    <footer className={ style.demo }>
      <p>
        Demo E-commerce website built with <a href="https://reactjs.org/">React</a>, <a href="https://nextjs.org/">Next.js</a>, and <a href="https://jamcart.io">Jamcart</a>
      </p>
      <p>
        Photos by <a href="https://unsplash.com/@sabrinnaringquist?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sabrinna Ringquist</a> on <a href="https://unsplash.com/@sabrinnaringquist?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </p>
    </footer>
  </>
}
