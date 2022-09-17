import NextLink from "next/link"
import Head from "next/head";
import LogoConstructor from "../components/LogoConstructor"
import dynamic from "next/dynamic";
import Footer from "../components/Footer";

export default function Termine({ appointmentCal, appointments, blockdays }) {

    const TerminBlock = dynamic(
        () => import('../components/TerminBlock'),
        { ssr: false }
      )

    return (
        <>
            <Head>
                <title>Termine | Kraftquelle Felsenkeller</title>
            </Head>
            <div className='max-w-7xl text-center mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='py-8 flex justify-center'>
                    <NextLink href="/">
                        <a><LogoConstructor /></a>
                    </NextLink>
                </div>
                <div className='mt-16'>
                    <NextLink href="/">
                        <a><p className='tracking-wide text-xl font-bold hover:text-primary' data-aos="fade-up">← Zurück zur Startseite</p></a>
                    </NextLink>
                </div>
                <div className="mb-16 flex flex-col justify-center items-center" data-aos="fade-up">
                    <h1 className="text-5xl xs:text-5xl sm:text-6xl md:text-7xl xl:text-8xl pointer-events-none text-primary font-bold text-center" data-aos="fade-up">Termine</h1>
                </div>
                
                <div className="max-w-xl mx-auto bg-secondary rounded-xl flex justify-center items-center font-bold" data-aos="fade-up" data-aos-delay="400">
                    <TerminBlock appointmentCal={appointmentCal} appointmentss={appointments} blockdays={blockdays}  />
                </div>
            </div>
            <Footer/>
        </>
    );
}


export async function getStaticProps() {

    const baseURL = process.env.BACKEND_URL;

    const [appointmentCalendarRes, appointmentsRes, blockRes ] = await Promise.all([
        fetch(baseURL + '/api/termin-kalender'),
        fetch(baseURL + '/api/termines'),
        fetch(baseURL + '/api/termin-blockaden')
    ]);

    const { data: appointmentCal } = await appointmentCalendarRes.json();
    const { data: appointments } = await appointmentsRes.json();
    const { data: blockdays } = await blockRes.json();

    return {
        props: {
            appointmentCal,
            appointments,
            blockdays
        },
        revalidate: 10,
    };
}