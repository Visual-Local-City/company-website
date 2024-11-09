import Head from 'next/head'
import Banner from '../components/banner'
import Benefit from '../components/benefit'
import Partners from '../components/partners'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Newsletter from '../components/newsletter'
import Pricing from '../components/pricing'
import Review from '../components/review'
import Transaction from '../components/transaction'

export default function Home() {
  return (
    <div className="font-heading">
      <Head>
        <title>Visual Local City</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className='w-full h-[700px] md:h-[1100px] xl:h-header bg-gradient'>
        <Navbar />
        <Banner />
      </header>

      <article>
        <Partners />
        <Benefit />
        <Pricing />
      </article>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
