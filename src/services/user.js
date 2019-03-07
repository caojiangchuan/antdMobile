import request from '@/utils/request';

export async function login(params) {
  return request('/login/account', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}
