import Head from 'next/head'
import dynamic from 'next/dynamic'
import HeaderBlock from '../components/HeaderBlock'
import ContentBlock from '../components/ContentBlock'

export default function Home() {
  
  const ContactBlock = dynamic(
    () => import('../components/ContactBlock'),
    { ssr: false }
  )

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
