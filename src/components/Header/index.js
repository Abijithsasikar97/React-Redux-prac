import React from "react";
import { Layout, Avatar } from "antd";
import { LoginOutlined, UserOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { logOut } from "../../redux/action/Learner";

const { Header } = Layout;

export const HeaderNav = (props) => {
  const { user, logOut } = props;
  const logout = () => {
    logOut();
    window.location.href = "/";
  };

  return (
    <Header style={{ backgroundColor: "#ededed" }}>
      <div>
        <h2
          className={user.username ? "nav-left text-primary" : "text-primary"}
        >
          {user.username && <UserOutlined />}
          {!user.username ? ` Learners List` : user.username}
        </h2>
        {user.username && (
          <h3
            onClick={() => logout()}
            className=" nav-right pointer text-primary"
          >
            Logout <LoginOutlined />
          </h3>
        )}
      </div>
    </Header>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut()),
});

const mapStateToProps = state => ({
    user: state.user,
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);
