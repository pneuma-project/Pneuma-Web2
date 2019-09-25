/** @format */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, Route, Redirect, Switch } from "react-router-dom";
import { Layout, Menu } from "antd";
import { hot } from "react-hot-loader";
import routes from "./router";
import "./App.less";
import PrimaryLayout from './layouts/PrimaryLayout'
const loginRoute = routes.find(({ path }) => path === "/login");
class App extends React.Component {
  render() {
    const { auth } = this.props;

    return (
      <div>
        <Layout>
          <Switch>
          <Route
              exact
              path={loginRoute.path}
              render={() => {
                const Login = loginRoute.component
                if (auth) {
                  return <Redirect to="/members" />
                }
                return <Login />
              }}
            />
            <Route
              path="/"
              render={() =>
                auth ? <PrimaryLayout /> : <Redirect to="/login" />
              }
            />
          </Switch>
        </Layout>
      </div>
    );
  }
}

App.propTypes = {
  auth: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.token !== ""
  };
}

const WithRouterAPP = withRouter(connect(mapStateToProps)(App));
// withRouter 必须添加 不然无法响应路由变化: https://reacttraining.com/react-router/web/guides/redux-integration
export default hot(module)(WithRouterAPP);
