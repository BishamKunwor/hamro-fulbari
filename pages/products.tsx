export default function Products() {
  return (
    <section className="flex max-w-screen-2xl mx-auto gap-10">
      <div className="border px-2 border-primary bg-secondary max-w-xs">
        <h2 className="text-2xl text-primary my-2">Products</h2>
      </div>
      <div className="w-full">
        <h2 className="text-3xl text-primary my-2">Products</h2>
        <main className="flex gap-6 flex-wrap">
          {Array.from({ length: 15 }).map((data, index) => {
            return (
              <div
                key={index}
                className="card gap-6 w-60 py-4 px-8 items-start bg-base-100 hover:shadow-xl rounded-none bg-transparent transition-all duration-300 cursor-pointer"
              >
                <figure>
                  <img className="h-44" src="/plant-1.png" alt="Shoes" />
                </figure>
                <div className="card-body p-0">
                  <h2 className="card-title">Tree!</h2>
                  <p>Rs. 499.00</p>
                  <div className="card-actions justify-start">
                    <button className="btn btn-primary w-40 bg-primary border-primary hover:bg-primary/80 hover:border-primary/80">
                      Add to Cart
                    </button>
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
