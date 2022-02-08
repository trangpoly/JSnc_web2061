module.exports = {
    content: ["*.html", "./src/**/*.{html,js}"],

    theme: {
        extend: {
            keyframes: {
                doiMau: {
                    "0%,100%": { color: "red" },
                    "50%": { color: "blue" },
                },
            },
            animation: {
                wiggle: "wiggle 2s ease-in-out infinite",
            },
            colors: {
                green: "#008000",
            },
        },
    },
    plugins: [],

};
