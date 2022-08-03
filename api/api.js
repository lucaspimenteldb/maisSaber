import axios from 'axios';
import {API_URL} from '@env';

const object = axios.create({
  baseURL: 'https://homologacaoapi.plataformaevoluir.com.br/api',
});

const requestHandler = async request => {
  // try {
  //     let xyz = await storage.get('xyz');
  //     if (xyz.value) {
  //         xyz = JSON.parse(xyz.value);
  //         request.headers.Authorization = xyz.xyz_completo;
  //     }
  // } catch (e) {
  //     console.log('Cedo',e);
  // }

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
