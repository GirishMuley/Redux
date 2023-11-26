import React from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const amount = useSelector((state) => state.amount);
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Navbar</span>

          <div>
            <button disabled={true} className="btn btn-primary">
              Pay Money {amount}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
