import api from '../../../api/api';

export default {
  getPostsMural: async (id) => {
    let dados = await api.get('/get-mural/' + id);
    return dados.data;
  },
}