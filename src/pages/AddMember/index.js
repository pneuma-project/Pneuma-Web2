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
import PrimaryLayout from "../../layouts/PrimaryLayout";
@withRouter
 class AddMember extends Component {
  state = {
    loginKey: Auth.getToken(),   
    name: '',
    sex: '',
    age: '',
    height: '',      
    weight: '', 
    race : '',
    birthday: '',     
    phone: '',        
    password: '',
    relationship: '', 
    checkSum: ''
  };
  
  componentDidMount() {
    console.log(this.props)
    
  }

  componentWillMount() {
    
  }
  addMember = () => {
    
  }
  inputChangeHandler(type, value) {
    this.setState({
      [key]: value
    })
  }
  render() {
    const {
      name, sex, age, height, weight,race, birthday,phone,password,
    } = this.state;
    // const inputArr = [ name, sex, age, height, weight,race, birthday,phone,password, ]
    return (
      // <div>
      // <div className='page-nav'>
      // <div className='page-back' onClick={this.goBackHandler}>
      //     <i className='back-circle'></i>
      //     <span>返回人群列表</span>
      // </div>
      // <p className='page-name'>标签筛选</p>
      // </div>
      <div className="wrapper">
       <h3>Add Member</h3>
       <div className='member-form'>
        <h4>name:</h4>
        <Input
          type="text"
          placeholder=""
          maxLength={32}
          value={name}
          onChange={(value) => {
              this.inputChangeHandler('name', value);
          }}
        /> 
        <h4>sex:</h4>
        <Input
          type="text"
          placeholder=""
          maxLength={32}
          value={sex}
          onChange={(value) => {
              this.inputChangeHandler('sex', value);
          }}
        />
        <h4>age:</h4>
        <Input
          type="text"
          placeholder=""
          maxLength={32}
          value={age}
          onChange={(value) => {
              this.inputChangeHandler('age', value);
          }}
        />
          <h4>height:</h4>
        <Input
          type="text"
          placeholder=""
          maxLength={32}
          value={height}
          onChange={(value) => {
              this.inputChangeHandler('height', value);
          }}
        />
         <h4>weight:</h4>
        <Input
          type="text"
          placeholder=""
          maxLength={32}
          value={weight}
          onChange={(value) => {
              this.inputChangeHandler('weight', value);
          }}
        />
          <h4>race:</h4>
        <Input
          type="text"
          placeholder=""
          maxLength={32}
          value={race}
          onChange={(value) => {
              this.inputChangeHandler('race', value);
          }}
        />
         <h4>phone:</h4>
        <Input
          type="text"
          placeholder=""
          maxLength={32}
          value={phone}
          onChange={(value) => {
              this.inputChangeHandler('phone', value);
          }}
        />
         <h4>password:</h4>
        <Input
          type="text"
          placeholder=""
          maxLength={32}
          value={password}
          onChange={(value) => {
              this.inputChangeHandler('password', value);
          }}
        />
      </div>
      <Button type='primary' onClick={this.addMember}>Submit</Button>
      </div>
      // </div>
    );
  }
}

export default AddMember
