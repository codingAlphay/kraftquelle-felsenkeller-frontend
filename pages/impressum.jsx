import Head from "next/head"
import NextLink from "next/link"
import LogoConstructor from "../components/LogoConstructor"

export default function Impressum() {
    return (
        <>
            <Head>
                <title>Impressum | Kraftquelle Felsenkeller</title>
            </Head>
            <div className='max-w-7xl text-center mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='py-8 flex justify-center'>
                    <NextLink href="/">
                        <a><LogoConstructor/></a>
                    </NextLink>
                </div>
                <div className='mt-16'>
                    <NextLink href="/">
                        <a><p className='animate-fade tracking-wide text-xl font-bold hover:text-primary' data-aos="fade-up" data-aos-delay="900" >← Zurück zur Startseite</p></a>
                    </NextLink>
                </div>
                <div className="mb-16 flex flex-col justify-center items-center" data-aos="fade-up" data-aos-delay="900">
                    <h1 className="text-5xl xs:text-5xl sm:text-6xl md:text-7xl xl:text-8xl pointer-events-none text-primary font-bold text-center" data-aos="fade-up">Impressum</h1>
                </div>
            </div>
        </>
    )
}