import Layout from "@/components/Layout";
import {
  addDefaultDbDatas,
  addToCart,
  getCartData,
  getTotalAmount,
  removeCartItem,
} from "@/components/utils";
import { ReactNode, useEffect, useState } from "react";
import { PlantsData } from ".";

export default function Cart() {
  useEffect(() => {
    addDefaultDbDatas();
    setCartData(getCartData());
    setCartTotal(getTotalAmount());
  }, []);

  const [cartData, setCartData] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const handleAdd = (data: PlantsData) => {
    addToCart(data);
    setCartData(getCartData());
    setCartTotal(getTotalAmount());
  };
  const handleRemove = (data: PlantsData) => {
    addToCart(data, "remove");
    setCartData(getCartData());
    setCartTotal(getTotalAmount());
  };

  const handleItemRemove = (data: any) => {
    removeCartItem(data);
    setCartData(getCartData());
    setCartTotal(getTotalAmount());
  };

  return (
    <section className="flex max-w-screen-2xl mx-auto gap-10 px-6 md:px-0">
      <div className="w-full">
        <h2 className="text-3xl text-primary my-2">Products</h2>
        <main className="">
          <section className="border border-primary bg-secondary">
            <div className="grid grid-cols-4 md:grid-cols-6 px-2 md:px-12 border-b border-primary py-6">
              <div className="hidden md:flex"></div>
              <div className="text-xl">Product</div>
              <div className="text-xl">Price</div>
              <div className="text-xl">Quantity</div>
              <div className="text-xl">Sub Total</div>
              <div className="text-xl"></div>
            </div>
            {cartData.map((data: any, index) => {
              return (
                <div
                  key={index}
                  className="grid grid-cols-4 md:grid-cols-6 md:px-12 px-2 border-b border-primary py-6 items-center"
                >
                  <img
                    className="aspect-square hidden md:flex border border-primary w-24"
                    src={data.imgUrl}
                    alt=""
                  />
                  <div className="">{data.name}</div>
                  <div className="">Rs {data.price}</div>
                  <div className="flex items-center">
                    <svg
                      onClick={() => {
                        handleRemove(data);
                      }}
                      className="cursor-pointer"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="28" height="28" fill="white" />
                      <path
                        d="M9.33398 14H18.6673"
                        stroke="black"
                        stroke-width="2"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div className="w-10 aspect-square flex items-center justify-center font-bold select-none">
                      {data.quantity}
                    </div>
                    <svg
                      onClick={() => {
                        handleAdd(data);
                      }}
                      className="cursor-pointer"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="28" height="28" fill="white" />
                      <path
                        d="M14 9.33334V18.6667"
                        stroke="black"
                        stroke-width="2"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.33398 14H18.6673"
                        stroke="black"
                        stroke-width="2"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="">Rs {data.price * data.quantity}</div>
                  <svg
                    onClick={() => {
                      handleItemRemove(data);
                    }}
                    className="cursor-pointer hidden md:flex"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 10H8.33333H35"
                      stroke="black"
                      stroke-width="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M31.6673 10V33.3333C31.6673 34.2174 31.3161 35.0652 30.691 35.6904C30.0659 36.3155 29.218 36.6667 28.334 36.6667H11.6673C10.7833 36.6667 9.93542 36.3155 9.31029 35.6904C8.68517 35.0652 8.33398 34.2174 8.33398 33.3333V10M13.334 10V6.66667C13.334 5.78261 13.6852 4.93477 14.3103 4.30965C14.9354 3.68453 15.7833 3.33334 16.6673 3.33334H23.334C24.218 3.33334 25.0659 3.68453 25.691 4.30965C26.3161 4.93477 26.6673 5.78261 26.6673 6.66667V10"
                      stroke="black"
                      stroke-width="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.666 18.3333V28.3333"
                      stroke="black"
                      stroke-width="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M23.334 18.3333V28.3333"
                      stroke="black"
                      stroke-width="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              );
            })}

            <div className="px-2 md:px-12 py-6">
              <div className="flex items-center gap-8">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="input w-full max-w-xs"
                />
                <button className="btn btn-primary px-10 bg-primary border-primary hover:bg-primary/80 hover:border-primary/80">
                  APPLY
                </button>
              </div>
            </div>
          </section>
          <section className="flex justify-end my-8">
            <div className="border border-primary w-[500px] bg-secondary p-3">
              <div className="text-2xl text-primary">Cart Totals</div>
              <div className="grid grid-cols-2 gap-4 divide-x divide-primary border-y border-primary">
                <div className="p-2">Subtotal</div>
                <div className="p-2">Rs. {cartTotal}</div>
              </div>
              <div className="grid grid-cols-2 gap-4 divide-x divide-primary border-b border-primary">
                <div className="p-2">Total</div>
                <div className="p-2">Rs. {cartTotal}</div>
              </div>
              <button className="btn btn-primary w-full mt-4 bg-primary border-primary hover:bg-primary/80 hover:border-primary/80">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </section>
        </main>
      </div>
    </section>
  );
}

Cart.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};
