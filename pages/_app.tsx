import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import {
  faBars,
  faTimes,
  faPhone,
  faMapMarkerAlt,
  faSyncAlt,
  faSortAmountDown,
} from "@fortawesome/free-solid-svg-icons";
// import "../styles/globals.css";

import type { AppProps } from "next/app";

const { library } = require("@fortawesome/fontawesome-svg-core");

// Import FA Icons
library.add(
  faBars,
  faPhone,
  faTimes,
  faMapMarkerAlt,
  faSyncAlt,
  faSortAmountDown
);

const font = `"Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
"Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
"Helvetica Neue", sans-serif`;

const theme = extendTheme({
  breakpoints: {
    sm: "650px",
    md: "850px",
    lg: "1150px",
    xl: "1350px",
  },
  fonts: {
    body: font,
    heading: font,
  },
  colors: {
    brand: {
      black: "#222",
      darkGray: "#333",
      gray: "#575757",
      lightGray: "#eee",
      white: "#fff",
      blue: "#27F",
      lightBlue: "#F5F9FD",
      yellow: "#FFE600",
      lightYellow: "#FFF5CB",
    },
  },
  fontSizes: {
    0: "2em",
    1: "1.75em",
    2: "1.5em",
    3: "1.25em",
    4: "1.1em",
    5: "1em",
    6: ".9em",
    7: ".8em",
  },
  fontWeights: {
    normal: 400,
    semibold: 600,
    bold: 700,
  },
  space: {
    0: "0",
    1: ".25rem",
    2: ".5rem",
    3: ".75rem",
    4: "1rem",
    5: "1.5rem",
    6: "2rem",
    7: "3rem",
    8: "5rem",
    9: "8rem",
    10: "11rem",
  },
  shadows: ["0 2px 10px rgba(0,0,0,0.4)"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
