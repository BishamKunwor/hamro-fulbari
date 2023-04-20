import Head from "next/head";
import RegisterAccount from "./register";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hamro Fulbari</title>
      </Head>
      <main className="bg-accent">
        <RegisterAccount />
      </main>
    </>
  );
}
