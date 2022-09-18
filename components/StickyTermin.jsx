import { useEffect, useState } from "react";
import NextLink from "next/link";

export default function StickyTermin() {

    const [active, setActive] = useState(false)

    const activateStickyButton = () => {
        if(window.scrollY >= 50)
            setActive(true)
        
    }

    useEffect(() => {
        window.addEventListener('scroll', activateStickyButton)
    }, []);

    
    if(active) return (
        <NextLink href="/termine">
            <a>
                <div className="fixed flex animate-slideup sm:right-8 bottom-0 w-full sm:w-auto sm:bottom-8 py-5 sm:py-3 px-4 bg-primary z-50 sm>rounded-md justify-center sm:animate-fastfade transition ease-in-out hover:scale-105 sm:hover:bg-opacity-95 duration-500">
                    <img src="./cal-w.svg" className=" w-5 mr-2 animate-wiggle" alt="" /><div className="text-secondary text-lg font-bold tracking-wider">Termin sichern</div>
                </div>
            </a>
        </NextLink>
    )
}