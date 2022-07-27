import api from '../../../api/api';

export default {
  getBooks: async (id) => {
    let dados = id ? await api.get('/get-livros', { params: {todos: 0, id_disciplina: id}}) : await api.get('/get-livros', { params: {todos: 1 }});
    return dados.data;
  }
}
