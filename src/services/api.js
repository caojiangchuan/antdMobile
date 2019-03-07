import request from '@/utils/request';

export async function fetchBadge(params) {
  return request('/api/fetchBadge', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}
