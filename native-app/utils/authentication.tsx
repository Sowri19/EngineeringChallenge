// utils/authentication.js
export const authenticateUser = async (email, password) => {
  // Dummy credentials check
  if (email === "1@e.com" && password === "pa") {
    return "dummy_token";
  }
  return null;
};
// utils/tokenUtils.js
export const decodeToken = (token) => {
  if (token === "dummy_token") {
    return "1@e.com";
  }
  return null;
};
