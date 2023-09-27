import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendOTP, resetPassword } from "../actions/userAction";
import LoadingSpinner from "../components/Loader";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Get state from the reducer
  const {
    sendingOTP,
    otpSent,
    otpSentError,
    resettingPassword,
    passwordReset,
    passwordResetError,
  } = useSelector((state) => state.forgotReducer);

  const handleSendOTP = () => {
    dispatch(sendOTP(email));
  };

  const handleResetPassword = () => {
    dispatch(resetPassword(email, otp, newPassword));
  };

  return (
    <div className="w-full max-w-sm mx-auto">
  <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
  {otpSent && <p className="text-green-500 mb-2">OTP sent to your email. Check your inbox.</p>}
  {otpSentError && <p className="text-red-500 mb-2">Error: {otpSentError.message}</p>}
  {passwordReset && <p className="text-green-500 mb-2">Password reset successful.</p>}
  {passwordResetError && <p className="text-red-500 mb-2">Error: {passwordResetError.message}</p>}

  <div className="mb-4">
    <label className="block text-gray-600 mb-1">Email:</label>
    <input
      type="email"
      className="w-full px-3 py-2 border rounded"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>

  {!otpSent && (
    <button
      onClick={handleSendOTP}
      disabled={sendingOTP}
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
    >
      Send OTP
    </button>
  )}

  {otpSent && (
    <div className="mb-4">
      <label className="block text-gray-600 mb-1">OTP:</label>
      <input
        type="text"
        className="w-full px-3 py-2 border rounded"
        value={otp}
        onChange={(e) => setOTP(e.target.value)}
      />
    </div>
  )}

  {otpSent && (
    <div className="mb-4">
      <label className="block text-gray-600 mb-1">New Password:</label>
      <input
        type="password"
        className="w-full px-3 py-2 border rounded"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
    </div>
  )}

  {otpSent && (
    <button
      onClick={handleResetPassword}
      disabled={resettingPassword}
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
    >
      Reset Password
    </button>
  )}

  {sendingOTP || resettingPassword ? <LoadingSpinner /> : null}
</div>

  );
};

export default ForgotPassword;
