import React from "react";
import { Form, Input, Checkbox, Button, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "../../../scss/Admin/Components/RegisterForm.scss";

export default function RegisterForm() {
  return (
    <Form className="register-form">
      <Form.Item>
        <Input
          prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="email"
          name="email"
          placeholder="email"
          className="register-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          name="password"
          placeholder="password"
          className="register-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          name="repeatPassword"
          placeholder="confirm password"
          className="register-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Checkbox name="privacyPolicy">I accept the privacy policy</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="register-form__submit">
          Creat account
        </Button>
      </Form.Item>
    </Form>
  );
}
