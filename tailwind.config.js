module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                inter: ["'Inter'", "sans-serif"],
            },
            colors: {
                blue: {
                    DEFAULT: "#2D81FF",
                },
            },
        },
    },
    variants: {
        extend: {
            scale: ["hover"],
        },
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
