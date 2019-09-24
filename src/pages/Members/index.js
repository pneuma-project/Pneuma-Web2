import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
@withRouter
 class Members extends Component {
  state = {
   
  };

  
  componentDidMount() {
    debugger
  }

 
  render() {
    const {
    
    } = this.state;
    return (
      <div className="wrapper">
       我是会员列表
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  logIn(userInfo) {
    dispatch(userLogIn(userInfo));
  }
});
export default connect(
  null,
  mapDispatchToProps
)(Members);
