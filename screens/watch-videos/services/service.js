import api from '../../../api/api';

export default {
  getQuestion: async (id) => {
    let dados = await api.get('/get-video-questao/' + id);
    return dados.data;
  }
}