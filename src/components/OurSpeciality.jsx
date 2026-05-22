import { useState } from "react";
import sushi11 from "../assets/sushi10.png";
import sushi12 from "../assets/sushi12.png";
import sushi13 from "../assets/sushi11.png";
const OurSpeciality = () => {
  const [activeBtn, setActiveBtn] = useState("");

  const buttons = [
    "Specialities",
    "Homestyle Sushi",
    "Steak",
    "With Rice",
    "Cocktails",
    "Wine",
    "Appetizer",
  ];
  return (
    <div style={{ background: "#1e1e1e" }}>
      <div className="container py-5">
        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="text-light">Speciality</h1>

          <p style={{ color: "#F3D382" }}>Our Specialities</p>

          <p className="text-light">
            Authentic food from our restaurant served with high quality
            ingredients
          </p>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-3 flex-wrap mb-5">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className={activeBtn === btn ? "btn-One active-btn" : "btn-One"}
              onClick={() => setActiveBtn(btn)}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* FIRST ROW */}

        <div
          className="
d-flex
align-items-center
justify-content-center
flex-wrap
food-row
"
          style={{ color: "#F3D382" }}
        >
          <img
            src={sushi11}
            className="img-fluid"
            style={{
              width: "35rem",
              maxWidth: "100%",
              height: "350px",
              objectFit: "cover",
            }}
          />

          <div
            className="
d-flex
flex-column
justify-content-center
align-items-start
px-4
food-content
"
            style={{
              width: "30rem",
              height: "350px",
            }}
          >
            <h2>DRAGON SUSHI</h2>

            <p>
              Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Etiam ut imperdiet lectus.
            </p>

            <span>$50</span>
          </div>
        </div>

        {/* SECOND ROW */}

        <div
          className="
d-flex
align-items-center
justify-content-center
flex-wrap
food-row
reverse-mobile
"
          style={{
            color: "#F3D382",
          }}
        >
          <div
            className="
d-flex
flex-column
justify-content-center
align-items-start
px-4
food-content
"
            style={{
  width: "30rem",
  height: "350px",
}}
          >
            <h2>CREAMY SUSHI</h2>

            <p>
              Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Etiam ut imperdiet lectus.
            </p>

            <span>$50</span>
          </div>

          <img
            src={sushi12}
            className="img-fluid"
            style={{
              width: "35rem",
              maxWidth: "100%",
              height: "350px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* THIRD ROW */}

        <div
          className="
d-flex
align-items-center
justify-content-center
flex-wrap
food-row
"
          style={{ color: "#F3D382" }}
        >
          <img
            src={sushi13}
            alt="sushi"
            className="img-fluid"
            style={{
              width: "35rem",
              maxWidth: "100%",
              height: "350px",
              objectFit: "cover",
            }}
          />

          <div
            className="
d-flex
flex-column
justify-content-center
align-items-start
px-4
food-content
"
            style={{
              width: "30rem",
              height: "350px",
            }}
          >
            <h2>ROLL SALMON SUSHI</h2>

            <p>
              Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Etiam ut imperdiet lectus.
            </p>

            <span>$50</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSpeciality;
