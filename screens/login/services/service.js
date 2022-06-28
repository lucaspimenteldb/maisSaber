import api from '../../../api/api';

export default {
  login: async (registration, password) => {
    let dados = await api.post('/login-aux', {
        matricula: registration,
        password: password
    });
    return dados.data;
  }
}
