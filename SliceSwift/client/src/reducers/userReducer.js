export const registerUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return {
        lodaing: true,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "USER_REGISTER_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const loginUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return {
        loading: true,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        loading: false,
        success: true,
        currentUser: action.payload,
      };
    case "USER_LOGIN_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  sendingOTP: false,
  otpSent: false,
  otpSentError: null,
  resettingPassword: false,
  passwordReset: false,
  passwordResetError: null,
};

export const forgotReducer = (state =initialState , action) => {
  switch (action.type) {
    // ... Other cases ...

    case "SEND_OTP_REQUEST":
      return {
        ...state,
        sendingOTP: true,
        otpSent: false,
        otpSentError: null,
      };
    case "SEND_OTP_SUCCESS":
      return {
        ...state,
        sendingOTP: false,
        otpSent: true,
        otpSentError: null,
      };
    case "SEND_OTP_FAIL":
      return {
        ...state,
        sendingOTP: false,
        otpSent: false,
        otpSentError: action.payload,
      };

    case "RESET_PASSWORD_REQUEST":
      return {
        ...state,
        resettingPassword: true,
        passwordReset: false,
        passwordResetError: null,
      };
    case "RESET_PASSWORD_SUCCESS":
      return {
        ...state,
        resettingPassword: false,
        passwordReset: true,
        passwordResetError: null,
      };
    case "RESET_PASSWORD_FAIL":
      return {
        ...state,
        resettingPassword: false,
        passwordReset: false,
        passwordResetError: action.payload,
      };

    // ... Other cases ...

    default:
      return state;
  }
};


export const getAllUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "GET_USERS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_USERS_SUCCESS":
      return {
        users: action.payload,
        loading: false,
      };
    case "GET_USERS_FAIL":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
