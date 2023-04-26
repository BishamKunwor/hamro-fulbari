import Layout from "@/components/Layout";
import {
  addDefaultDbDatas,
  addToCart,
  updateCartAmount,
} from "@/components/utils";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { PlantsData } from ".";
import { message } from "antd";
import store from "store";

export default function ProductDetails() {
  const router = useRouter();
  useEffect(() => {
    if (Object.keys(router.query).length === 0) {
      return;
    }
    fetchPlantsData();
    if (store.get("isLoggedIn")) {
      setIsLoggedIn(true);
    }
    addDefaultDbDatas();
  }, [router.query.id]);

  const fetchPlantsData = async () => {
    try {
      let response: any = await fetch("/data.json");
      response = await response.json();
      setPlantsData(response);
      for (let data of response) {
        if (data.id === parseInt(router.query.id as string)) {
          console.log("runned");
          setActiveDetails(data);
          return;
        }
      }
    } catch (error) {
      console.log("Fetch Error: ", error);
    }
  };

  const [plantsData, setPlantsData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeDetails, setActiveDetails] = useState<any>({});

  const handleAdd = (data: PlantsData) => {
    addToCart(data);
  };

  return (
    <>
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
      {activeDetails && (
        <section className="mx-auto max-w-screen-2xl my-10 px-6 md:px-0">
          <div className="flex gap-16 flex-wrap md:flex-nowrap">
            <img
              src={activeDetails.imgUrl}
              className="border border-primary aspect-square w-full"
              alt=""
            />
            <div className="w-full">
              <h2 className="text-3xl text-primary">{activeDetails.name}</h2>
              <h3 className="text-2xl text-primary mt-4">
                Rs. {activeDetails.price}
              </h3>
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    handleAdd(activeDetails);
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
              <h3 className="text-2xl text-primary mt-8 pb-4">DESCRIPTION</h3>
              <div className="space-y-6">
                <p className="text-xl">
                  Foxtail asparagus ferns are uncommon, beautiful, evergreen
                  flowering plants that can be used in a variety of ways both
                  inside and outside the home. Asparagus ferns with a foxtail
                  have an odd, symmetrical appearance. These fern-like plants
                  feature arching plumes of delicate-looking, closely packed
                  leaves that resemble needles.
                </p>
                <p className="text-xl">
                  Sunlight: Indoor indirect bright light
                </p>
                <p className="text-xl">
                  Potting Mix: Cocopeat, Soil, Compost manure
                </p>
                <p className="text-xl">
                  Watering: Water when the top 2 inches of soil feels dry to
                  touch
                </p>
                <p className="text-xl">
                  Fertilizer: During the main growing season feeds the plant
                  with organic fertilizer once a month.
                </p>
                <p className="text-xl">
                  Re-potting: When a plant outgrows in the current pot, re-pot
                  in 2 inches greater than the existing pot with fresh potting
                  soil and some fertilizer.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-3xl text-primary">RELATED PLANTS</h2>
            <div className="flex gap-16 my-10 flex-wrap justify-center md:flex-nowrap md:justify-start">
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
            </div>
          </div>
        </section>
      )}
    </>
  );
}

ProductDetails.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};
