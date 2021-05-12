import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "antd";
import LoginForm from "./LoginForm";

const divContainerStyle = {
  height: "100vh",
  backgroundColor: "#afc9e1",
  backgroundSize: "cover",
};

export const Login = () => {
  return (
    <div style={divContainerStyle}>
      <div className="container d-flex flex-column justify-content-center h-100">
        <Row justify="center">
          <Col xs={20} sm={20} md={20} lg={7}>
            <Card>
              <div className="margin-top">
                <div style={{textAlign: 'center'}}>
                  <h1>Login</h1>
                </div>
                <Row justify="center">
                  <Col xs={24} sm={24} md={20} lg={20}>
                    <LoginForm />
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
