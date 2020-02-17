import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Icon, Input, Button, Layout, Card, Typography } from "antd";
import { NavLink, Redirect } from "react-router-dom";

export interface LandingPageProps {
  form: any,
  login: any,
  user: any
};
 
const LandingPage: React.SFC<LandingPageProps> = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e : any) => {
    e.preventDefault();
    // props.form.validateFields((err : any, values : any) => {
    //   if (!err) {
    //     props.login(values.username, values.password);
    //   }
    // });
    setLoggedIn(true)
  };

  const { getFieldDecorator } = props.form;

  return (
    <React.Fragment>
      {loggedIn && <Redirect to="/home" />}
      <Layout style={{ backgroundColor: "#001529", height: '100vh', width: '100vw' }}>
        <div style={{ margin: "auto", textAlign: "center" }}>
          <Card size="default">
            <Typography.Title level={3}>Log In</Typography.Title>
            <Form onSubmit={handleSubmit} style={{ maxWidth: 300 }}>
              <Form.Item>
                {getFieldDecorator("username", {
                  rules: [
                    { required: true, message: "Please input your username." }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Username"
                  />
                )}
              </Form.Item>

              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your Password." }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                )}
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  Log In
                </Button>
                <Button
                  type="ghost"
                  style={{ width: "100%" }}
                >
                  Or Claim Your Account
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </Layout>
    </React.Fragment>
  );
}
 
export default Form.create()(LandingPage);