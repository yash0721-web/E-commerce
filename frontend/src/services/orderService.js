const API_BASE = "http://localhost:5000/api";

export const placeOrder = async (orderData) => {
  const response = await fetch(`${API_BASE}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData),
  });
  if (!response.ok) throw new Error("Failed to place order");
  return response.json();
};
