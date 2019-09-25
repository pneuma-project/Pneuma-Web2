import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { auth as Auth } from "../../utils";
import qs from "qs";
import { Input, message, Button, DatePicker, Radio   } from "antd";
import axios from "axios";
import Table from '../component/Table'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PrimaryLayout from "../../layouts/PrimaryLayout";
import { MD5 } from "../../utils";
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
    const {name, sex, relationship, height, weight,race, birthday,phone,password,loginKey} = this.state
    const params ={
        loginKey,   
        name,
        sex,
        relationship,
        height,      
        weight, 
        race ,
        birthday,     
        phone,        
        password,
    }
    console.log(params,'--------->params')
    axios .post(
      `http://pneuma-admin.com/pneuma-manager/web/login/save/patient/account`,
      qs.stringify(params)
    )
    .then((res) => {
      console.log(res)
      if(res.data.success) {
        message.success('add member success!');
        this.props.history.push('/members')
      } else {
        message.error('This is an error request');
      }   
    })
    .catch(err =>{
      message.error('This is an error request');
    })
  }
  dateChangeHandler = (date, dateString) => {
    console.log(date, dateString);
    this.setState({
      birthday: dateString
    })
  }
  sexChangeHandler = (e) => {
    this.setState({
      sex: e.target.value,
    });
  }

  inputChangeHandler(type, e) {
    if(e.target.value === 'password'){
      this.setState({
        [type]: e.target.value.MD5(16)
      })
    } else {
      this.setState({
        [type]: e.target.value
      })
    }
  }
  render() {
    const {
      name, sex, relationship, height, weight,race, birthday,phone,password,
    } = this.state;
    // const inputArr = [ name, sex, relationship, height, weight,race, birthday,phone,password, ]
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
             <Radio.Group onChange={this.sexChangeHandler} value={sex}>
              <Radio value={1}>Male</Radio>
              <Radio value={2}>Female</Radio>
            </Radio.Group>
        <h4>relationship:</h4>
        <Input
          type="text"
          placeholder=""
          maxLength={32}
          value={relationship}
          onChange={(value) => {
              this.inputChangeHandler('relationship', value);
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
         <h4>birthday:</h4>
         <DatePicker onChange={this.dateChangeHandler} />
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
      <Button type='primary' onClick={this.addMember} style={{marginTop:'16px'}}>Submit</Button>
      </div>
      // </div>
    );
  }
}

export default AddMember
