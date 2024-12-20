import localFont from 'next/font/local'

export const chirp = localFont({
  src: [
    {
      path: './../../../public/fonts/chirp/Chirp-Heavy.woff2',
      weight: '800'
    },
    {
      path: './../../../public/fonts/chirp/Chirp-Bold.woff2',
      weight: '700'
    },
    {
      path: './../../../public/fonts/chirp/Chirp-Regular.woff2',
      weight: '400'
    }
  ],
  variable: '--font-chirp'
})
