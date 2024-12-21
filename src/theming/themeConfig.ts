const themeConfig = {
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        chirp: 'var(--font-chirp)'
      },
      colors: {
        primary: {
          DEFAULT: 'var(--primary)'
        },
        secondary: {
          DEFAULT: 'var(--secondary)'
        },

        // Twitter
        // ===================================================
        twitter: {
          blue: "#1d9bf0",
          yellow: "#ffd400",
          pink: "#f91880",
          purple: "#7856ff",
          orange: "#ff7a00",
          green: "#00ba7c",
          primary: {
            DEFAULT: 'var(--twitter-primary)'
          },
          card: {
            DEFAULT: 'var(--twitter-card)'
          }
        }
      },
      // border: {
      //   DEFAULT: 'var(--border-default)'
      // }
    }
  },
  safelist: [
    'bg-twitter-blue',
    'bg-twitter-yellow',
    'bg-twitter-pink',
    'bg-twitter-purple',
    'bg-twitter-orange',
    'bg-twitter-green',
  ]
}

export default themeConfig;
