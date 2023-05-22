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
    
    if(appointmentCal, appointments, blockdays)
    return (
        <>
            <Head>
                <title>Termine | Kraftquelle Felsenkeller</title>
            </Head>
            <div className='px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8'>
                <div className='flex justify-center py-8'>
                    <NextLink href="/">
                        <a><LogoConstructor /></a>
                    </NextLink>
                </div>
                <div className='mt-16'>
                    <NextLink href="/">
                        <a><p className='text-xl font-bold tracking-wide hover:text-primary' data-aos="fade-up">← Zurück zur Startseite</p></a>
                    </NextLink>
                </div>
                <div className="flex flex-col items-center justify-center mb-16" data-aos="fade-up">
                    <h1 className="text-5xl font-bold text-center pointer-events-none xs:text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-primary" data-aos="fade-up">Termine</h1>
                </div>
                
                <div className="flex items-center justify-center max-w-xl mx-auto font-bold bg-secondary rounded-xl" data-aos="fade-up" data-aos-delay="400">
                    <TerminBlock appointmentCal={appointmentCal} appointmentss={appointments} blockdays={blockdays}  />
                </div>
            </div>
            <Footer/>
        </>
    );
}


export async function getServerSideProps() {

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
    };
}