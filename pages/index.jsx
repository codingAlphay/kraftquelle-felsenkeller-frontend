import Head from 'next/head'
import dynamic from 'next/dynamic'
import HeaderBlock from '../components/HeaderBlock'
import Footer from '../components/Footer'

export default function Home({infoblock}) {
  
  const ContactBlock = dynamic(
    () => import('../components/ContactBlock'),
    { ssr: false }
  )
  const ContentBlock = dynamic(
    () => import('../components/ContentBlock'),
    { ssr: false }
  )

  return (
    <>
      <Head>
          <title>Kraftquelle Felsenkeller | Atmen Sie wieder auf</title>
      </Head>

      <HeaderBlock/>
      <div className='content__container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <ContentBlock data={infoblock}/>
        <ContactBlock/>
        <Footer/>
      </div>
    </>
  )
}

export async function getStaticProps() {

  const baseURL = "http://localhost:1337";

  const [infoBlockRes, ] = await Promise.all([
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
