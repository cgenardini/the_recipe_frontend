import React from "react";
import { Route, Redirect } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ProtectedRoute({ children, ...props }) {
  const { isLoggedIn } = React.useContext(CurrentUserContext);
  return (
    <Route {...props}>{isLoggedIn ? children : <Redirect to="/" />}</Route>
  );
}
export default ProtectedRoute;
