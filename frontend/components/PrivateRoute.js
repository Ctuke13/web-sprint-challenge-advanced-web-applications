import React from "react";
import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (localStorage.getItem("token")) {
//           return <Component {...props} />;
//         } else {
//           return <Navigate to="login" />;
//         }
//       }}
//     />
//   );
// };

const PrivateRoute = ({ children }) => {
  console.log(localStorage.getItem("token"));
  if (!localStorage.getItem("token")) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
