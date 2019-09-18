/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 14:23:28
 * @LastEditTime: 2019-08-28 14:23:28
 * @LastEditors: your name
 */
import React, { Component } from 'react';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actionCreators   from '../../store/actionCreators';
import axios from 'axios';

class Login extends Component {
    render() {
       const { loginStatus } = this.props;
        if(!loginStatus) {
            return (
                <LoginWrapper>
                  <LoginBox>
                      <Input placeholder="请输入用户名或手机号" ref={(input) => {this.account = input}}/>
                      <Input placeholder="请输入密码" type='password' ref={(input) => {this.password = input}}/>
                      <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
                  </LoginBox>
                </LoginWrapper>
              )
        }else {
            return <Redirect to='/'/>
        } 
    }
}

const mapState = (state) => ({
    loginStatus: state.login.get('login')
});

const mapDispathToProps = (dispatch) => ({
    login(accountElem, passwordElem) {
        const account = accountElem.value;
        const password = passwordElem.value;
        axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
            const result = res.data.data;
            if (result) {
               dispatch(actionCreators.changeLogin());
            } else {
                alert("请输入正确的账号或密码");
            }
        })
    }
});

export default connect(mapState, mapDispathToProps)(Login);