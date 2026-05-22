const AboutUS = () => {
  return (
    <div
      className="position-relative overflow-hidden"
      style={{ background: "#1e1e1e" }}
      id="about"
    >
      <div className="hero-overlayAbout"></div>

      <div className="container py-5 position-relative z-2">
        {/* Heading */}
        <div className="text-center px-2">
          <p
            className="text-light"
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(22px, 4vw, 30px)",
            }}
          >
            About Us
          </p>

          <h1
            style={{
              color: "#F3D382",
              fontFamily: "'Cinzel',serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              lineHeight: "1.3",
            }}
          >
            EXPERIENCE THE ART OF
            <br />
            FINE DINING
          </h1>

          <p
            className="text-light mx-auto"
            style={{
              fontFamily: "'DM Sans',sans-serif",
              maxWidth: "700px",
            }}
          >
            Discover a unique blend of premium cuisine, elegant ambiance, and
            unforgettable moments crafted specially for you.
          </p>
        </div>

        {/* Content */}
        <div className="row align-items-center mt-5 g-5">
          {/* Image */}
          <div className="col-12 col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
              alt="Dining"
              className="img-fluid w-100 rounded"
              style={{
                height: "400px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Text */}
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <h1
              style={{
                color: "#F3D382",
                fontFamily: "'Cinzel',serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: "1.3",
              }}
            >
              ELEGANCE MEETS
              <br />
              TASTE
            </h1>

            <p
              className="text-light"
              style={{
                fontFamily: "'DM Sans',sans-serif",
                lineHeight: "1.9",
              }}
            >
              From handcrafted dishes to luxurious interiors, we create an
              atmosphere where every meal becomes a memorable experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;