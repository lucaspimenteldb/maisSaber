import api from '../../../api/api';

export default {
  getSubjects: async (id) => {
    let dados = await api.get('/get-videos/' + id);
    return dados.data;
  }
}
