// Register new user, POST, /api/users, Public
const registerUser = (req, res) => {
  res.json({ message: "Register User" });
};

// Authenticate a user, POST, /api/users/login, Public
const loginUser = (req, res) => {
  res.json({ message: "Login User" });
};

// Get user data, POST, /api/users/me, Public
const getMe = (req, res) => {
  res.json({ message: "User data display" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
