export default function RegisterAccount() {
  return (
    <section className="max-w-screen-2xl mx-auto py-16 space-y-4">
      <h1 className="text-4xl text-center text-primary capitalize">
        Already register ?
      </h1>
      <main className="flex flex-col md:flex-row justify-center items-stretch gap-12">
        <div className="border-primary p-5 border w-[600px] bg-secondary">
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
        <div className="border-primary p-5 border w-[600px] bg-secondary">
          <h2 className="text-2xl uppercase">LOGIN</h2>
          <h3 className="font-medium mt-4">
            If you have an account with us, please login here:
          </h3>
          <form action="" className="w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold text-black/60">
                  E-MAIL
                </span>
              </label>
              <input
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
                type="text"
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
