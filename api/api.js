import axios from 'axios';

const object = axios.create({
  baseURL: 'http://10.0.2.2:8000/api/',
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
