import React, { useState } from "react";

const faqStyles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "4rem 2rem",
  },
  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "3rem",
    color: "#2ecc71",
  },
  faqList: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  faqItem: {
    marginBottom: "1rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
  },
  question: {
    padding: "1.5rem",
    backgroundColor: "#f9f9f9",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1.2rem",
    fontWeight: "500",
    color: "#2ecc71",
  },
  answer: {
    padding: "1.5rem",
    backgroundColor: "#fff",
    color: "#333",
    lineHeight: "1.6",
  },
  icon: {
    transition: "transform 0.3s ease",
  },
  iconRotated: {
    transform: "rotate(180deg)",
  },
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All payments are processed securely through our payment gateway.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order has shipped, you will receive a tracking number via email. You can use this number to track your package on our website or the carrier's website.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for most items. Items must be unused, unwashed, and in their original condition with all tags attached. Please refer to our Returns page for more detailed information.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by destination. Please check our Shipping Information page for details.",
    },
    {
      question: "How can I contact customer service?",
      answer:
        "You can reach our customer service team through our Contact page, by email at support@eshop.com, or by phone at (555) 123-4567. Our team is available Monday through Friday, 9 AM to 5 PM EST.",
    },
    {
      question: "Do you offer gift wrapping?",
      answer:
        "Yes, we offer gift wrapping services for an additional fee. You can select this option during checkout. We also include a personalized gift message with your order.",
    },
    {
      question: "What if my item is out of stock?",
      answer:
        "If an item is out of stock, you can sign up for email notifications to be alerted when it becomes available again. We typically restock popular items within 1-2 weeks.",
    },
    {
      question: "How do I change or cancel my order?",
      answer:
        "If you need to change or cancel your order, please contact our customer service team immediately. We can only modify orders that haven't been processed for shipping yet.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={faqStyles.container}>
      <h1 style={faqStyles.heading}>Frequently Asked Questions</h1>
      <div style={faqStyles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} style={faqStyles.faqItem}>
            <div style={faqStyles.question} onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span
                style={{
                  ...faqStyles.icon,
                  ...(openIndex === index ? faqStyles.iconRotated : {}),
                }}
              >
                ▼
              </span>
            </div>
            {openIndex === index && (
              <div style={faqStyles.answer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
