import React from "react";

const NavBar = () => {
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Navbar</span>

          <div>
            <button disabled={true} className="btn btn-primary">
              Pay Money
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
