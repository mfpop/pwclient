import React from "react";
import { useState } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "../../../scss/Admin/Components/RegisterForm.scss";

export default function RegisterForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false,
  });
  const [formValid, setFormValid] = useState({
    email: false,
    password: false,
    repeatPassword: false,
    privacyPolicy: false,
  });

  const changeForm = (e) => {};

  const inputValidation = (e) => {
    const { type, name } = e.target;
  };

  const register = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <Form className="register-form" onSubmit={register} onChange={changeForm}>
      <Form.Item>
        <Input
          prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="email"
          name="email"
          placeholder="email"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.email}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          name="password"
          placeholder="password"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.password}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          name="repeatPassword"
          placeholder="confirm password"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.repeatPassword}
        />
      </Form.Item>
      <Form.Item>
        <Checkbox name="privacyPolicy" checked={inputs.privacyPolicy}>
          I accept the privacy policy
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="register-form__button">
          Submit request
        </Button>
      </Form.Item>
    </Form>
  );
}
