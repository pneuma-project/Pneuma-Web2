import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, Route, Redirect, Switch } from "react-router-dom";
import { Layout, Menu } from "antd";
import routes from "../router";
import Lefter from '../lefter/Lefter'
const pathname = window.location.pathname
import { userLogOut } from "../redux/actions";
class PrimaryLayout extends React.Component {
  handleLogOut = (e) => {
    e.preventDefault()
    this.props.logOut()
    // axios.put('/login/logout').then((res) => {
    //   message.success('退出成功')
    //   this.props.logOut()
    // })
  }
  
  render() {
    return (
      <div className="App">
        <Layout>
          <Lefter></Lefter>
          <header className='app-top'>
            <span onClick={this.handleLogOut}>用户名</span>
          </header>
          <Switch>
           {routes.filter(item => item.path !== '/login').map(item => (
             <Route key={item.path} path={item.path} exact component={item.component} />
           ))}
                  <Redirect to={pathname}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

PrimaryLayout.propTypes = {
  // history: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  logOut() {
    dispatch(userLogOut())
  }
})

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(PrimaryLayout)
)