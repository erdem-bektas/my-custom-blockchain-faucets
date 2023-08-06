import { Footer } from "@/Layout/Footer";
import { Navbar } from "@/Layout/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className=" ">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
