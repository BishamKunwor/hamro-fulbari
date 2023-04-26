import Layout from "@/components/Layout";
import { addDefaultDbDatas } from "@/components/utils";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useRef } from "react";

export default function Login() {
  useEffect(() => {
    if (Object.keys(router.query).length === 0) {
      return;
    }
    if (router.query.failed) {
      errorPopup.current?.classList.remove("-top-20");
      errorPopup.current?.classList.add("top-10");
      setTimeout(() => {
        errorPopup.current?.classList.add("-top-20");
        errorPopup.current?.classList.remove("top-10");
      }, 1500);
    }
  });
  useEffect(() => {
    addDefaultDbDatas();
  }, []);
  const router = useRouter();
  const errorPopup = useRef<HTMLDivElement>(null);

  return (
    <section className="max-w-screen-2xl mx-auto py-16 space-y-4 px-6 md:px-0">
      <div
        ref={errorPopup}
        className={`absolute left-0 -top-20 w-full transition-all duration-300`}
      >
        <div className="alert alert-error shadow-lg max-w-screen-sm mx-auto">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! Incorrect Credentials.</span>
          </div>
        </div>
      </div>
      <h1 className="text-4xl text-center text-primary capitalize">
        Already register ?
      </h1>
      <main className="flex flex-col md:flex-row justify-center items-stretch gap-12">
        <div className="border-primary p-5 border md:w-[600px] bg-secondary">
          <h2 className="text-2xl uppercase">LOGIN</h2>
          <h3 className="font-medium mt-4">
            By creating an account with our store, you will be able to move
            through the checkout process faster, store multiple shipping
            addresses, view and track your orders in your account and more.
          </h3>
          <div className="mt-8">
            <a className="" href="/register">
              <button className="btn btn-primary bg-primary w-44 hover:bg-primary/80 border-primary hover:border-primary">
                CREATE AN ACCOUNT
              </button>
            </a>
          </div>
        </div>
        <div className="border-primary p-5 border md:w-[600px] bg-secondary">
          <h2 className="text-2xl uppercase">LOGIN</h2>
          <h3 className="font-medium mt-4">
            If you have an account with us, please login here:
          </h3>
          <form action="/successful-login" className="w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold text-black/60">
                  E-MAIL
                </span>
              </label>
              <input
                name="email"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold text-black/60">
                  PASSWORD
                </span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>

            <div className="mt-4 flex justify-between">
              <button className="btn btn-primary bg-primary hover:bg-primary/80 border-primary hover:border-primary">
                login
              </button>
            </div>
            <div className="text-end link link-hover">Forgot Password ?</div>
          </form>
        </div>
      </main>
    </section>
  );
}

Login.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};
