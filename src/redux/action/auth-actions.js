export const setIsLogedInUserTrueAction = () => {
  return {
    type: "SET_IS_LOGIN_USER_TRUE",
  };
};

export const setIsLogedInUserFalseAction = () => {
  return {
    type: "SET_IS_LOGIN_USER_FALSE",
  };
};

export const setUserDataAction = (payload) => {
    return {
      type: "SET_USER_DATA",
      payload
    };
  };

