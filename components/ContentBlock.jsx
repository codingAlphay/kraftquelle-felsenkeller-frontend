import ReactMarkdown from "react-markdown";

export default function ContentWrapper({data}) {
    const backendURL = process.env.BACKEND_URL
    return (
        <>
            {data &&
                data.map((infoblock) => (
                <>
                    {(infoblock.attributes.Seitenwechsel) ? (
                        <div className="py-16 md:py-24 lg:py-32" key={infoblock.attributes.Titel} id={infoblock.attributes.Titel}>
                            {/*HEADER*/}
                            <div className='grid gap-8 mb-8 lg:grid-cols-11'>
                                <div className='col-span-6' />
                                <h1 className="col-span-5 text-5xl font-bold xs:text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-primary" data-aos="fade-up">{infoblock.attributes.Titel}</h1>
                            </div>
                            {/*TEXT & IMG BLOCK*/}
                            <div className='grid justify-center gap-8 lg:grid-cols-11'>
                                <div className='order-last col-span-6 transition duration-700 ease-in-out hover:-translate-y-2 lg:order-first'>
                                    <img src={infoblock.attributes.Bild.data.attributes.url} alt="kraftquelle felsenkeller kufstein" className="w-full " data-aos="fade-up" />
                                </div>
                                <div className='inline-flex flex-col col-span-5 my-auto'>
                                    <div className='w-16 h-2 bg-primary' data-aos="fade-up" />
                                    <p className='mt-8 text-xl tracking-wide' data-aos="fade-up">
                                        <ReactMarkdown className="whitespace-pre-wrap">
                                            {infoblock.attributes.Text}
                                        </ReactMarkdown>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="py-16 md:py-24 lg:py-32" key={infoblock.attributes.Titel} id={infoblock.attributes.Titel}>
                            {/*HEADER*/}
                            <div className='grid gap-8 mb-8 lg:grid-cols-11'>
                                <h1 className="col-span-5 text-5xl font-bold text-left sm:text-6xl md:text-7xl xl:text-8xl text-primary" data-aos="fade-up">{infoblock.attributes.Titel}</h1>
                                <div className='col-span-6' />
                            </div>
                            {/*TEXT & IMG BLOCK*/}
                            <div className='grid justify-center gap-8 lg:grid-cols-11'>
                                <div className='inline-flex flex-col col-span-5 my-auto'>
                                    <div className='w-16 h-2 bg-primary' data-aos="fade-up" />
                                    <p className='mt-8 text-xl tracking-wide' data-aos="fade-up">
                                        <ReactMarkdown className="whitespace-pre-wrap">
                                            {infoblock.attributes.Text}
                                        </ReactMarkdown>
                                    </p>
                                </div>
                                <div className='col-span-6 transition duration-700 ease-in-out hover:-translate-y-2'>
                                    <img src={infoblock.attributes.Bild.data.attributes.url} alt="kraftquelle felsenkeller kufstein" className="w-full" data-aos="fade-up" />
                                </div>
                            </div>
                        </div>
                    )}
                </>
            ))}
        </>
    )
}