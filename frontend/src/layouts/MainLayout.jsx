import React from "react";
import { Link } from "react-router-dom";


const MainLayout = ({ children }) => {
  return (
    <>
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
        <div className="container">
                {children}
        </div>
      </main>
    </>
  );
};

export default MainLayout;
