import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" data-theme="light">
      <Head />
      <body className="bg-accent">
        {/* <NavBar /> */}
        <Main />
        <NextScript />
        {/* <Footer /> */}
      </body>
    </Html>
  );
}
