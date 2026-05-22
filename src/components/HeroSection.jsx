const HeroSection = () => {
  return (
    <div className="hero-section d-flex justify-content-center align-items-center text-light">
      <div className="hero-section-mini text-center">
        <span
          style={{ fontFamily: "'Great Vibes', cursive", fontSize: "30px" }}
        >
          Best Sushi in Town
        </span>
        <div
          className="mobile-text-hero"
          style={{ fontFamily: "'Cinzel',serif" }}
        >
          Taste the rich flavor of <br /> high quality sushi
        </div>

        <p
          className=" mt-3"
          style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "20px" }}
        >
          We only use the five star quality for <br /> our menu, come and get
          the richness in <br /> every food we serve.
        </p>

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
              GO TO MENU →
            </button>
      </div>
      <div className="hero-overlay"></div>
    </div>
  );
};

export default HeroSection;
