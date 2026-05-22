import sushi from "../assets/logo2.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg position-absolute top-0 start-0 w-100 z-3 navbar-dark px-3 px-lg-4 py-3">
      {/* Logo */}
      <a className="navbar-brand fs-3 fw-bold" href="#">
        <img
          src={sushi}
          alt="logo"
          style={{ height: "72px", width: "72px", objectFit: "contain" }}
        />
      </a>

      {/* Modern Hamburger */}
      <button
        className="navbar-toggler border-0 shadow-none p-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div
          className="d-flex flex-column justify-content-between"
          style={{
            width: "28px",
            height: "20px",
          }}
        >
          <span
            style={{
              height: "2px",
              width: "100%",
              background: "#fff",
              borderRadius: "10px",
            }}
          ></span>

          <span
            style={{
              height: "2px",
              width: "70%",
              background: "#F5BE32",
              borderRadius: "10px",
              alignSelf: "flex-end",
            }}
          ></span>

          <span
            style={{
              height: "2px",
              width: "100%",
              background: "#fff",
              borderRadius: "10px",
            }}
          ></span>
        </div>
      </button>

      {/* Mobile Menu */}
      <div
        className="collapse navbar-collapse mt-3 mt-lg-0"
        id="navbarContent"
      >
        <div
          className="
            ms-auto
            d-lg-flex
            align-items-center
            gap-4
            mobile-menu-wrapper
          "
        >
          {/* Links */}
          <ul className="navbar-nav mx-auto gap-lg-3 text-center">
            <li className="nav-item">
              <a className="nav-link fs-5 text-light py-3 py-lg-2" href="#menu">
                Menu
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link fs-5 text-light py-3 py-lg-2"
                href="#fineDining"
              >
                Fine Dining
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link fs-5 text-light py-3 py-lg-2"
                href="#about"
              >
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link fs-5 text-light py-3 py-lg-2"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Button */}
          <div className="text-center text-lg-start mt-3 mt-lg-0">
            <button
              className="px-4 py-2 mobile-menu-button"
              style={{
                border: "2px solid #F5BE32",
                color: "#F5BE32",
                background: "transparent",
                borderRadius: "50px",
                fontWeight: "600",
                transition: "0.3s ease",
              }}
            >
              RESERVATION →
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;