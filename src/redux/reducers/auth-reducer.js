const initialState = {
    isLogedInUser: false,
    userData: null,
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_IS_LOGIN_USER_TRUE": {
        return {
          ...state,
          isLogedInUser: true,
        };
      }
      case "SET_IS_LOGIN_USER_FALSE": {
        return {
          ...state,
          isLogedInUser: false,
        };
      }
      case "SET_USER_DATA": {
        return {
          ...state,
          userData: action.payload,
        };
      }
  
      default:
        return state;
    }
  };
  