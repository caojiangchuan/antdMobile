import { login } from '@/services/user';
import { defaultKeys, setItem, clearItem } from '@/utils/utils';
import { routerRedux } from 'dva/router';
import { setAuthority } from '@/utils/authority';
import { reloadAuthorized } from '@/utils/Authorized';

export default {
  namespace: 'user',

  state: {
    status: undefined,
  },

  effects: {
    *login({payload}, { call, put }) {
      const response = yield call(login,payload);
      yield put({
        type: 'saveLogin',
        payload: response,
      });
      if (response.status === 'ok') {
        reloadAuthorized();
        yield put(routerRedux.replace('/main/dashboard'));
      }
    },
    *logout(_, { put }) {
      yield put({
        type: 'saveLogout',
        payload: {
          status: false,
        },
      });
      reloadAuthorized();
      yield put(
        routerRedux.replace('/user/login')
      );
    },
  },

  reducers: {
    saveLogin(state, { payload }) {
      setAuthority(payload.role);
      setItem(defaultKeys.userId,payload.userId);
      setItem(defaultKeys.token,payload.token);
      setItem(defaultKeys.authorities,payload.authorities);
      return {
        ...state,
        status: payload.status,
      };
    },
    saveLogout(state, { payload }){
      setAuthority('guest');
      return {
        ...state,
        status: payload.status,
      };
    }
  },
};
