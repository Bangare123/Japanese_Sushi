import sushi5 from "../assets/finedining3.png";
import sushi6 from "../assets/finedining2.png";
import sushi7 from "../assets/finedining4.png";
import salmon from "../assets/salmon1.png";

const DiningEvents = () => {
  return (
    <div style={{ background: "#1e1e1e" }} id="fineDining">
      <div className="container py-5">
        <div className="text-white text-center">
          <h1
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "25px",
            }}
          >
            Choose Your Event
          </h1>
          <span
            style={{
              color: "#F3D382",
              fontFamily: "'DM Serif Display', serif",
              fontSize: "40px",
            }}
          >
            Dining Events
          </span>
          <p>
            {" "}
            We provide dining event for your special day <br /> with your
            important people
          </p>
          <button className="me-3 bg-warning border border-3 border-black">
            Private Events
          </button>
          <button className="bg-warning border border-3 border-black">
            Corporate Events
          </button>
        </div>
        <div className="d-flex justify-content-center mt-5 dining-row">
          <div className="text-white d-flex align-items-center gap-3 dining-content">
            <h1 className="m-0" style={{ color: "#F3D382" }}>
              $100
            </h1>

            <div>
              <p className="m-0" style={{ color: "#F3D382" }}>
                Private dine in
              </p>

              <p className="m-0">
                Bottle of Champagne Fine Sushi
                <br />
                Tower For 2+ Dessert
              </p>
            </div>
          </div>

          <div className="position-relative w-50 dining-image">
            <img
              src={sushi6}
              
              style={{
                height: "400px",
                objectFit: "cover",
              }}
            />

            {/* Overlay */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background:
                  "linear-gradient(to right, #1e1e1e 5%, rgba(30,30,30,0.1) 40%, rgba(30,30,30,0) 100%)",
              }}
            ></div>
          </div>
        </div>
        <div className="d-flex justify-content-center dining-row reverse-row">
          <div className="position-relative dining-image w-50">
            <img
              src={sushi5}
              className="w-100"
              style={{
                height: "400px",
                objectFit: "cover",
              }}
            />

            {/* Overlay */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background:
                  "linear-gradient(to left, #1e1e1e 5%, rgba(30,30,30,0.1) 40%, rgba(30,30,30,0) 100%)",
              }}
            ></div>
          </div>
          <div className="text-white d-flex align-items-center gap-3 dining-content">
            <h1 className="m-0" style={{ color: "#F3D382" }}>
              $150
            </h1>

            <div>
              <p className="m-0" style={{ color: "#F3D382" }}>
                Private dine in
              </p>

              <p className="m-0">
                Bottle of Champagne Fine Sushi
                <br />
                Tower For 2+ Dessert
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center dining-row">
          <div className="text-white d-flex align-items-center gap-3 dining-content">
            <h1 className="m-0" style={{ color: "#F3D382" }}>
              $200
            </h1>

            <div>
              <p className="m-0" style={{ color: "#F3D382" }}>
                Private dine in
              </p>

              <p className="m-0">
                Bottle of Champagne Fine Sushi
                <br />
                Tower For 2+ Dessert
              </p>
            </div>
          </div>

          <div className="position-relative dining-image w-50">
            <img
              src={sushi7}
              style={{
                height: "400px",
                objectFit: "cover",
              }}
            />

            {/* Overlay */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background:
                  "linear-gradient(to right, #1e1e1e 5%, rgba(30,30,30,0.1) 40%, rgba(30,30,30,0) 100%)",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <img
          src={salmon}
          alt="salmon"
          className="img-fluid"
          style={{
            width: "95rem",
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default DiningEvents;
