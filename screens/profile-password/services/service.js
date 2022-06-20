import api from '../../../api/api';

export default {
  update: async (password, id) => {
    let dados = await api.post('/update-password/', {
        password: password,
        id: id
    });
    return dados.data;
  }
}