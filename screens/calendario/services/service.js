import api from '../../../api/api';

export default {
  getRemindersNow: async (data) => {
    let dados = await api.get('/get-agenda/', {
        params: {
            mes: 'Jul',
            data: data
        }
    });
    return dados.data;
  }
}
