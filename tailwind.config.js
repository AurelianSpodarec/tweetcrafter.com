/** @type {import('tailwindcss').Config} */ 

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
      "./src/components/**/*.{js,ts,jsx,tsx}", 
      "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        textColor: {
          skin: {
            base: withOpacity('--color-text-base'),
            muted: '',
            inverted: '',
          }
        },
        backgroundColor: {
          skin: {
            base: withOpacity('--color-bg-base'),
          }
        }
      },
  },
  // plugins: [require("@tailwindcss/typography"),],
};







// function withOpacity(variableName) {
//   return ({ opacityValue }) => {
//     if (opacityValue !== undefined) {
//       return `rgba(var(${variableName}), ${opacityValue})`
//     }
//     return `rgb(var(${variableName}))`
//   }
// }

// module.exports = {
//   theme: {
//     extend: {
//       textColor: {
//         skin: {
//           base: withOpacity('--color-text-base'),
//           muted: withOpacity('--color-text-muted'),
//           inverted: withOpacity('--color-text-inverted'),
//         },
//       },
//       backgroundColor: {
//         skin: {
//           fill: withOpacity('--color-fill'),
//           'button-accent': withOpacity('--color-button-accent'),
//           'button-accent-hover': withOpacity('--color-button-accent-hover'),
//           'button-muted': withOpacity('--color-button-muted'),
//         },
//       },
//       gradientColorStops: {
//         skin: {
//           hue: withOpacity('--color-fill'),
//         },
//       },
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }
