import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { auth as Auth } from "../../utils";
import qs from "qs";
import { Input, message, Button } from "antd";
import axios from "axios";
import Table from '../component/Table'
import PropTypes from "prop-types";
import { connect } from "react-redux";
@withRouter
 class Members extends Component {
  state = {
    params: {
      loginKey: Auth.getToken(),
      key: '',
      currentPageNo: 1,
      pageSize: 10,
      type: 1,
    },
    paginationData: {
      total: 0,
      pageSizes: [10, 20, 30, 50],
      pageSize: 10,
      currentPage: 1,
      sizeChangeHandler: this.sizeChangeHandler,
      currentChangeHandler: this.currentChangeHandler
    },
  };
  sizeChangeHandler(pageSize) {
    this.doChangePage(pageSize, 0);
  }
  currentChangeHandler(currentPage) {
      this.doChangePage(0, currentPage);
  }
  doQueryHandler() {
    this.search = this.state.inputSearch.trim();
    this.doChangePage(0, 1);
  }
  componentDidMount() {
    console.log(this.props)
    
  }

  componentWillMount() {
    this.doChangePage();
  }
  addMember = () => {
    console.log(this.props,'---------->propsss')
    // this.props.history.push('/members/add')
    window.open('/members/add')
  }
  doChangePage (sizeNew = 0, currentPageNew = 0) {
    this.getTableData(sizeNew = 0, currentPageNew = 0)
  }
  
  getTableData (sizeNew = 0, currentPageNew = 0) {
    const { params, paginationData } = this.state
    const obj = {
      ...params,
      pageSize: sizeNew || paginationData.pageSize,
      currentPageNo: currentPageNew || paginationData.currentPage,
    }
    axios .post(
      `http://pneuma-admin.com/pneuma-manager/web/suck/fog/get/train/data`,
      qs.stringify(obj)
    )
    .then((res) => {
      console.log(res)
    })
  }
  render() {
    const {
    
    } = this.state;
    return (
      <div className="wrapper">
       我是会员列表
       <Button onClick={this.addMember}>Add Member</Button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  logIn(userInfo) {
    dispatch(userLogIn(userInfo));
  }
});
export default Members
