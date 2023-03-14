import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { userContext } from "../../context/user.context";
import { userSignOut } from "../../util/models/user";
import "./navigation.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const NavigationBar = () => {
  const { currentUser, setCurrentUser } = useContext(userContext);
  const signOutHandler = async () => {
    await userSignOut();
    setCurrentUser(null);
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SignOut
            </span>
          ) : (
            <Link className="nav-link" to={"/sign-up"}>
              Sign Up
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
