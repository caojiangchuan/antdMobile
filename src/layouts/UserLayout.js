import React  from 'react';
import Link from 'umi/link';
import GlobalFooter from '@/components/GlobalFooter';
import styles from './UserLayout.less';
import logo from '../assets/logo.svg';
import cr from '../assets/copyright.png';

const links = [
  {
    key: 'help',
    title: '帮助',
    href: '',
  },
  {
    key: 'privacy',
    title: '隐私',
    href: '',
  },
  {
    key: 'terms',
    title: '查看',
    href: '',
  },
];

const copyright = (
  <>
    Copyright <img alt="" src={cr} width={12} height={12} /> 2018 思捷科技
    </>
);

class UserLayout extends React.PureComponent {

  render() {
    const { children } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                <img alt="logo" className={styles.logo} src={logo} />
                <span className={styles.title}>手机模板</span>
              </Link>
            </div>
            <div className={styles.desc}>ant design mobile pro tidy template</div>
          </div>
          {children}
        </div>
        <GlobalFooter links={links} copyright={copyright} />
      </div>
    );
  }
}

export default UserLayout;
