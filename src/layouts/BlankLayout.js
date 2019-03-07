/**
 * description:
 * Notes:
 * @author Terry Wang L
 * @date 2018/11/26
 */
import React from 'react';

export default class BlankLayout extends React.PureComponent{

  render(){
    const{children} = this.props;
    return (
      <div style={{
        backgroundColor: 'blue',
        position: 'fixed',
        height: '100%',
        width: '100%',
        top: 0
      }}
      >
        {children}
      </div>
    );
  }
}

