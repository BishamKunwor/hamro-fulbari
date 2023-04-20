export default function WhyUs() {
  return (
    <section className="mx-auto max-w-screen-2xl py-10">
      <h2 className="text-3xl text-primary text-center my-2">
        Why Hamro Fulbari?
      </h2>
      <main className="border bg-secondary border-primary p-20 flex justify-between px-32 mt-10">
        <div className="flex gap-8 flex-col">
          <img src="/certificate.png" className="aspect-square w-24" alt="" />
          <div className="flex gap-2 flex-col">
            <h3 className="text-2xl text-primary">7 Day GUARANTEE</h3>
            <h3>
              If your plant dies within 7 days, we’ll
              <br /> replace it for free.
            </h3>
          </div>
        </div>
        <div className="flex gap-8 flex-col">
          <img
            src="/customerService.png"
            className="aspect-square w-24"
            alt=""
          />
          <div className="flex gap-2 flex-col">
            <h3 className="text-2xl text-primary">CUSTOMER SERVICE</h3>
            <h3>
              Not just selling, we are always open <br /> to your queries
              regarding plants. At
              <br /> the end, your satisfaction is what matters.
            </h3>
          </div>
        </div>
        <div className="flex gap-8 flex-col">
          <img src="/delivery.png" className="aspect-square w-24" alt="" />
          <div className="flex gap-2 flex-col">
            <h3 className="text-2xl text-primary">DELIVERY</h3>
            <h3>
              We deliver your order right at your <br /> doorstep. All you have
              to do is make few clicks.
            </h3>
          </div>
        </div>
      </main>
    </section>
  );
}
