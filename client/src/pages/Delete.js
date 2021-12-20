import React from "react";
import DeleteForm from "../components/Delete/DeleteForm";
import DeleteOauth from "../components/Delete/DeleteOauth";
import DeleteAccount from "../components/Delete/DeleteAccount";
import { useSelector } from "react-redux";

const Delete = () => {
  const loginUserInfo = useSelector((state) => state.loginUserInfo);

  return (
    <div>
      {loginUserInfo.signup_method &&
      loginUserInfo.signup_method === "Normal" ? (
        <DeleteForm />
      ) : loginUserInfo.signup_method &&
        loginUserInfo.signup_method !== "Normal" ? (
        <DeleteOauth />
      ) : (
        <DeleteAccount />
      )}
    </div>
  );
};

export default Delete;
