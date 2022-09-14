import ReactMarkdown from "react-markdown";

export default function ContentWrapper({data}) {
    return (
        <>
            {data &&
                data.map((infoblock) => (
                <>
                    {(infoblock.attributes.Seitenwechsel) ? (
                        <div className="py-16 md:py-24 lg:py-32" id={infoblock.attributes.Titel}>
                            {/*HEADER*/}
                            <div className='grid lg:grid-cols-11 gap-8 mb-8'>
                                <div className='col-span-6' />
                                <h1 className="col-span-5 text-5xl xs:text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-primary font-bold" data-aos="fade-up">{infoblock.attributes.Titel}</h1>
                            </div>
                            {/*TEXT & IMG BLOCK*/}
                            <div className='grid lg:grid-cols-11 gap-8 justify-center'>
                                <div className='col-span-6 transition ease-in-out hover:-translate-y-2 duration-700 order-last lg:order-first'>
                                    <img src={`http://localhost:1337`+infoblock.attributes.Bild.data.attributes.url} alt="kraftquelle felsenkeller kufstein" className="w-full " data-aos="fade-up" />
                                </div>
                                <div className='inline-flex flex-col my-auto col-span-5'>
                                    <div className='w-16 h-2 bg-primary' data-aos="fade-up" />
                                    <p className='tracking-wide text-xl mt-8' data-aos="fade-up">
                                        <ReactMarkdown>
                                            {infoblock.attributes.Text}
                                        </ReactMarkdown>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="py-16 md:py-24 lg:py-32" id={infoblock.attributes.Titel}>
                            {/*HEADER*/}
                            <div className='grid lg:grid-cols-11 gap-8 mb-8'>
                                <h1 className="col-span-5 text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-primary font-bold text-left" data-aos="fade-up">{infoblock.attributes.Titel}</h1>
                                <div className='col-span-6' />
                            </div>
                            {/*TEXT & IMG BLOCK*/}
                            <div className='grid lg:grid-cols-11 gap-8 justify-center'>
                                <div className='inline-flex flex-col my-auto col-span-5'>
                                    <div className='w-16 h-2 bg-primary' data-aos="fade-up" />
                                    <p className='tracking-wide text-xl mt-8' data-aos="fade-up">
                                        <ReactMarkdown>
                                            {infoblock.attributes.Text}
                                        </ReactMarkdown>
                                    </p>
                                </div>
                                <div className='col-span-6 transition ease-in-out hover:-translate-y-2 duration-700'>
                                    <img src={`http://localhost:1337`+infoblock.attributes.Bild.data.attributes.url} alt="kraftquelle felsenkeller kufstein" className="w-full" data-aos="fade-up" />
                                </div>
                            </div>
                        </div>
                    )}
                </>
            ))}
        </>
    )
}