import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" data-theme="light">
      <Head />
      <body className="bg-accent">
        <Main />
        <NextScript />
        <style id="cart-update-style"></style>
      </body>
    </Html>
  );
}
