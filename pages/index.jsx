import Head from 'next/head'
import dynamic from 'next/dynamic'
import HeaderBlock from '../components/HeaderBlock'
import Footer from '../components/Footer'
import StickyTermin from '../components/StickyTermin'

export default function Home({infoblock}) {
  
  const ContactBlock = dynamic(
    () => import('../components/ContactBlock'),
    { ssr: false }
  )
  const ContentBlock = dynamic(
    () => import('../components/ContentBlock'),
    { ssr: false }
  )

  //description hier
  return (
    <>
      <Head>
          <title>Kraftquelle Felsenkeller | Atmen Sie wieder auf</title>
      </Head>
        <StickyTermin/>
      <HeaderBlock/>
      <div className='px-4 mx-auto content__container max-w-7xl sm:px-6 lg:px-8'>
        <ContentBlock data={infoblock}/>
        <ContactBlock/>
        <Footer/>
      </div>
    </>
  )
}

export async function getStaticProps() {

  const baseURL = process.env.BACKEND_URL;

  const [infoBlockRes ] = await Promise.all([
    fetch(baseURL + '/api/infoblocks?sort[0]=Position&populate=*')
  ]);

  const { data: infoblock } = await infoBlockRes.json();

  return {
      props: {
        infoblock
      },
      revalidate: 10,
  };
}
