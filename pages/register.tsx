export default function RegisterAccount() {
  return (
    <section className="max-w-screen-2xl mx-auto py-10 space-y-4">
      <h1 className="text-4xl text-center text-primary capitalize">
        Create an Account
      </h1>
      <div className="border-primary p-5 border mx-auto w-[600px] bg-secondary">
        <h2 className="text-2xl uppercase">Personal Information</h2>
        <form action="/create-account" className="w-full">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-black/60">
                FIRST NAME
              </span>
            </label>
            <input
              required
              type="text"
              name="fistName"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-black/60">
                LAST NAME
              </span>
            </label>
            <input
              required
              type="text"
              name="lastName"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-black/60">E-MAIL</span>
            </label>
            <input
              required
              type="email"
              name="email"
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
              required
              type="password"
              name="password"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <button
              type="submit"
              className="btn btn-primary bg-primary hover:bg-primary/80 border-primary hover:border-primary"
            >
              Create
            </button>
            <a href="/">
              <button className="btn btn-primary bg-primary hover:bg-primary/80 border-primary hover:border-primary">
                Return
              </button>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
