import axios from 'axios';
import storage from '../storage/Storage';
import {API_URL} from '@env';

const object = axios.create({
  baseURL: API_URL,
});

const requestHandler = async request => {
  try {
    let xyz = await storage.getKey('user');
    xyz = JSON.parse(xyz);
    request.headers.Authorization = 'Bearer ' + xyz.token;
  } catch (e) {
    console.log('Cedo', e);
  }

  return request;
};

const responseHandler = async response => {
  return response;
};

const errorHandler = error => {
  return Promise.reject(error);
};

const errorHandlerResponse = error => {
  return Promise.reject(error);
};

object.interceptors.request.use(
  request => requestHandler(request),
  error => errorHandler(error),
);
object.interceptors.response.use(
  response => responseHandler(response),
  error => errorHandlerResponse(error),
);

export default object;
