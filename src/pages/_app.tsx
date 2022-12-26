import '../../styles/styles.scss'
import type { AppProps } from 'next/app'
import { TwitterEditorProvider } from '../context/TwitterEditorInfo'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <TwitterEditorProvider>
            <Component {...pageProps} />
            <Analytics />
        </TwitterEditorProvider>
    )
}
