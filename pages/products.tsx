import Layout from "@/components/Layout";
import {
  addDefaultDbDatas,
  addToCart,
  updateCartAmount,
} from "@/components/utils";
import { ReactNode, useEffect, useState } from "react";
import { message } from "antd";
import store from "store";

interface PlantsData {
  name: string;
  price: number;
  id: number;
  imgUrl: string;
}

export default function Products() {
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
    <section className="flex max-w-screen-2xl mx-auto gap-10 mb-16">
      <div className="border px-12 border-primary bg-secondary max-w-xs">
        <h2 className="text-2xl text-primary my-2">Products</h2>
        <div className="mt-8">
          <div className="text-xl whitespace-nowrap cursor-pointer mt-2 hover:text-primary transition-all duration-300">New Arrivals</div>
          <div className="text-xl whitespace-nowrap cursor-pointer mt-2 hover:text-primary transition-all duration-300">Nursery plants</div>
          <div className="text-xl whitespace-nowrap cursor-pointer mt-2 hover:text-primary transition-all duration-300">Garden Essentials</div>
          <div className="text-xl whitespace-nowrap cursor-pointer mt-2 hover:text-primary transition-all duration-300">Indoor Plants</div>
          <div className="text-xl whitespace-nowrap cursor-pointer mt-2 hover:text-primary transition-all duration-300">Outdoor Plants</div>
          <div className="text-xl whitespace-nowrap cursor-pointer mt-2 hover:text-primary transition-all duration-300">Chemical</div>
          <div className="text-xl whitespace-nowrap cursor-pointer mt-2 hover:text-primary transition-all duration-300">Trees</div>
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-3xl text-primary my-2">Products</h2>
        <main className="flex gap-6 flex-wrap">
          {plantsData.map((data, index) => {
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
      </div>
    </section>
  );
}

Products.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};
