// import { constRoute } from '../utils/route/index'
import axios from 'axios'
import { camelCase, isArray, isObject, mapKeys, mapValues } from 'lodash'
import { notification } from '../utils/notifications'
import { flushTokenFromCookies } from './common-utils'

const tokenSources = {};

function pushToLoginOrRegister() {
  flushTokenFromCookies();
  const nextUrl = window.location.pathname + window.location.search;
  const isJWT = window.location.search.includes('jwtToken=');
  if (
    window.location.pathname !== '/login' &&
    window.location.pathname !== '/register' &&
    !isJWT
  ) {
    localStorage.setItem('nextUrl', nextUrl);
  }
  window.location.href = '/login';
}

async function onCancelRequest(config) {
  if (config.cancelToken) {
    const key = config.url;
    let tokenSource = tokenSources[key ?? 0];
    if (tokenSource && tokenSource?.cancel) {
      tokenSource?.cancel('Operation canceled due to new request');
    }
    tokenSource = axios.CancelToken.source();
    config.cancelToken = tokenSource.token;
    tokenSources[key ?? 0] = tokenSource;
  }
  return config;
}

async function onError(error, errorList) {
  let throwError = true;
  if (axios.isCancel(error)) {
    console.warn(error);
    return Promise.resolve({ data: { isCancel: true } });
  }

  const { response } = error;
  if (!response) {
    notification.info('Something went wrong.');
  } else if (response.status === 401) {
    if (window.location.pathname !== '/login') {
      notification.info('Your session has expired. Please login again.');
      pushToLoginOrRegister();
    }
  } else {
    const { status, data } = response;
    if (errorList && errorList?.length) {
      const errorItem = errorList
        .filter((err) => err.statusCode === status && err.errorCode === data.code)
        .pop();
      if (errorItem) {
        throwError = false;
        notification.info(errorItem.message);
      }
    }
  }

  if (throwError) {
    throw error;
  }
}

function keysToCamelCase(obj) {
  if (isArray(obj)) {
    return obj.map(keysToCamelCase);
  }

  if (!isObject(obj)) {
    return obj;
  }

  const fixedKeys = mapKeys(obj, (value, key) => camelCase(key));
  return mapValues(fixedKeys, keysToCamelCase);
}

function transformResponse(data) {
  return keysToCamelCase(data);
}

function getDefaultTransformResponse() {
  const axiosDefault = axios.defaults.transformResponse;
  if (axiosDefault == null) {
    return [transformResponse];
  }

  if (isArray(axiosDefault)) {
    return axiosDefault?.concat(transformResponse);
  }

  return [axiosDefault, transformResponse];
}

const CAMEL_CASE_DEFAULT_CONFIG = {
  transformResponse: getDefaultTransformResponse(),
};

export class BaseApi {
  constructor(baseURL, errorList) {
    this.axios = axios.create({ ...CAMEL_CASE_DEFAULT_CONFIG, baseURL });
    this.axios.interceptors.response.use(
      (res) => res,
      (err) => onError(err, this.axios, errorList)
    );
    this.axios.interceptors.request.use(onCancelRequest);
    this.axiosWithoutAuth = axios.create({
      ...CAMEL_CASE_DEFAULT_CONFIG,
      baseURL,
    });
    this.cancelToken = axios.CancelToken.source().token;
  }
}

module.exports = {
  BaseApi,
};
