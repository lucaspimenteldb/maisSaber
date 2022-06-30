import api from '../../../api/api';

export default {
  getNotifications: async (id) => {
    let dados = await api.get('/get-notifications/' + id);
    return dados.data;
  },
}