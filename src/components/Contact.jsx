import React, { useState } from "react";

const contactStyles = {
  contactContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
  },
  header: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  title: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#666",
  },
  contactGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
  },
  contactInfo: {
    backgroundColor: "#f9f9f9",
    padding: "2rem",
    borderRadius: "8px",
  },
  infoTitle: {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "1.5rem",
  },
  infoItem: {
    marginBottom: "1.5rem",
  },
  infoLabel: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "0.5rem",
  },
  infoText: {
    fontSize: "1.1rem",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  label: {
    fontSize: "1rem",
    color: "#333",
  },
  input: {
    padding: "0.8rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "1rem",
  },
  textarea: {
    padding: "0.8rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "1rem",
    minHeight: "150px",
    resize: "vertical",
  },
  submitButton: {
    padding: "1rem 2rem",
    backgroundColor: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  submitButtonHover: {
    backgroundColor: "#27ae60",
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div style={contactStyles.contactContainer}>
      <div style={contactStyles.header}>
        <h1 style={contactStyles.title}>Contact Us</h1>
        <p style={contactStyles.subtitle}>
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>
      </div>

      <div style={contactStyles.contactGrid}>
        <div style={contactStyles.contactInfo}>
          <h2 style={contactStyles.infoTitle}>Contact Information</h2>
          <div style={contactStyles.infoItem}>
            <div style={contactStyles.infoLabel}>Address</div>
            <div style={contactStyles.infoText}>
              123 E-Shop Street, City, Country
            </div>
          </div>
          <div style={contactStyles.infoItem}>
            <div style={contactStyles.infoLabel}>Phone</div>
            <div style={contactStyles.infoText}>+1 (123) 456-7890</div>
          </div>
          <div style={contactStyles.infoItem}>
            <div style={contactStyles.infoLabel}>Email</div>
            <div style={contactStyles.infoText}>contact@eshop.com</div>
          </div>
          <div style={contactStyles.infoItem}>
            <div style={contactStyles.infoLabel}>Business Hours</div>
            <div style={contactStyles.infoText}>
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday - Sunday: Closed
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={contactStyles.form}>
          <div style={contactStyles.formGroup}>
            <label htmlFor="name" style={contactStyles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={contactStyles.input}
            />
          </div>
          <div style={contactStyles.formGroup}>
            <label htmlFor="email" style={contactStyles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={contactStyles.input}
            />
          </div>
          <div style={contactStyles.formGroup}>
            <label htmlFor="subject" style={contactStyles.label}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              style={contactStyles.input}
            />
          </div>
          <div style={contactStyles.formGroup}>
            <label htmlFor="message" style={contactStyles.label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={contactStyles.textarea}
            />
          </div>
          <button type="submit" style={contactStyles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
