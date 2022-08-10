import api from '../../../api/api';

export default {
  getBooks: async (id, id_privilegio) => {
    let dados = await api.get('/get-livros', {
      params: { 
        id_ano: id,
        todos: 0,
        id_privilegio: id_privilegio
      }
    })
    return dados.data;
  },

  getBanners: async (id) => {
    let dados = await api.get('/get-banners/' + id)
    return dados.data;
  }
}
