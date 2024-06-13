import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";

const PrivateRoute = ({ children }) => {
  const { loading, loggedInUserData } = useAuth();
  const location = useLocation();

  if(loading){
    return <Loader />
  }

  if (loggedInUserData) {
    return children
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
  }
  
  export default PrivateRoute;