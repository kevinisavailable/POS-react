import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <header>
        <nav className="navbar bg-light">
          <div className="container">
            {/* <div> */}
            <Link className="navbar-brand text-bg-light" to="/">
              Homepage
            </Link>
            <Link className="navbar-brand text-bg-light" to="/pos">
              POS Page
            </Link>
            {/* </div> */}
          </div>
        </nav>
      </header>
      <main>
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold">Point of Sale</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              A POS system allows your business to accept payments from
              customers and keep track of sales. It sounds simple enough, but
              the setup can work in different ways, depending on whether you
              sell online, have a physical storefront, or both. A point-of-sale
              system used to refer to the cash register at a store.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link
                type="button"
                className="btn btn-primary btn-lg px-4 gap-3"
                to="/pos"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
