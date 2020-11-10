import React from "react";
import { Link } from "react-router-dom";
import "../../../scss/Admin/Components/MenuTop.scss";
import logo from "../../../assets/img/png/logo-dark.png";
import { Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <Link to={"/"}>
          <img className="menu-top__left-logo" src={logo} alt="Vector LMD" />
        </Link>

        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <div className="menu-top__right"></div>
      <div className="menu-top__right">
        <Button type="link" onClick={() => console.log("logout")}>
          <PoweroffOutlined />
          logout
        </Button>
      </div>
    </div>
  );
}
