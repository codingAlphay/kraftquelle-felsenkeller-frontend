export default function ContactBlock() {
    return (
        <>
            <div className="py-16 max-w-xl mx-auto md:py-24 lg:py-32" id="contact">
                {/*HEADER*/}
                <h1 className="col-span-5 text-5xl xs:text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-primary font-bold text-center" data-aos="fade-up">Kontakt</h1>
                {/*CONTACTFORM*/}
                <div className="form__wrapper my-12">
                    <form>
                        <div className="grid md:grid-cols-2 md:gap-6" data-aos="fade-up">
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="text" name="floating_first_name" id="floating_first_name" className="block font-semibold py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer" placeholder=" " required />
                                <label htmlFor="floating_first_name" className="font-semibold absolute text-md text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Vorname</label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="text" name="floating_last_name" id="floating_last_name" className="block font-semibold py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer" placeholder=" " required />
                                <label htmlFor="floating_last_name" className="font-semibold absolute text-md text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nachname</label>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6" data-aos="fade-up">
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="tel" name="floating_phone" id="floating_phone" className="block font-semibold py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer" placeholder=" " required />
                                <label htmlFor="floating_phone" className="font-semibold absolute text-md text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefon</label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="email" name="floating_email" id="floating_email" className="block font-semibold py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer" placeholder=" " required />
                                <label htmlFor="floating_email" className="font-semibold absolute text-md text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                            </div>
                        </div>
                        <div className="relative z-0 mb-6 w-full group" data-aos="fade-up">
                            <textarea name="floating_textarea" id="floating_textarea" rows="3" className="block font-semibold py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer" placeholder=" "></textarea>
                            <label htmlFor="floating_textarea" className="font-semibold absolute text-md text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nachricht</label>
                        </div>
                        <div className="flex items-center my-8" data-aos="fade-up">
                            <input id="gdpr_checkbox" type="checkbox" value="" className="w-6 h-6 text-primary bg-gray-100 rounded border-gray-300 focus:ring-transparent dark:ring-offset-transparent focus:ring-2" required/>
                            <label htmlFor="gdpr_checkbox" className="ml-2 text-sm font-bold text-primary">Ich bin einverstanden mit der Verarbeitung meiner Daten (<a href="/datenschutz" className="hover:text-gray-500">Datenschutz</a>).</label>
                        </div>
                        <div className="w-full flex justify-center" data-aos="fade-up">
                            <button type="submit" className="text-white bg-primary tracking-widest hover:bg-secondary hover:ring-primary hover:ring-2 hover:text-primary hover:font-bold focus:ring-primary focus:ring-4 focus:outline-none font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center">ABSENDEN</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}