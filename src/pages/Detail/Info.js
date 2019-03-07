/**
 * description:
 * Notes:
 * @author Terry Wang L
 * @date 2018/11/26
 */
import React from 'react';
import {NavBar, Icon, Button} from 'antd-mobile';
import router from 'umi/router';

export default class Info extends React.PureComponent {
  state={};

  render() {
    return (
      <div style={{width: '100%', height: '100%'}}>
        <NavBar
          style={{width: '100%', height: '10%'}}
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => {
            router.push('/main/dashboard');
          }}
          rightContent={[
            <Icon
              key="0"
              type="search"
              style={{
                marginRight:
                  '16px'
              }}
            />,
            <Icon key="1" type="ellipsis" />
          ]}
        >返回
        </NavBar>
        <Button
          type="primary"
          onClick={() => {
          router.push('/main/friend');
        }}
        >返回
        </Button>
      </div>
    );
  }
}
