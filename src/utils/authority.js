import {defaultKeys} from './utils';

// use sessionStorage to store the authority info, which might be sent from server in actual project.
export function getAuthority(str) {
  // return sessionStorage.getItem('antd-pro-authority') || ['admin', 'user'];
  const authorityString =
    typeof str === 'undefined' ? sessionStorage.getItem(defaultKeys.role) : str;
  // authorityString could be admin, "admin", ["admin"]
  let authority;
  try {
    authority = JSON.parse(authorityString);
  } catch (e) {
    authority = authorityString;
  }
  if (typeof authority === 'string') {
    return [authority];
  }
  return authority || ['admin'];
}

export function setAuthority(authority) {
  const proAuthority = typeof authority === 'string' ? [authority] : authority;
  return sessionStorage.setItem(defaultKeys.role, JSON.stringify(proAuthority));
}
