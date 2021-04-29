import React from "react";
import ReactDom from "react-dom";

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>This info is {props.info}</p>
  </div>
);
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This info is private Do not Share It</p>}
      <WrappedComponent {...props} />
    </div>
  );
};
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuth ? (
        <p>You have the rights to visit the information</p>
      ) : (
        "Please Login to View the Inforamtion"
      )}
      <WrappedComponent {...props} />
    </div>
  );
};
const AuthInfo = requireAuthentication(Info);
const AdminInfo = withAdminWarning(Info);
ReactDom.render(
  <AdminInfo isAdmin={true} info="There are the Details " />,
  document.getElementById("app")
);
ReactDom.render(
  <AuthInfo isAuth={true} info="There are the Details for Auth Info" />,
  document.getElementById("app")
);
