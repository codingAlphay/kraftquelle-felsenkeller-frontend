import axios from "axios"
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import NextLink from 'next/link'
import { Link } from 'react-scroll'
import ReactMarkdown from "react-markdown"

export default function TerminBlock({ appointmentCal, appointmentss, blockdays }) {

    const week = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']

    const [value, onChange] = useState(new Date());
    const [selected, setDate] = useState(null);
    const [booked, setBooked] = useState(false);
    const [teilnehmer, setAmount] = useState(1);
    const day = value.getDay()
    const maxdate = new Date(blockdays.attributes.MaximalDatum)
    let appointments = JSON.stringify(appointmentCal.attributes[week[day]]).split(',')
    let blockingdays = JSON.stringify(blockdays.attributes.Terminblockierungen).split(', ')

    function isSet() { if (selected != null) return true }
    function isSelect(date) { if (date == selected) return true }

    let calday = value.toString().slice('8', '10')
    let calmonthraw = value.getUTCMonth() + 1
    let calyear = value.getUTCFullYear()

    if (calday == '01') {
        calmonthraw++
        if (calmonthraw == 13) {
            calmonthraw = 1
        }
    }
    if (calmonthraw < 10) {
        calmonthraw = '0' + calmonthraw
    }

    const calmonth = calmonthraw

    function getCalDate(lang) {
        if (lang == 'de') {
            return (calday + '.' + calmonth + "." + calyear)
        }
        return (calyear + "-" + calmonth + "-" + calday)
    }

    function isBlocked(date) {
        for (var i = 0; i < blockingdays.length; i++) {
            if (blockingdays[i].replace('"', '') == date) {
                return true
            }
        }
    }

    async function doPost(e) {
        e.preventDefault();
        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field => {
            if (!field.name) return;
            formData[field.name] = field.value;
        })
        const finalappointment = new Date(getCalDate() + ' ' + selected + ':00')
        const finalappointmentde = getCalDate('de') + ', ' + selected + ' Uhr'

        formData['termin'] = finalappointmentde
        fetch('/api/terminmailhandler', {
            method: 'post',
            body: JSON.stringify(formData),
        })
        await axios.post("https://kraftquelle-felsenkeller-backend.onrender.com/api/termines", {
            data: {
                Vorname: formData.first_name,
                Nachname: formData.last_name,
                Teilnehmer: formData.teilnehmer,
                Email: formData.email,
                Telefon: formData.phone,
                DatumUndUhrzeit: finalappointment,
                Anmerkung: formData.textarea
            }
        });
        setBooked(true)
    }

    function isBooked(date) {
        let a = appointmentss
        let b = appointments

        for (var i = 0; i < a.length; i++) {
            let fixedAppointment = new Date(a[i].attributes.DatumUndUhrzeit)
            let fixedAppointmentDate = JSON.stringify(fixedAppointment).slice('1', '11')
            let fixedAppointmentTime = fixedAppointment.toString().slice('16', '21')

            if (getCalDate() == fixedAppointmentDate) {
                for (var j = 0; j < b.length; j++) {
                    if (date == fixedAppointmentTime) {
                        return true;
                    }
                }
            }
        }
    }

    return (
        <div className="flex flex-col items-center justify-center">
            {booked ? (
                <>
                    <div>
                        <div className="p-4 mb-8 rounded-lg bg-primary">
                            <div className="font-normal tracking-wide text-left text-md text-secondary">
                                <ReactMarkdown>
                                    {blockdays.attributes.TerminBestaetigungsText}
                                </ReactMarkdown>
                            </div>
                        </div>
                        <div className="p-4 rounded-lg bg-primary">
                            <h1 className="text-2xl font-bold text-left text-secondary">Zusammenfassung</h1>
                            <h2 className="mt-8 text-sm font-bold tracking-widest text-left uppercase text-secondary">Datum</h2>
                            <h2 className="text-md font-normal text-left text-secondary uppercase tracking-widest underline underline-offset-[6px]">{getCalDate('de')}</h2>
                            <h2 className="mt-8 text-sm font-bold tracking-widest text-left uppercase text-secondary">Uhrzeit</h2>
                            <h2 className="text-md font-normal text-left text-secondary uppercase tracking-widest underline underline-offset-[6px]">{selected} Uhr</h2>
                            <h2 className="mt-8 text-sm font-bold tracking-widest text-left uppercase text-secondary">Zahlung</h2>
                            <h2 className="mb-2 text-xs font-normal leading-5 tracking-widest text-left uppercase text-secondary">Die Zahlung erfolgt vor ort im Felsenkeller.</h2>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <h1 className="mb-4 text-2xl font-bold text-center text-primary">Datum</h1>
                    <div >
                        <Calendar
                            onChange={onChange}
                            onClickDay={() => setDate(null)}
                            value={value}
                            minDate={new Date()}
                            maxDate={maxdate}
                        />
                    </div>
                    {getCalDate() == JSON.stringify(new Date()).slice('1', '11') ? (
                        <>  
                            <div className="w-4/6 my-6 text-lg text-center transition duration-700 ease-in-out text-primary hover:-translate-y-1">
                                <div className="pointer-events-none">
                                    <h1 className="mb-2 text-7xl">!</h1>
                                    Ihr gewählter Termin muss minestens einen Tag in der Zukunft liegen.
                                </div>
                            </div>
                        </>
                    ) : (

                        <>
                            {isBlocked(getCalDate('de')) || appointments == 'null' ? (
                                <div className="my-6 text-lg text-center transition duration-700 ease-in-out text-primary hover:-translate-y-1">
                                    <div className="pointer-events-none">
                                        <h1 className="mb-2 text-7xl ">!</h1>
                                        <ReactMarkdown>
                                            {blockdays.attributes.BlockierterTerminText}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className='w-full mt-8 mb-4 h-[1px] bg-gray-300' />
                                    <h1 className="mb-4 text-2xl font-bold text-center text-primary">Uhrzeit</h1>
                                    <div className="grid justify-center grid-cols-3 gap-6 md:grid-cols-5">
                                        {appointments.map((appointment) => (
                                            <div
                                                key={appointment}
                                                className="inline-flex">
                                                <>
                                                    {isBooked(appointment.replace('"', '')) ? (
                                                        <button
                                                            className={`py-3 px-4 rounded-md text-secondary bg-gray-300`}
                                                            value={appointment.replace('"', '')}
                                                        >
                                                            <div>
                                                                {appointment.replace('"', '')}
                                                            </div>
                                                        </button>
                                                    ) : (
                                                        <Link
                                                            to='contactform'
                                                            href='#contactform'
                                                            spy={true}
                                                            smooth={true}
                                                            offset={-80}
                                                            duration={500}
                                                            delay={150}
                                                        >
                                                            <button
                                                                key={appointment}
                                                                className={`py-3 px-4 rounded-md transition ease-out hover:scale-110 text-secondary duration-300 ${isSelect(appointment.replace('"', '')) ? 'bg-gray-500 outline ring-primary ring-4' : 'bg-primary'}`}
                                                                onClick={() => setDate(appointment.replace('"', ''))}
                                                                value={appointment.replace('"', '')}
                                                            >
                                                                <div>
                                                                    {appointment.replace('"', '')}
                                                                </div>
                                                            </button>
                                                        </Link>
                                                    )}
                                                </>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </>
                    )}
                    {isSet() ?
                        (
                            <>
                                <div className='w-full my-8 h-[1px] bg-gray-300' />
                                <div className="text-left form__wrapper">
                                    <form className="grid grid-cols-1 gap-8 md:grid-cols-2" onSubmit={doPost} id="contactform">
                                        <div>
                                            <div className="relative z-0 w-full mb-7 group">
                                                <input type="text" name="first_name" id="first_name" className="block font-semibold py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer" placeholder=" " required />
                                                <label htmlFor="first_name" className="font-semibold absolute text-md text-primary duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Vorname</label>
                                            </div>
                                            <div className="relative z-0 w-full mb-7 group">
                                                <input type="text" name="last_name" id="last_name" className="block font-semibold py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer" placeholder=" " required />
                                                <label htmlFor="last_name" className="font-semibold absolute text-md text-primary duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Nachname</label>
                                            </div>
                                            <div className="relative z-0 w-full mb-7 group">
                                                <input type="tel" name="phone" id="phone" className="block font-semibold py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer" placeholder=" " required />
                                                <label htmlFor="phone" className="font-semibold absolute text-md text-primary duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Telefon</label>
                                            </div>
                                            <div className="relative z-0 w-full mb-7 group">
                                                <input type="email" name="email" id="email" className="block font-semibold py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer" placeholder=" " required />
                                                <label htmlFor="email" className="font-semibold absolute text-md text-primary duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Email</label>
                                            </div>
                                            <div className="relative z-0 w-full mb-7 group">
                                                <select onChange={(e) => setAmount(e.currentTarget.value)} type="teilnehmer" name="teilnehmer" id="teilnehmer" className="block font-semibold py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer" placeholder=" " required>
                                                    <option className="text-primary" value="1">1</option>
                                                    <option className="text-primary" value="2">2</option>
                                                    <option className="text-primary" value="3">3</option>
                                                    <option className="text-primary" value="4">4</option>
                                                </select>
                                                <label htmlFor="teilnehmer" className="font-semibold absolute text-md text-primary duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Teilnehmer (15€ p. P.)</label>
                                            </div>
                                            <div className="relative z-0 w-full mb-7 group">
                                                <textarea name="textarea" id="textarea" rows="3" className="block font-semibold py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-gray-500 peer" placeholder=" "></textarea>
                                                <label htmlFor="textarea" className="font-semibold absolute text-md text-primary duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Sonstige Bemerkung</label>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="p-4 rounded-lg bg-primary">
                                                <h1 className="text-2xl font-bold text-left text-secondary">Zusammenfassung</h1>
                                                <h2 className="mt-8 text-sm font-bold tracking-widest text-left uppercase text-secondary">Datum & Uhrzeit</h2>
                                                <h2 className="text-md font-normal text-left text-secondary uppercase tracking-widest underline underline-offset-[6px]">{getCalDate('de')}</h2>
                                                <h2 className="mt-8 text-sm font-bold tracking-widest text-left uppercase text-secondary">Uhrzeit</h2>
                                                <h2 className="text-md font-normal text-left text-secondary uppercase tracking-widest underline underline-offset-[6px]">{selected} Uhr</h2>
                                                
                                                <h2 className="mt-8 text-sm font-bold tracking-widest text-left uppercase text-secondary">Kosten</h2>
                                                <p className="text-md font-normal text-left text-secondary tracking-widest underline underline-offset-[6px] inline-flex">{15 * teilnehmer}€</p>
                                                <h2 className="relative pl-5 mt-2 text-xs font-normal leading-5 tracking-widest text-left uppercase text-secondary"><span className="font-black text-4xl mr-1 absolute -top-[2px] left-0">!</span>Die Zahlung erfolgt vor ort im Felsenkeller.</h2>
                                                <div className="flex items-center mt-8">
                                                    <p className="text-xs font-normal leading-5 tracking-widest text-left uppercase text-secondary">Mit dem Bestätigen des Knopfes &quot;Reservieren&quot; erlauben Sie uns gemäß unseren <NextLink href="/datenschutz"><a rel="noreferrer" className="underline hover:text-gray-500 underline-offset-4">Datenschutzrichtlinien</a></NextLink> die Verarbeitung ihrer Daten.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="justify-center md:col-span-2 justify-self-center">
                                            <button type="submit" className="w-full px-5 py-2 font-medium tracking-widest text-center text-white rounded-lg bg-primary hover:bg-secondary hover:ring-primary hover:ring-2 hover:text-primary hover:font-bold focus:ring-primary focus:ring-4 focus:outline-none text-md sm:w-auto">RESERVIEREN</button>
                                        </div>
                                    </form>
                                    <div className='hidden text-lg font-bold text-center text-primary' id="contactform-success">
                                        Wir bedanken uns für Ihre Reservierung! <br />Sie erhalten alle Details zur Reservierung per E-Mail.
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div id="contactform"></div>
                        )}
                </>
            )}
        </div>
    )
}