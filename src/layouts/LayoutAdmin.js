import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import MenuTop from "../components/Admin/MenuTop/MenuTop";
import MenuSider from "../components/Admin/MenuSider/MenuSider";
import AdminSignIn from "../pages/Admin/SignIn";

import "../scss/pages/LayoutAdmin.scss";

export default function LayoutAdmin(props) {
  const { routes } = props;
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Footer, Content } = Layout;

  const user = null;
  if (!user) {
    return (
      <>
        <Route path="/admin/login" component={AdminSignIn} />
        <Redirect to="/admin/login" />
      </>
    );
  }

  return (
    <Layout className="layout-admin">
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout
        className="layout-admin"
        style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
      >
        <Header className="layout-admin__header">
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content className="layout-admin__content">
          <Switch>
            <LoadRoutes routes={routes} />
          </Switch>
        </Content>
        <Footer className="layout-admin__footer">Vector LMD</Footer>
      </Layout>
    </Layout>
  );
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
    </Switch>
  );
}
