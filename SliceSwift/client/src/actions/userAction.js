import axios from "axios";
import swal from "sweetalert";
export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    await axios.post("/api/users/register", user);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAIL", payload: error });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const response = await axios.post("/api/users/login", user);
    // console.log(response);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAIL", payload: error });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/login";
};

// Send OTP to the user's email
export const sendOTP = (email) => async (dispatch) => {
  dispatch({ type: "SEND_OTP_REQUEST" });
  try {
    await axios.post("/api/users/forgotpassword", { email });
    dispatch({ type: "SEND_OTP_SUCCESS" });
  } catch (error) {
    dispatch({ type: "SEND_OTP_FAIL", payload: error });
  }
};

// Reset password with OTP
export const resetPassword = (email, otp, newPassword) => async (dispatch) => {
  dispatch({ type: "RESET_PASSWORD_REQUEST" });
  try {
    await axios.post("/api/users/resetpassword", { email, otp, newPassword });
    dispatch({ type: "RESET_PASSWORD_SUCCESS" });
    // Redirect the user to the login page or display a success message
  } catch (error) {
    dispatch({ type: "RESET_PASSWORD_FAIL", payload: error });
  }
};


export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: "GET_USERS_REQUEST" });
  try {
    const response = await axios.get("/api/users/getallusers");
    // console.log(response.data);
    dispatch({ type: "GET_USERS_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_USERS_FAIL", payload: err });
  }
};

export const deleteUser = (userid) => async (dispatch) => {
  try {
    await axios.post("/api/users/deleteuser", { userid });
    swal("User Deleted Succss!", "success");
    window.location.reload();
    // console.log(res);
  } catch (error) {
    swal("Errro While Deleteing User");
  }
};
