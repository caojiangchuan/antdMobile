// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  'POST /login/account': (req, res) => {
    const { password, userName } = req.body;
    console.log(`/login/account: userName:[${userName}],password:[${password}]`);
    if (password === '888888' && userName === 'admin') {
      res.send({
        status: 'ok',
        role: 'admin',
        token: 'token',
        userId: 1,
      });
    }
    else if(password === '123456' && userName === 'areaAdmin') {
      res.send({
        status: 'ok',
        role: 'areaAdmin',
        token: 'token',
        userId: 2,
      });
    }
    else if(password === '654321' && userName === 'browser') {
      res.send({
        status: 'ok',
        role: 'browser',
        token: 'token',
        userId: 3,
      });
    }else{
      res.send({
        status: 'nok',
        role: 'browser',
        token: '',
        userId: -1,
      });
    }
  },
};
