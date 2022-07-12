import { connect } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getToken } from "../helpers";

const ConnectedPrivateRoute = ({ children, isLoggedInUser }) => {
  const location = useLocation();
  const isLogedIn = getToken();

  if (!isLogedIn) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  }
  return children;
};

const mapStateToProps = (state) => {
  return {
    isLoggedInUser: state.authReducerState.isLoggedInUser,
  };
};

export const PrivateRoute = connect(mapStateToProps)(ConnectedPrivateRoute);
