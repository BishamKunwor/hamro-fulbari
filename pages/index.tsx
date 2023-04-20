import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hamro Fulbari</title>
      </Head>
      <main className="bg-accent">
        <section className="max-w-screen-2xl mx-auto py-10 space-y-4">
          <h1 className="text-4xl text-center text-primary">
            Create an Account
          </h1>
          <div className="border-primary p-5 border mx-auto w-[600px] bg-secondary">
            <h2 className="text-2xl">Personal Information</h2>
            <form action="">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold text-black/60">
                    FIRST NAME
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold text-black/60">
                    LAST NAME
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold text-black/60">
                    E-MAIL
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold text-black/60">
                    PASSWORD
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="mt-4">
                <button className="btn btn-primary">Button</button>
                <button className="btn btn-primary">Button</button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
