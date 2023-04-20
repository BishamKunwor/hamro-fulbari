export default function Footer() {
  return (
    <section className="bg-primary">
      <footer className="footer py-10 px-5 md:px-0 textColor max-w-screen-2xl mx-auto">
        <div>
          <span className="footer-title opacity-80 text-2xl">
            Hamro <br />
            Fulbari
          </span>
          <label className="link link-hover">
            <div>Adress:</div>
            <span>Kathmandu, Gongabu, Nepal</span>
          </label>
          <label className="link link-hover">
            <div>Need Help?</div>
            <span>Call: +977 9818319099, +977 9860985750</span>
          </label>
          <label className="link link-hover">
            <div>Gmail:</div>
            <span>hamrofulbari7@gmail.com</span>
          </label>
        </div>
        <div>
          <span className="footer-title">Home</span>
          <a className="link link-hover">Products</a>
          <a className="link link-hover">Gallery</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact us</a>
        </div>
        <div>
          <span className="footer-title">Disclamer</span>
          <a className="link link-hover">Return policy</a>
          <a className="link link-hover">Shipping policy</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Terms & Condition</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text textColor">
                Sign up for our e-mail and be the first who know <br /> our
                special offers!
              </span>
            </label>
            <div className="relative text-black">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary bg-black hover:bg-primary/80 border-primary hover:border-primary/80 absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
