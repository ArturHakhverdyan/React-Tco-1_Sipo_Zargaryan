import { connect } from "react-redux";

const ConnectedAuthLoginHoc = ({ Component, ...props }) => {
  return <Component {...props} />;
};

const mapStateToProps = (state) => {
  return {
    isLogedInUser: state.authReducerState.isLogedInUser,
  };
};
export const AuthLoginHoc = connect(mapStateToProps)(ConnectedAuthLoginHoc);
