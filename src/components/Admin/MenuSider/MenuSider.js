import React from "react";
import { Link } from "react-router-dom";
import "../../../scss/Admin/Components/MenuSider.scss";
import { Layout, Menu } from "antd";
import { HomeOutlined, MenuOutlined } from "@ant-design/icons";

export default function MenuSider(props) {
  const { menuCollapsed } = props;
  const { Sider } = Layout;

  return (
    <Sider className="admin-sider" collapsed={menuCollapsed}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to={"/admin"}>
            <HomeOutlined />
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={"/gen"}>
            <MenuOutlined />
            <span className="nav-text">General activities</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={"/eng"}>
            <MenuOutlined />
            <span className="nav-text">Engineering</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
