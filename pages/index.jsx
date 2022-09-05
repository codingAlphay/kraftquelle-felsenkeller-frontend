import Head from 'next/head'
import HeaderBlock from '../components/HeaderBlock'
import ContentBlock from '../components/ContentBlock'
import ContactBlock from '../components/ContactBlock'

export default function Home() {
  return (
    <>
      <Head>
          <title>Kraftquelle Felsenkeller | Atmen Sie wieder auf</title>
      </Head>

      <HeaderBlock/>
      <div className='content__container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <ContentBlock/>
        <ContactBlock/>
      </div>
      <div></div>
    </>
  )
}
