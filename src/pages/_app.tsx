import { Footer } from "@/Layout/Footer";
import { Navbar } from "@/Layout/Navbar";
import "@/styles/globals.css";
import type AppProps from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
