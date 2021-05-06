import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import style from './index.module.css'

import { getProducts } from '/lib/api.js'

export async function getStaticProps () {
  return {
    props: {
      products: await getProducts()
    }
  }
}

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Next.js E-Commerce Demo</title>
      </Head>

      <main>
        <ul className={ style['product-grid'] }>
          { products.map(product => ProductView({ product })) }
        </ul>
      </main>
    </>
  )
}

function ProductView ({ product }) {
  return (
    <li key={ product.id }>
      <Link href={ `/product/${ product.id }` } prefetch={ false }>
        <a className={ style.product }>
          <div className={ style['product-image'] }>
            <Image alt="" height="427" width="640" src={ product.image } />
          </div>
          <div className={ style['product-description'] }>
            { product.name }
          </div>
          <div className={ style['product-price'] }>
            { product.price }
          </div>
        </a>
      </Link>
    </li>
  )
}
