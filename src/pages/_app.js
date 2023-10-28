import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
    });
  }, []);
  
  return(
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
