import sushi from "../assets/logo2.png";

const Footer = () => {
  return (
    <div className="footer-section" id="contact">
      <div className="footer-section-mini d-flex flex-column align-items-center justify-content-center">
        <h1
          className=""
          style={{
            color: "#F3D382",
            fontFamily: "'Cinzel',serif",
            fontSize: "clamp(1rem, 5vw, 4rem)"
          }}
        >
          <span className="ms-5">WE READY TO HAVE YOU </span>
          <br /> THE BEST DINING EXPERIENCES
        </h1>
        <div className="text-white d-flex gap-5">
          <div className="d-flex align-items-start gap-2">
            <i className="bi bi-geo-alt-fill" style={{ color: "yellow" }}></i>

            <address
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: "20px",
              }}
            >
              IT park, Near ring road,
              <br />
              Ch. Shambhaji maharaj square, Nagpur-440056
            </address>
          </div>

          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-telephone-fill" style={{ color: "yellow" }}></i>

            <p
              className="m-0"
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: "20px",
              }}
            >
              9527459675
            </p>
          </div>
        </div>
        <button className="bg-warning p-2 border border-3 border-black mb-3 mt-3">
          RESERVE A TABLE
        </button>
        <img
          src={sushi}
          style={{ height: "82px", width: "82px" }}
          className="mt-3 mb-3"
        />
        <div className="d-flex gap-3 text-light mt-3">
          <span
            className="border-bottom"
            style={{ borderColor: "#F3D382", borderWidth: "2px" }}
          >
            INSTAGRAM
          </span>

          <span
            className="border-bottom"
            style={{ borderColor: "#F3D382", borderWidth: "2px" }}
          >
            TWITTER
          </span>

          <span
            className="border-bottom"
            style={{ borderColor: "#ffcf56", borderWidth: "2px" }}
          >
            FACEBOOK
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
