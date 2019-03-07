/**
 * description: Login page
 * Notes:
 * @author Terry Wang L
 * @date 2018/11/26
 */
import React from 'react';
import { connect } from 'dva';
import {  Button, WhiteSpace, WingBlank, InputItem, Toast } from 'antd-mobile';

@connect(({user})=>({
  status: user.status,
}))
class Login extends React.Component {
  state={
    userName: '',
    password: '',
  };

  onErrorClick = () => {
    Toast.info('帐号或者密码错误!');
  }

  onAccountChange = (e) => {
    this.setState({ userName: e });
  }

  onPasswordChange = (e) => {
    this.setState({password: e});
  }

  login=()=>{
    const { userName, password } = this.state;
    const { dispatch } = this.props;
    dispatch({
      type: 'user/login',
      payload:{
        userName,
        password,
      }
    });
  }

  render() {
    const { status } = this.props;
    return (
      <WingBlank>
        <InputItem
          type="text"
          placeholder="请输入帐号(admin)"
          error={status === 'nok'}
          onErrorClick={this.onErrorClick}
          onChange={(e)=>{this.onAccountChange(e);}}
        >帐号
        </InputItem>
        <InputItem
          type="password"
          placeholder="请输入密码(888888)"
          error={status === 'nok'}
          onErrorClick={this.onErrorClick}
          onChange={(e)=>{this.onPasswordChange(e)}}
        >密码
        </InputItem>
        <WhiteSpace />
        <Button type="primary" onClick={()=>{this.login();}}>登录</Button>
      </WingBlank>
    );
  }
}

export default Login;
