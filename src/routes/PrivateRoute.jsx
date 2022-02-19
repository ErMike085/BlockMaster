import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated || undefined ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
