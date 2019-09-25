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
    loading: false,
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
    memberList: [],
    tableColumns: [
      {
        title: 'name',
        prop: 'name',
        // width: 100,
        // fixed: 'left',
        render: (text, record, index) => {
          return <span>{text.name}</span>
        }
      }, 
      {
        title: 'sex',
        prop: 'sex',
        // width: 100,
        render: (text, record, index) => {
          return <span>{text.sex}</span>
        }
      }, 
      {
        title: 'age',
        prop: 'age',
        render: (text, record, index) => {
          return <span>{text.age}</span>
        }
      }, 
      {
        title: 'race',
        prop: 'race',
        render: (text, record, index) => {
          return <span>{text.race}</span>
        }
      }, 
      {
        title: 'phone',
        prop: 'phone',
        render: (text, record, index) => {
          return <span>{text.phone}</span>
        }
      }, 
      {
        title: 'action',
        prop: 'action',
        labelClassName: 'operate',
        render: data => {
          return (
            <a
            href="javascript:;"
            onClick={() => {
                this.memberDetailHandler(data);
            }}
            >Information
            </a>
          )
        }
    } 
    ]
  };
  memberDetailHandler(data) {
    const { actions } = this.props;
    const { experimentRange } = this.state;
    const url = `name=${data.name}&phone=${data.phone}`;
    this.props.history.push(`/experiment?${url}`)
    // actions.push(`/rule/detail?${encodeURIComponent(url)}`);
}
  sizeChangeHandler(pageSize) {
    this.doChangePage(pageSize, 0);
  }
  currentChangeHandler(currentPage, pageSize, self) {
    self.doChangePage(0, currentPage);
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
    this.setState({
      loading: true
    })
    const { params, paginationData } = this.state
    const obj = {
      ...params,
      pageSize: sizeNew || paginationData.pageSize,
      currentPageNo: currentPageNew || paginationData.currentPage,
    }
    console.log(obj)
    axios .post(
      `http://pneuma-admin.com/pneuma-manager/web/login/get/patient/info`,
      qs.stringify(obj)
    )
    .then((res) => {
      if(res.data.result) {
        const {pageSize, totalPage, totalRecord, currentPageNo, list } = res.data.result; 
        console.log(res, list)
        this.setState({
          paginationData: Object.assign({}, paginationData, {
              total: totalRecord,
              pageSize: sizeNew || paginationData.pageSize,
              currentPage: sizeNew ? 1 : currentPageNew || paginationData.currentPage
          }),
          memberList: list,
          loading: false
      });
      
      } else {
        message.error('This is an error request');
        this.setState({
          loading: false
        })
      }
    
    }).catch(err => {
      console.log(err,'列表请求出错')
      this.setState({
        loading: false
      })
    })
  }

  searchChangeHandler = (value) => {
    const { params } = this.state;
    this.setState({
        params: Object.assign(params, {
          key: value || ''
        })
    },() => {
      this.doChangePage()
    });
  }
  render() {
    const {
      memberList, 
      tableColumns,
      paginationData,
      loading
    } = this.state;
    const {Search } = Input
    return (
      <div className="wrapper member-list-wrap">
        <Button 
          onClick={this.addMember} 
          type="primary"
          icon='plus'
          style={{marginBottom: '24px'}}
        >Add Member</Button>
        <div className='search-box'>
          <span className='mem-text'>Search Member：</span>
         <Search placeholder="input search text" onSearch={this.searchChangeHandler} enterButton />
         </div>
        <Table
          key="audience-table"
          wrapperCls="tableList"
          emptyWrapperCls="antd-no-tabList"
          // scroll={2000}
          data={memberList}
          columns={tableColumns}
          loading={loading}
          paginationCls="pagination-wrapper"
          self={ this}
          paginationData={paginationData}
          highlightCurrentRow={true}
          // selectChangeHandler={selectChangeHandler}
          // setRowClassName={setRowClassName}
          emptyDataText={'no data'}
        />
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
