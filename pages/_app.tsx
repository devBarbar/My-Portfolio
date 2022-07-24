import type { AppProps } from "next/app";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import "../styles/globals.css";
const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {},
  },
});

const darkTheme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    space: {},
    fonts: {},
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
