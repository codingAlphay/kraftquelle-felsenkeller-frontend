import '../styles/globals.css'
import '../styles/fonts.css'
import '../styles/navbar.css'
import '../styles/logo.css'

import { useEffect } from "react";
import Head from 'next/head'
import Script from 'next/script'
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 150,
      duration: 700,
    });
  }, []);


  return (
    <>
      <Head>
        <meta name="description" content="Atmen Sie wieder auf und schöpfen Energie in der Kraftquelle. 
                                            Die Kraftquelle von Felsenkeller ist Ihr Begleiter für Lungenprobleme." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
