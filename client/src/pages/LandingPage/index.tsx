import React, { FormEvent } from "react";
import "antd/dist/antd.css";
import { Form, Icon, Input, Button, Layout, Card, Typography, notification, message } from "antd";
import { Redirect } from "react-router-dom";
import axios from "../../config/axios";
import { AppConsumer } from '../../context';
import { Context } from '../../config/types';
import { setUser } from '../../context/actions';


export interface LandingPageProps {
  form: any,
  state: Context,
  dispatch: Function
};
 
const LandingPageLoginView: React.SFC<LandingPageProps> = (props) => {

  const handleSubmit = async (e : FormEvent) => {
    e.preventDefault();

    props.form.validateFields(async (err : any, values : any) => {
      if (!err) {
        try {
          const { email, password } = values;
          const payload = { email, password }
          const result = await axios.post('auth/login', payload);
          props.dispatch(setUser(result.data.accountId))
          console.dir(result);
          notification.success({message: 'Welcome!', duration: 3})
        }
        catch (err) {
          message.error('Unable to log in. Please check yourself.')
        }
      }
    });
  };

  const { getFieldDecorator } = props.form;

  return (
    <React.Fragment>
      {props.state.user && <Redirect to="/home" />}
      <Layout style={{ backgroundColor: "#001529", height: '100vh', width: '100vw' }}>
        <div style={{ margin: "auto", textAlign: "center" }}>
          <Card size="default">
            <Typography.Title level={3}>Log In</Typography.Title>
            <Form onSubmit={handleSubmit} style={{ maxWidth: 300 }}>
              <Form.Item>
                {getFieldDecorator("email", {
                  rules: [
                    { required: true, message: "Please input your email." }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Email"
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
 
const LandingPageForm = Form.create()(LandingPageLoginView);

export interface LandingPageContainerProps {
  
}
 
const LandingPageContainer: React.SFC<LandingPageContainerProps> = () => {
  return ( 
    <AppConsumer>
      {(ctx: any) => <LandingPageForm {...ctx} />}
    </AppConsumer>
   );
}
 
export default LandingPageContainer;