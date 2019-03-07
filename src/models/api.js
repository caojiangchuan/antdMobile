import { fetchBadge } from '@/services/api';

export default {
  namespace: 'api',

  state: {
    lifeBadge: 0,
    koubeiBadge: null,
  },

  effects: {
    *fetchBadge({payload}, { call, put }) {
      const response = yield call(fetchBadge,payload);
      yield put({
        type: 'saveFetchBadge',
        payload: response,
      });
    },
  },

  reducers: {
    saveFetchBadge(state, { payload }) {
      return {
        ...state,
        lifeBadge: payload.lifeBadge,
        koubeiBadge: payload.koubeiBadge,
      };
    },
  },
};
