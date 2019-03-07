/**
 * description:
 * Notes:
 * @author Terry Wang L
 * @date 2018/11/26
 */
import React from 'react';
import {Grid} from 'antd-mobile';
import router from 'umi/router';

export default class Dashboard extends React.Component {
  data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    text: `菜单${i}`,
  }));

  render() {
    return (
      <div style={{height: '100%', width: '100%'}}>
        <Grid
          data={this.data}
          columnNum={3}
          renderItem={dataItem => (
            <div onClick={() => {
              router.push('/detail');
            }}
            >
              <img src={dataItem.icon} style={{width: '75px', height: '75px'}} alt="" />
              <div style={{color: '#888', fontSize: '14px', marginTop: '12px'}}>
                <span>{dataItem.text}</span>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}
