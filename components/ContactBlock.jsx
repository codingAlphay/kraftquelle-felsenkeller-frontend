import NextLink from 'next/link'

export default function ContactBlock({data}) {
    
    async function handleOnSubmit(e) {
        e.preventDefault();
        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field => {
            if(!field.name) return;
            formData[field.name] = field.value;
        })
        fetch('/api/mailhandler', {
            method: 'post',
            body: JSON.stringify(formData)
        })
        document.getElementById('contactform').className = 'hidden'
        document.getElementById('contactform-success').className = 'text-primary font-bold text-lg text-center'
    }

    return (
        <>
            <div className="pt-16 max-w-xl mx-auto md:pt-24 lg:pt-32" id="contact">
                {/*HEADER*/}
                <h1 className="col-span-5 text-5xl xs:text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-primary font-bold text-center" data-aos="fade-up">Kontakt</h1>
                {/*CONTACTFORM*/}
                <div className="form__wrapper my-12">
                    <form method='post' id="contactform" onSubmit={handleOnSubmit}>
                        <div className="grid md:grid-cols-2 md:gap-6" data-aos="fade-up">
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="text" name="first_name" id="first_name" className="block font-semibold py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer" placeholder=" " required />
                                <label htmlFor="first_name" className="font-semibold absolute text-md text-primary duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Vorname</label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="text" name="last_name" id="last_name" className="block font-semibold py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer" placeholder=" " required />
                                <label htmlFor="last_name" className="font-semibold absolute text-md text-primary duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Nachname</label>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6" data-aos="fade-up">
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="tel" name="phone" id="phone" className="block font-semibold py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer" placeholder=" " required />
                                <label htmlFor="phone" className="font-semibold absolute text-md text-primary duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Telefon</label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="email" name="email" id="email" className="block font-semibold py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer" placeholder=" " required />
                                <label htmlFor="email" className="font-semibold absolute text-md text-primary duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Email</label>
                            </div>
                        </div>
                        <div className="relative z-0 mb-6 w-full group" data-aos="fade-up">
                            <textarea name="textarea" id="textarea" rows="3" className="block font-semibold py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer" placeholder=" "></textarea>
                            <label htmlFor="textarea" className="font-semibold absolute text-md text-primary duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Nachricht</label>
                        </div>
                        <div className="flex items-center my-8" data-aos="fade-up">
                            <input id="gdpr_checkbox" type="checkbox" value="" className="w-6 h-6 text-primary bg-gray-100 rounded border-gray-300 focus:ring-transparent dark:ring-offset-transparent focus:ring-2" required/>
                            <label htmlFor="gdpr_checkbox" className="ml-2 text-sm font-bold text-primary">Ich bin einverstanden mit der Verarbeitung meiner Daten (<NextLink href="/datenschutz"><a rel="noreferrer" className="hover:text-gray-500">Datenschutz</a></NextLink>).</label>
                        </div>
                        <div className="w-full flex justify-center" data-aos="fade-up">
                            <button type="submit" className="text-white bg-primary tracking-widest hover:bg-secondary hover:ring-primary hover:ring-2 hover:text-primary hover:font-bold focus:ring-primary focus:ring-4 focus:outline-none font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center">ABSENDEN</button>
                        </div>
                    </form>
                    <div className='text-primary font-bold text-lg text-center hidden' id="contactform-success">
                        Wir bedanken uns für Ihre Anfrage. <br/> Sie werden von uns zeitnah kontaktiert!
                    </div>
                </div>
            </div>
        </>
    )
}