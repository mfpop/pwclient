import React from "react";
import { Layout, Tabs } from "antd";

import "../../scss/Admin/pages/SignIn.scss";
import Logo from "../../assets/img/png/logo-dark.png";
import RegisterForm from "../../components/Admin/RegisterForm/RegisterForm";

export default function EngHome() {
  const { Content } = Layout;
  const { TabPane } = Tabs;

  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <h1 className="sign-in__content-logo">
          <img src={Logo} alt="Vector LMD" />
        </h1>
        <div className="sign-in__content-tabs">
          <Tabs type="card">
            <TabPane tab={<span>Enter</span>} key="1">
              Component LoginForm
            </TabPane>
            <TabPane tab={<span>New user</span>} key="2">
              <RegisterForm />
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
}
