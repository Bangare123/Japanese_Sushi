import sushi1 from "../assets/sushi3.png";
import sushi2 from "../assets/sushi1.png";
import sushi3 from "../assets/sushi6.png";
import bg from "../assets/Luxury1.png";
import { useRef } from "react";

const SpecialMenu = () => {
  const scrollRef = useRef();

  return (
    <section id="menu" className="special-menu text-light">
      <div className="container">
        <div className="container py-5 text-light">
          <div className="d-flex flex-column text-center">
            <div className="d-flex flex-column mb-5">
              <div
                className="fs-5"
                style={{
                  fontFamily: "'Great Vibes', cursive",
                }}
              >
                Special Menu
              </div>

              <span
                className="fs-1"
                style={{
                  color: "#F3D382",
                  fontFamily: "'DM Serif Display', serif",
                }}
              >
                Today's Special
              </span>

              <p
                className="fs-5 text-secondary"
                style={{ fontFamily: "'DM Sans',sans-serif" }}
              >
                Special menu oftenly comes different everyday, <br /> this is
                our special food for today
              </p>
            </div>

            <div className="position-relative">
              {/* Left Button */}
              <button
                className="scroll-btn left-btn"
                onClick={() => {
                  scrollRef.current.scrollBy({
                    left: -320,
                    behavior: "smooth",
                  });
                }}
              >
                ❮
              </button>
              <div
                ref={scrollRef}
                className="special-menu-scroll d-flex flex-row justify-content-lg-center flex-nowrap"
              >
                {/* Card 1 */}
                <div
                  className="card bg-dark text-light border-0"
                  style={{
                    width: "22rem",
                    borderRadius: "0",
                  }}
                >
                  <img
                    src={sushi1}
                    className="card-img-top"
                    alt="sushi"
                    style={{
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "0",
                    }}
                  />

                  <div
                    className="card-body text-start"
                    style={{ backgroundColor: "#2E2E2E" }}
                  >
                    <h3
                      className="card-title"
                      style={{ color: "#F3D382", fontFamily: "'Cinzel',serif" }}
                    >
                      Dragon Roll
                    </h3>

                    <p className="card-text text-secondary">
                      Dragon Roll is a popular sushi roll made with ingredients
                      like eel, avocado, cucumber, and sushi rice.
                    </p>

                    <div className="mb-3 fs-2" style={{ color: "#F5BE32" }}>
                      ★★★★☆
                    </div>

                    <button
                      className="px-4 py-2 bg-transparent"
                      style={{
                        border: "2px solid #F5BE32",
                        color: "#F5BE32",
                        background: "transparent",
                      }}
                    >
                      ORDER NOW -----
                    </button>
                  </div>
                </div>

                {/* Card 2 */}
                <div
                  className="card bg-dark text-light border-0"
                  style={{
                    width: "22rem",
                    borderRadius: "0",
                  }}
                >
                  <img
                    src={sushi3}
                    className="card-img-top"
                    alt="sushi"
                    style={{
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "0",
                    }}
                  />

                  <div
                    className="card-body text-start"
                    style={{ backgroundColor: "#1E1E1E" }}
                  >
                    <h3
                      className="card-title"
                      style={{ color: "#F3D382", fontFamily: "'Cinzel',serif" }}
                    >
                      Salmon Nigiri
                    </h3>

                    <p className="card-text text-secondary">
                      Salmon Nigiri is a traditional Japanese sushi made with
                      fresh salmon placed over hand-pressed sushi rice.
                    </p>

                    <div className="mb-3 fs-2" style={{ color: "#F5BE32" }}>
                      ★★★★★
                    </div>

                    <button
                      className="px-4 py-2 bg-transparent"
                      style={{
                        border: "2px solid #F5BE32",
                        color: "#F5BE32",
                        background: "transparent",
                      }}
                    >
                      ORDER NOW -----
                    </button>
                  </div>
                </div>

                {/* Card 3 */}
                <div
                  className="card bg-dark text-light border-0"
                  style={{
                    width: "22rem",
                    borderRadius: "0",
                  }}
                >
                  <img
                    src={sushi2}
                    className="card-img-top"
                    alt="sushi"
                    style={{
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "0",
                    }}
                  />

                  <div
                    className="card-body text-start"
                    style={{ backgroundColor: "#2E2E2E" }}
                  >
                    <h3
                      className="card-title"
                      style={{ color: "#F3D382", fontFamily: "'Cinzel',serif" }}
                    >
                      Tuna Maki
                    </h3>

                    <p className="card-text text-secondary">
                      Tuna Sushi is a classic Japanese delicacy made with fresh
                      tuna and perfectly seasoned sushi rice.
                    </p>

                    <div className="mb-3 fs-2" style={{ color: "#F5BE32" }}>
                      ★★★★☆
                    </div>

                    <button
                      className="px-4 py-2 bg-transparent"
                      style={{
                        border: "2px solid #F5BE32",
                        color: "#F5BE32",
                        background: "transparent",
                      }}
                    >
                      ORDER NOW -----
                    </button>
                  </div>
                </div>
              </div>
              {/* Right Button */}
              <button
                className="scroll-btn right-btn"
                onClick={() => {
                  scrollRef.current.scrollBy({
                    left: 320,
                    behavior: "smooth",
                  });
                }}
              >
                ❯
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <img src={bg} className="img-fluid" style={{ width: "95rem" }} />
      </div>
      <div
        style={{
          position: "absolute",
          top: "104rem",
          left: 0,
          width: "100%",
          height: "33%",
          backgroundColor: "rgba(0,0,0,0.1)",
        }}
      ></div>
    </section>
  );
};

export default SpecialMenu;
