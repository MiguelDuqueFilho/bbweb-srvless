import React from "react";
import "./Menu.css";
import If from "../../common/operator/if";
import MenuAdm from "./MenuAdm";
import MenuClient from "./MenuClient";
import MenuPartner from "./MenuPartner";

// import MenuTree from "../MenuTree/MenuTree";

export default function Menu(props) {
  return (
    <>
      <If test={props.userType === 1}>
        <MenuAdm />
      </If>
      <If test={props.userType === 2}>
        <MenuClient />
      </If>
      <If test={props.userType === 3}>
        <MenuPartner />
      </If>
    </>
  );
}
