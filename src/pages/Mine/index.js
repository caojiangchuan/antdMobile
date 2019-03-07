/**
 * description:
 * Notes:
 * @author Terry Wang L
 * @date 2018/11/26
 */
import React from 'react';
import {connect} from 'dva';
import {Button} from 'antd-mobile';

@connect(({user})=>({user}))
class Mine extends React.Component {
  logout=()=>{
    const { dispatch } = this.props;
    dispatch({
      type: 'user/logout',
    });
  }

  render() {
    return (
      <div style={{width:'100%',height:'100%',backgroundColor: 'blue'}}>
        <Button
          type="warning"
          onClick={this.logout}
        >退出
        </Button>
      </div>
    );
  }
}

export default Mine;
