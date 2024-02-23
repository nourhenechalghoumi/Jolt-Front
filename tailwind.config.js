/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutrals: "#fff",
        p: "#515def",
        darkslategray: {
          "100": "rgba(49, 49, 49, 0.75)",
          "200": "rgba(49, 49, 49, 0.5)",
          "300": "rgba(49, 49, 49, 0.25)",
        },
        whitesmoke: "#f3f3f3",
        lightcoral: "#ff8682",
        t: "#313131",
        gray: {
          "100": "#79747e",
          "200": "#1c1b1f",
        },
        "main-clor": "#1164b1",
        snow: "#fdf5f5",
        mediumaquamarine: "#8dd3bb",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "montserrat-regular-14": "Montserrat",
        inter: "Inter",
        "port-lligat-slab": "'Port Lligat Slab'",
      },
      borderRadius: {
        "4xs": "9px",
        "8xs": "5px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
