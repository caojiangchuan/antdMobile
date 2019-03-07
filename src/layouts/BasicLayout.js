/**
 * description: BasicLayout of the menu page
 * Notes:
 * @author Terry Wang L
 * @date 2018/11/26
 */
import React from 'react';
import {connect} from 'dva';
import {TabBar} from 'antd-mobile';
import router from 'umi/router';
import {getItem, defaultKeys} from '../utils/utils';

@connect(({api}) => ({
  lifeBadge: api.lifeBadge,
  koubeiBadge: api.koubeiBadge,
}))
class BasicLayout extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    dispatch({
      type: 'api/fetchBadge',
      payload: {
        userId: getItem(defaultKeys.userId),
      }
    });
  }

  render() {
    const {children, lifeBadge, koubeiBadge, match, location} = this.props;
    const selectedTab = location.pathname.replace(`${match.path}/`, '');
    return (
      <div style={{
        backgroundColor: 'white',
        position: 'fixed',
        height: '100%',
        width: '100%',
        top: 0
      }}
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="Life"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
            }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
            }}
            />
            }
            selected={selectedTab === 'dashboard'}
            badge={lifeBadge}
            onPress={() => {
              router.push('/main/dashboard');
            }}
          >
            {children}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            title="Koubei"
            key="Koubei"
            badge={koubeiBadge}
            selected={selectedTab === 'koubei'}
            onPress={() => {
              router.push('/main/koubei');
            }}
          >
            {children}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            title="Friend"
            key="Friend"
            dot
            selected={selectedTab === 'friend'}
            onPress={() => {
              router.push('/main/friend');
            }}
          >
            {children}
          </TabBar.Item>
          <TabBar.Item
            icon={{uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg'}}
            selectedIcon={{uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg'}}
            title="Mine"
            key="Mine"
            selected={selectedTab === 'mine'}
            onPress={() => {
              router.push('/main/mine');
            }}
          >
            {children}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default BasicLayout;
