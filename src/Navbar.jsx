import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div style={{ background: "lightblue" }} className="container-fluid">
          <img
            style={{ height: "60px" }}
            src="data:image/png;base64,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"
          ></img>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  LifeStyle
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  fashion
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another Action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
