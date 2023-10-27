import AboutUs from "@/components/AboutUs";
import Layout from "@/components/Layout";
import Review from "@/components/Review";
import WhyUs from "@/components/WhyUs";
import {
  addDefaultDbDatas,
  addToCart,
  updateCartAmount,
} from "@/components/utils";
import { message } from "antd";
import Head from "next/head";
import { ReactNode, useEffect, useState } from "react";
import store from "store";

export interface PlantsData {
  name: string;
  price: number;
  id: number;
  imgUrl: string;
}

export default function Home() {
  useEffect(() => {
    fetchPlantsData();
    if (store.get("isLoggedIn")) {
      setIsLoggedIn(true);
    }
    addDefaultDbDatas();
  }, []);
  const fetchPlantsData = async () => {
    try {
      let response: any = await fetch("/data.json");
      response = await response.json();
      setPlantsData(response);
    } catch (error) {
      console.log("Fetch Error: ", error);
    }
  };

  const [plantsData, setPlantsData] = useState<PlantsData[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAdd = (data: PlantsData) => {
    addToCart(data);
  };

  return (
    <>
      <Head>
        <title>Hamro Fulbari</title>
      </Head>
      <main className="bg-accent">
        <section>
          <div className="max-w-screen-2xl mx-auto h-[530px] my-6 relative">
            <img
              src="/hero-image.png"
              alt=""
              className="w-full h-full object-center absolute object-cover"
            />
            <div className="relative text-white md:p-10 p-4 flex flex-col gap-8">
              <h1 className="text-7xl font-bold">Welcome to Hamro Fulbari</h1>
              <label className="text-3xl">
                It’s time to grow your
                <br /> dreams
              </label>
              <a href="/products">
                <button className="btn inline-block btn-primary w-40 bg-primary border-primary hover:bg-primary/80 hover:border-primary/80 mt-8">
                  Shop Now
                </button>
              </a>
            </div>
          </div>
          {/* <label htmlFor="my-modal-4" className="btn">
            open modal
          </label> */}
          <section id="login-register-prompt-modal">
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
              <label className="modal-box relative" htmlFor="">
                <h3 className="text-lg font-bold">Please Login to Continue.</h3>
                <div className="flex justify-between">
                  <a href="/register">
                    <button className="btn inline-block btn-primary w-40 bg-primary border-primary hover:bg-primary/80 hover:border-primary/80 mt-8">
                      Register
                    </button>
                  </a>
                  <a href="/login">
                    <button className="btn inline-block btn-primary w-40 bg-primary border-primary hover:bg-primary/80 hover:border-primary/80 mt-8">
                      Login
                    </button>
                  </a>
                </div>
              </label>
            </label>
          </section>
        </section>
        <section className="mx-auto max-w-screen-2xl pt-10">
          <h2 className="text-3xl text-primary text-center my-2">
            New Arrivals plants
          </h2>
          <main className="mt-8 gap-6 flex justify-center md:justify-between flex-wrap">
            {plantsData.map((data, index) => {
              if (index > 4) {
                return;
              }
              return (
                <div
                  key={index}
                  className="card gap-6 w-60 py-4 px-8 items-start border border-primary bg-base-100 hover:shadow-xl rounded-none bg-transparent transition-all duration-300 cursor-pointer"
                >
                  <figure>
                    <img
                      className="h-44 border-primary"
                      src={data.imgUrl}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body p-0">
                    <h2 className="card-title">{data.name}</h2>
                    <p>Rs. {data.price}</p>
                    <div className="card-actions justify-start">
                      {isLoggedIn ? (
                        <button
                          onClick={() => {
                            handleAdd(data);
                            updateCartAmount();
                            message.success("Successfully Added Element.");
                          }}
                          className="btn btn-primary w-40 bg-primary border-primary hover:bg-primary/80 hover:border-primary/80"
                        >
                          Add to Cart
                        </button>
                      ) : (
                        <label
                          htmlFor="my-modal-4"
                          className="btn w-40 bg-primary border-primary hover:bg-primary/80 hover:border-primary/80"
                        >
                          Add to Cart
                        </label>
                      )}
                      <a href={`/details?id=${data.id}`} className="btn w-40">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </main>
          <div className="flex mt-16 justify-center my-8">
            <a href="/products">
              <button className="btn btn-outline w-40 border-primary hover:bg-primary/80 text-primary hover:border-primary/80">
                SHOW ALL
              </button>
            </a>
          </div>
        </section>
        <section className="mx-auto max-w-screen-2xl py-10 px-6">
          <h2 className="text-3xl text-primary text-center my-2">
            Products Categories
          </h2>
          <main className="flex place-content-center flex-wrap gap-12 pt-12">
            {Array.from({ length: 5 }).map((data, index) => {
              return (
                <div key={index} className="max-w-md space-y-4">
                  <p className="font-medium text-2xl text-primary">
                    Nursery Plants
                  </p>
                  <div className="flex font-medium">
                    <p>
                      Provides a broad range of natural accessories and plants
                      in Kathmandu. Our assortment of a aquatic plants, and
                      aromatic plants is the largest.
                    </p>
                    <img src="/certificate.png" alt="" />
                  </div>
                  <button className="btn btn-primary w-40 bg-primary border-primary hover:bg-primary/80 hover:border-primary/80">
                    View
                  </button>
                </div>
              );
            })}
          </main>
        </section>
        <WhyUs />
        <AboutUs />
        <section className="mx-auto max-w-screen-2xl">
          <main className="flex gap-16 flex-wrap md:flex-nowrap px-6 md:px-0">
            <img src="/bordOfDirector.jpeg" alt="" />
            <section>
              <h2 className="text-3xl text-primary text-center my-2">
                Message From Director
              </h2>
              <p className="font-medium text-lg">
                Choosing the right decision while thinking of plants, garden
                designing and decoration is very important because there is a
                saying that: We may think we are nurturing our garden. But of
                course, it's our garden that is really nurturing us. We as Hamro
                Fulbari have already been serving the more than 1000 clients
                within 9+ years of journey which started in 2069 BS. We have our
                area expanded in 10 ropani in Gongabu, Kathmandu, Nepal to meet
                the every needs and requirements of our clients.
              </p>
              <p className="font-medium text-lg mt-6">
                Our team of professional designers, will construct a outdoor,
                indoor, office and garden design that suits your personality and
                property, whether it's traditional, cottage, minimalist, or
                contemporary and will always make sure to respect your concepts
                and design you have in your thoughts. We are also expert at
                restoring and renewing gardens and trouble locations.
              </p>
            </section>
          </main>
        </section>
        <Review />
        <section id="contact-us" className="mx-auto max-w-screen-2xl py-10">
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

Home.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};
