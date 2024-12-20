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
  }
}

export default themeConfig;
