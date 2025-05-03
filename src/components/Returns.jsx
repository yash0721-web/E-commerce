import React from "react";

const returnsStyles = {
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
  section: {
    marginBottom: "3rem",
  },
  sectionTitle: {
    fontSize: "1.8rem",
    marginBottom: "1.5rem",
    color: "#2ecc71",
  },
  content: {
    color: "#333",
    lineHeight: "1.6",
    marginBottom: "1.5rem",
  },
  stepsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
    marginTop: "2rem",
  },
  stepCard: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  stepNumber: {
    fontSize: "2rem",
    color: "#2ecc71",
    marginBottom: "1rem",
  },
  stepTitle: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    color: "#2ecc71",
  },
  stepDescription: {
    color: "#333",
    lineHeight: "1.6",
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "1.5rem",
    color: "#333",
    lineHeight: "1.6",
  },
  listItem: {
    marginBottom: "0.5rem",
  },
  note: {
    backgroundColor: "#f9f9f9",
    padding: "1.5rem",
    borderRadius: "8px",
    marginTop: "2rem",
    borderLeft: "4px solid #2ecc71",
  },
};

const Returns = () => {
  const returnSteps = [
    {
      id: 1,
      title: "Initiate Return",
      description:
        "Log into your account and go to your order history. Select the item you wish to return and follow the prompts.",
    },
    {
      id: 2,
      title: "Package Item",
      description:
        "Pack the item securely in its original packaging with all accessories and documentation included.",
    },
    {
      id: 3,
      title: "Ship Back",
      description:
        "Use the provided return shipping label and drop off at your nearest shipping location.",
    },
    {
      id: 4,
      title: "Receive Refund",
      description:
        "Once we receive and process your return, you'll receive your refund within 5-7 business days.",
    },
  ];

  return (
    <div style={returnsStyles.container}>
      <h1 style={returnsStyles.heading}>Returns & Exchanges</h1>

      <div style={returnsStyles.section}>
        <h2 style={returnsStyles.sectionTitle}>Return Policy</h2>
        <p style={returnsStyles.content}>
          We want you to be completely satisfied with your purchase. If for any
          reason you're not happy with your order, you can return it within 30
          days of delivery for a full refund or exchange.
        </p>
      </div>

      <div style={returnsStyles.section}>
        <h2 style={returnsStyles.sectionTitle}>How to Return</h2>
        <div style={returnsStyles.stepsContainer}>
          {returnSteps.map((step) => (
            <div key={step.id} style={returnsStyles.stepCard}>
              <div style={returnsStyles.stepNumber}>{step.id}</div>
              <h3 style={returnsStyles.stepTitle}>{step.title}</h3>
              <p style={returnsStyles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={returnsStyles.section}>
        <h2 style={returnsStyles.sectionTitle}>Return Conditions</h2>
        <ul style={returnsStyles.list}>
          <li style={returnsStyles.listItem}>
            Items must be unused, unwashed, and in their original condition
          </li>
          <li style={returnsStyles.listItem}>
            All original tags and packaging must be included
          </li>
          <li style={returnsStyles.listItem}>
            Returns must be initiated within 30 days of delivery
          </li>
          <li style={returnsStyles.listItem}>
            Final sale items cannot be returned or exchanged
          </li>
          <li style={returnsStyles.listItem}>
            Custom or personalized items are not eligible for return
          </li>
        </ul>
      </div>

      <div style={returnsStyles.section}>
        <h2 style={returnsStyles.sectionTitle}>Refund Process</h2>
        <p style={returnsStyles.content}>
          Once your return is received and inspected, we will send you an email
          to notify you that we have received your returned item. We will also
          notify you of the approval or rejection of your refund.
        </p>
        <p style={returnsStyles.content}>
          If approved, your refund will be processed, and a credit will
          automatically be applied to your original method of payment within 5-7
          business days.
        </p>
      </div>

      <div style={returnsStyles.note}>
        <p style={returnsStyles.content}>
          <strong>Note:</strong> For international returns, please contact our
          customer service team for specific instructions and shipping details.
        </p>
      </div>
    </div>
  );
};

export default Returns;
