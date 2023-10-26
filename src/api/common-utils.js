const AUTH_TOKEN = 'token';

function getTokenFromCookies() {
  return localStorage.getItem(AUTH_TOKEN) || '';
}

function setTokenIntoCookies(token) {
  localStorage.setItem(AUTH_TOKEN, token);
}

function flushTokenFromCookies() {
  localStorage.removeItem(AUTH_TOKEN);
}

function getAuthorizationHeader() {
  return `Bearer ${getTokenFromCookies()}`;
}

function headerAuthorization(instance) {
  return {
    headers: { Authorization: getAuthorizationHeader() },
    cancelToken: instance.cancelToken,
  };
}

module.exports = {
  getTokenFromCookies,
  setTokenIntoCookies,
  flushTokenFromCookies,
  getAuthorizationHeader,
  headerAuthorization,
};
