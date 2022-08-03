import api from '../../../api/api';

export default {
  getBooks: async (id) => {
    let dados = await api.get('/get-livros', {
      params: { 
        id_ano: id,
        todos: 0
      }
    })
    return dados.data;
  }
}
