import api from '../../../api/api';

export default {
  update: async (name, email, id) => {
    let dados = await api.post('/update-personal/', {
        name: name,
        email: email,
        id: id
    });
    return dados.data;
  }
}