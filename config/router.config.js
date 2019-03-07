export default [
  // user
  {
    path: '/detail',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'areaAdmin','browser'],
    component: '../layouts/BlankLayout',
    routes: [
      { path: '/detail', redirect: '/detail/info' },
      { path: '/detail/info', component: './Detail/Info' }
    ],
  },
  {
    path: '/exception',
    routes: [
      // exception
      {
        path: '/exception/403',
        component: './Exception/403',
      },
      {
        path: '/exception/404',
        component: './Exception/404',
      },
      {
        path: '/exception/500',
        component: './Exception/500',
      },
    ],
  },
  // app
  {
    path: '/main',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'areaAdmin','browser'],
    component: '../layouts/BasicLayout',
    routes: [
      // dashboard
      { path: '/main', redirect: '/main/dashboard' },
      {path: '/main/dashboard', component: './Dashboard/index'},
      {path: '/main/koubei', component: './Koubei/index'},
      {path: '/main/friend', component: './Friend/index'},
      {path: '/main/mine', component: './Mine/index'},
    ],
  },
  {
    path: '/',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' }
    ],
  },
  {
    component: './Exception/404',
  },
];
