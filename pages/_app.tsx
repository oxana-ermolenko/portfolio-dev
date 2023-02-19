import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { NextPageWithLayout } from "./page";

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page);
  return <ThemeProvider attribute="class">{getLayout(<Component {...pageProps} />)}</ThemeProvider>;
}
