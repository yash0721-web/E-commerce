import React, { useState } from "react";

const careersStyles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "4rem 2rem",
    position: "relative",
    color: "#333",
  },
  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "3rem",
    color: "#2ecc71",
  },
  jobList: {
    display: "grid",
    gap: "2rem",
  },
  jobCard: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "2rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
  },
  jobCardHover: {
    transform: "translateY(-5px)",
  },
  jobTitle: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    color: "#2ecc71",
  },
  jobLocation: {
    color: "#333",
    marginBottom: "1rem",
  },
  jobDescription: {
    color: "#333",
    marginBottom: "1.5rem",
    lineHeight: "1.6",
  },
  applyButton: {
    padding: "0.8rem 1.5rem",
    backgroundColor: "#2ecc71",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  applyButtonHover: {
    backgroundColor: "#27ae60",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    padding: "20px",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "600px",
    maxHeight: "90vh",
    overflowY: "auto",
    position: "relative",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",
    paddingBottom: "1rem",
    borderBottom: "1px solid #eee",
  },
  modalTitle: {
    fontSize: "1.5rem",
    color: "#2ecc71",
    margin: 0,
  },
  closeButton: {
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "#333",
    padding: "0.5rem",
    lineHeight: 1,
  },
  formGroup: {
    marginBottom: "1.5rem",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    color: "#333",
    fontWeight: "500",
  },
  input: {
    width: "100%",
    padding: "0.8rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "1rem",
    boxSizing: "border-box",
    color: "#333",
  },
  textarea: {
    width: "100%",
    padding: "0.8rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "1rem",
    minHeight: "100px",
    resize: "vertical",
    boxSizing: "border-box",
    color: "#333",
  },
  submitButton: {
    width: "100%",
    padding: "1rem",
    backgroundColor: "#2ecc71",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    marginTop: "1rem",
  },
  submitButtonHover: {
    backgroundColor: "#27ae60",
  },
};

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    coverLetter: "",
  });

  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote",
      description:
        "We're looking for a skilled Frontend Developer to join our team. You'll be responsible for building user interfaces and implementing new features using React.js.",
    },
    {
      id: 2,
      title: "Backend Developer",
      location: "Remote",
      description:
        "Join our backend team to build scalable APIs and services. Experience with Node.js and databases is required.",
    },
    {
      id: 3,
      title: "UX Designer",
      location: "Remote",
      description:
        "We need a creative UX Designer to help us create beautiful and intuitive user experiences for our e-commerce platform.",
    },
  ];

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setFormData({
      name: "",
      email: "",
      phone: "",
      resume: "",
      coverLetter: "",
    });
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Application submitted for:", selectedJob.title);
    console.log("Form data:", formData);
    // Show success message and close modal
    alert("Thank you for your application! We'll be in touch soon.");
    handleCloseModal();
  };

  return (
    <div style={careersStyles.container}>
      <h1 style={careersStyles.heading}>Join Our Team</h1>
      <div style={careersStyles.jobList}>
        {jobOpenings.map((job) => (
          <div key={job.id} style={careersStyles.jobCard}>
            <h2 style={careersStyles.jobTitle}>{job.title}</h2>
            <p style={careersStyles.jobLocation}>{job.location}</p>
            <p style={careersStyles.jobDescription}>{job.description}</p>
            <button
              style={careersStyles.applyButton}
              onClick={() => handleApplyClick(job)}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {selectedJob && (
        <div style={careersStyles.modalOverlay}>
          <div style={careersStyles.modalContent}>
            <div style={careersStyles.modalHeader}>
              <h2 style={careersStyles.modalTitle}>
                Apply for {selectedJob.title}
              </h2>
              <button
                style={careersStyles.closeButton}
                onClick={handleCloseModal}
              >
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div style={careersStyles.formGroup}>
                <label style={careersStyles.label} htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={careersStyles.input}
                  required
                />
              </div>
              <div style={careersStyles.formGroup}>
                <label style={careersStyles.label} htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={careersStyles.input}
                  required
                />
              </div>
              <div style={careersStyles.formGroup}>
                <label style={careersStyles.label} htmlFor="phone">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={careersStyles.input}
                  required
                />
              </div>
              <div style={careersStyles.formGroup}>
                <label style={careersStyles.label} htmlFor="resume">
                  Resume URL
                </label>
                <input
                  type="url"
                  id="resume"
                  name="resume"
                  value={formData.resume}
                  onChange={handleInputChange}
                  style={careersStyles.input}
                  required
                />
              </div>
              <div style={careersStyles.formGroup}>
                <label style={careersStyles.label} htmlFor="coverLetter">
                  Cover Letter
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  style={careersStyles.textarea}
                  required
                />
              </div>
              <button type="submit" style={careersStyles.submitButton}>
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
