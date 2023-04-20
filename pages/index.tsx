import WhyUs from "@/components/WhyUs";
import Head from "next/head";
// import RegisterAccount from "./register";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hamro Fulbari</title>
      </Head>
      <main className="bg-accent">
        <section>
          <div className="max-w-screen-2xl mx-auto h-[530px] my-10 relative">
            <img
              src="/hero-image.png"
              alt=""
              className="w-full h-full object-center absolute object-cover"
            />
            <div className="relative text-white p-10 flex flex-col gap-8">
              <h1 className="text-7xl font-bold">Welcome to Hamro Fulbari</h1>
              <label className="text-3xl">
                It’s time to grow your
                <br /> dreams
              </label>
              <button className="btn btn-primary w-40 bg-primary border-primary hover:bg-primary/80 hover:border-primary/80 mt-8">
                Shop Now
              </button>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-screen-2xl pt-10">
          <h2 className="text-3xl text-primary text-center my-2">
            New Arrivals plants
          </h2>
          <main className="mt-8 flex justify-between flex-wrap">
            <div className="card w-96 bg-base-100 hover:shadow-xl rounded-none bg-transparent transition-all duration-300 cursor-pointer">
              <figure>
                <img className="h-96" src="/plant-1.png" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-start">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 hover:shadow-xl rounded-none bg-transparent transition-all duration-300 cursor-pointer">
              <figure>
                <img className="h-96" src="/plant-1.png" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-start">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 hover:shadow-xl rounded-none bg-transparent transition-all duration-300 cursor-pointer">
              <figure>
                <img className="h-96" src="/plant-1.png" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-start">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </main>
        </section>
        <section className="mx-auto max-w-screen-2xl py-10">
          <h2 className="text-3xl text-primary text-center my-2">
            Products Categories
          </h2>
        </section>
        <WhyUs />
        <section className="mx-auto max-w-screen-2xl py-10">
          <h2 className="text-3xl text-primary text-center my-2">
            TESTOMONIALS
          </h2>
        </section>
        <section className="mx-auto max-w-screen-2xl py-10">
          <h2 className="text-3xl text-primary text-center my-2">Contact us</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3794981426195!2d85.33222171506202!3d27.70556678279272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199ffe9d7c6b%3A0x91b3a969f305a0bc!2sMaitidevi%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1681988052802!5m2!1sen!2snp"
            className="w-full mt-10"
            height="500"
            // style="border:0;"
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>
    </>
  );
}
