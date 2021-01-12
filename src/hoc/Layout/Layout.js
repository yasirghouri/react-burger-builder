import React, { useState } from "react";
import { connect } from "react-redux";

import Aux from "../Auxiliary/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <Aux>
      <Toolbar
        drawerToggleClicked={sideDrawerToggleHandler}
        isAuth={props.isAuthenticated}
      />
      <SideDrawer
        open={showSideDrawer}
        closed={sideDrawerClosedHandler}
        isAuth={props.isAuthenticated}
      />

      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

const mapPropsToState = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapPropsToState)(Layout);
