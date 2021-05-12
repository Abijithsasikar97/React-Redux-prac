import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { authenticated, showLoading } from "../../redux/action/Learner";

export const LoginForm = (props) => {
  let history = useHistory();

  const { loading, authenticated, showLoading } = props;

  /*
  we can also bind state with useState, am going with simple implementation with antd
  Below are that implementation
  import React from { useState } from "react"; ----imported useState hook which is 
  used to set state or update state-----

  After we want to define the state, below is the implementation
  const [userName, setUserName] = useState(String);
  const [password, setPassword] = useState(String);

  Below is onchange handler function for setting state to both username and password
  const onChangeUserName = (e) => {
      let username = e.target.value;
      setUserName(username);
  }
  const onChangePassword = (e) => {
      let password = e.target.value;
      setPassword(password);
  }

  Below is view part implementation
  <Input onChange={(e) => onChangeUserName(e)} prefix={<UserOutlined className="text-primary" />} />
  <Input.Password onChange={(e) => onChangePassword(e)} prefix={<LockOutlined className="text-primary" />} />

  Below is onLogin function implementation
  const onLogin = () => {
      if(userName && setPassword) {
          history.push("/learnerslist")
      }
  }

  */
  const onLogin = (values) => {
    showLoading();
    if (values != null) {
      setTimeout(() => {
        authenticated(values);
        history.push("/learnerslist")
      }, 2000);
      //   history.push("/home");
    }
  };

  return (
    <Form layout="vertical" name="login-form" onFinish={onLogin}>
      <Form.Item
        name="username"
        label="User Name"
        rules={[
          {
            required: true,
            message: "Please enter your user name",
          },
        ]}
      >
        <Input prefix={<UserOutlined className="text-primary" />} />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please enter your password",
          },
        ]}
      >
        <Input.Password prefix={<LockOutlined className="text-primary" />} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block loading={loading}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  authenticated: (user) => dispatch(authenticated(user)),
  showLoading: () => dispatch(showLoading()),
});


const mapStateToProps = state => ({
    loading: state.loading,
    user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
