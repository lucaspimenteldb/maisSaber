import api from '../../../api/api';

export default {
  getDisciplinas: async () => {
    let dados = await api.get('/get-disciplinas');
    return dados.data;
  }
}