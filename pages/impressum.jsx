import Head from "next/head"
import NextLink from "next/link"
import LogoConstructor from "../components/LogoConstructor"
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'

export default function Impressum({imprint}) {
    return (
        <>
            <Head>
                <title>Impressum | Kraftquelle Felsenkeller</title>
            </Head>
            <div className='px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8'>
                <div className='flex justify-center py-8'>
                    <NextLink href="/">
                        <a><LogoConstructor/></a>
                    </NextLink>
                </div>
                <div className='mt-16'>
                    <NextLink href="/">
                        <a><p className='text-xl font-bold tracking-wide animate-fade hover:text-primary' data-aos="fade-up" data-aos-delay="900" >← Zurück zur Startseite</p></a>
                    </NextLink>
                </div>
                <div className="flex flex-col items-center justify-center mb-16" data-aos="fade-up" data-aos-delay="900">
                    <h1 className="text-5xl font-bold text-center pointer-events-none xs:text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-primary" data-aos="fade-up">{imprint.attributes.Titel}</h1>
                    <div className="max-w-5xl my-16 text-lg text-left text-container">
                        <ReactMarkdown remarkPlugins={[remarkGfm]} className="whitespace-pre-wrap">
                            {imprint.attributes.Text}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {

    const baseURL = process.env.BACKEND_URL;
  
    const [ imprintRes ] = await Promise.all([
      fetch(baseURL + '/api/impressum')
    ]);
  
    const { data: imprint } = await imprintRes.json();
  
    return {
        props: {
            imprint
        },
        revalidate: 10,
    };
  }