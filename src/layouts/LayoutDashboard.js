import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";

import "../scss/pages/LayoutAdmin.scss";

export default function LayoutDashboard(props) {
  const { routes } = props;
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Layout>
      <Header>Menu Dashboard</Header>
      <Layout>
        <Sider>Side menu for Dashboard pages</Sider>
        <Content>
          <Switch>
            <LoadRoutes routes={routes} />
          </Switch>
        </Content>
        <Footer>Vector LMD</Footer>
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
