import '../../styles/styles.scss'
import type { AppProps } from 'next/app'
import { TwitterEditorProvider } from 'context/TwitterEditorInfo'
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';


export default function App({ Component, pageProps }: AppProps) {
    return (
        <TwitterEditorProvider>
            <Script id="googleURL" async strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
               {/* <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} /> */}

                <Script id="googleScript" strategy="lazyOnload">
                    {`
                         window.dataLayer = window.dataLayer || [];
                         function gtag(){dataLayer.push(arguments);}
                         gtag('js', new Date());
                       
                         gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                    `}
                </Script>
            <Component {...pageProps} />
            <Analytics />
        </TwitterEditorProvider>
    )
}
