import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import "tw-elements/dist/css/tw-elements.min.css";

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   const use = async () => {
  //     (await import("tw-elements")).default;
  //   };
  //   use();
  // }, []);
  return <Component {...pageProps} />;
}
