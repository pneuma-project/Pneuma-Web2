/** @format */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, Route, Redirect, Switch } from "react-router-dom";
import { Layout, Menu } from "antd";
import { hot } from "react-hot-loader";
import Experiment from "./pages/Experiment";
import Members from './pages/Members'
import routes from "./router";
import Lefter from './lefter/Lefter'
import "./App.less";
const loginRoute = routes.find(({ path }) => path === "/login");

class App extends React.Component {
  render() {
    const { auth } = this.props;

    return (
      <div className="App">
        <Layout>
          <Lefter></Lefter>
          <header className='app-top'>
            <span>用户名</span>
          </header>
          <Switch>
            <Route
              exact
              path={loginRoute.path}
              render={() => {
                const Login = loginRoute.component;
                if (auth) {
                  return <Redirect to="/experiment" />;
                }
                return <Login />;
              }}
            />
             <Route
              exact
              path="/members"
              render={() => (auth ? <Members /> : <Redirect to="/login" />)}
            />
            <Route
            exact
              path="/"
              render={() => (auth ? <Members /> : <Redirect to="/login" />)}
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
