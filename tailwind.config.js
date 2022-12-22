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
            accent: withOpacity('--color-accent'),
            base: withOpacity('--color-text-base'),
            leading: withOpacity('--color-text-leading'),
            muted: withOpacity('--color-text-muted'),
            inverted: '',
          }
        },
        backgroundColor: {
          skin: {
            accent: withOpacity('--color-accent'),
            base: withOpacity('--color-bg-base'),
          }
        }
      },
  },
  // plugins: [require("@tailwindcss/typography"),],
};