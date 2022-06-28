/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                surface: {
                    prim: "#09090a",
                    sec: "#121214",
                },
                gray4: "#323238",
                gray5: "#e1e1e6",
                gray6: "#c4c4cc",
                muted: "#8d8d99",
            },
            width: {
                45: "45%",
            },
        },
    },
    plugins: [],
}
