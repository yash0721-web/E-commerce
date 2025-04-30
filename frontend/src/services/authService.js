import api from "./api";

const TEST_TOKEN =
  "59301a41d65b9be1ec23b13f11509cbc107f7d4da525afc85bfa7e78df0cc3b6";

export const signup = async (name, email, password) => {
  try {
    console.log("Attempting to sign up with:", {
      name,
      email,
      password: "***",
    });

    const response = await api.post("/auth/signup", {
      name,
      email,
      password,
    });

    console.log("Signup response:", response.data);

    const { token, user } = response.data;
    localStorage.setItem("token", token);
    return user;
  } catch (error) {
    console.error("Signup error:", {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
    });

    // Throw a more descriptive error
    throw new Error(
      error.response?.data?.details ||
        error.response?.data?.error ||
        "Failed to register user"
    );
  }
};

export const setTestToken = () => {
  localStorage.setItem("token", TEST_TOKEN);
  return { isAuthenticated: true };
};

export const login = async (email, password) => {
  try {
    const response = await api.post("/auth/login", { email, password });
    const { token, user } = response.data;

    // Store token in localStorage
    localStorage.setItem("token", token);

    return user;
  } catch (error) {
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getCurrentUser = () => {
  const token = localStorage.getItem("token");
  return token ? { isAuthenticated: true } : { isAuthenticated: false };
};
