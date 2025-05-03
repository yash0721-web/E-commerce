import React from "react";

const pressStyles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "4rem 2rem",
    color: "#333",
  },
  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "3rem",
    color: "#2ecc71",
  },
  pressGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
  },
  pressCard: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "2rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  pressTitle: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    color: "#2ecc71",
  },
  pressDate: {
    color: "#333",
    marginBottom: "1rem",
  },
  pressDescription: {
    color: "#333",
    lineHeight: "1.6",
    marginBottom: "1.5rem",
  },
  readMore: {
    color: "#2ecc71",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  },
  readMoreHover: {
    color: "#27ae60",
  },
  mediaKit: {
    marginTop: "3rem",
    padding: "2rem",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    textAlign: "center",
  },
  mediaKitTitle: {
    fontSize: "1.8rem",
    marginBottom: "1rem",
    color: "#2ecc71",
  },
  mediaKitDescription: {
    color: "#333",
    marginBottom: "1.5rem",
    lineHeight: "1.6",
  },
  downloadButton: {
    padding: "0.8rem 1.5rem",
    backgroundColor: "#2ecc71",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  downloadButtonHover: {
    backgroundColor: "#27ae60",
  },
};

const Press = () => {
  const pressReleases = [
    {
      id: 1,
      title: "E-Shop Launches New Mobile App",
      date: "March 15, 2024",
      description:
        "E-Shop announces the launch of its new mobile application, offering enhanced shopping experience and exclusive features.",
    },
    {
      id: 2,
      title: "E-Shop Expands to International Markets",
      date: "February 28, 2024",
      description:
        "E-Shop expands its operations to 10 new countries, bringing its unique shopping experience to customers worldwide.",
    },
    {
      id: 3,
      title: "E-Shop Achieves 1 Million Customers",
      date: "January 10, 2024",
      description:
        "E-Shop celebrates reaching 1 million customers, marking a significant milestone in its growth journey.",
    },
  ];

  return (
    <div style={pressStyles.container}>
      <h1 style={pressStyles.heading}>Press Releases</h1>
      <div style={pressStyles.pressGrid}>
        {pressReleases.map((release) => (
          <div key={release.id} style={pressStyles.pressCard}>
            <h2 style={pressStyles.pressTitle}>{release.title}</h2>
            <p style={pressStyles.pressDate}>{release.date}</p>
            <p style={pressStyles.pressDescription}>{release.description}</p>
            <a
              href="#"
              style={pressStyles.readMore}
              onMouseEnter={(e) => {
                e.target.style.color = pressStyles.readMoreHover.color;
              }}
              onMouseLeave={(e) => {
                e.target.style.color = pressStyles.readMore.color;
              }}
            >
              Read More →
            </a>
          </div>
        ))}
      </div>

      <div style={pressStyles.mediaKit}>
        <h2 style={pressStyles.mediaKitTitle}>Media Kit</h2>
        <p style={pressStyles.mediaKitDescription}>
          Download our media kit for logos, brand guidelines, and company
          information.
        </p>
        <button
          style={pressStyles.downloadButton}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor =
              pressStyles.downloadButtonHover.backgroundColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor =
              pressStyles.downloadButton.backgroundColor;
          }}
        >
          Download Media Kit
        </button>
      </div>
    </div>
  );
};

export default Press;
