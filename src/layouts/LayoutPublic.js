import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";

import "../scss/pages/LayoutPublic.scss";

export default function LayoutPublic(props) {
  const { routes } = props;
  const { Content, Footer } = Layout;
  return (
    <Layout>
      <h2>Menu for Public pages</h2>
      <Layout>
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
