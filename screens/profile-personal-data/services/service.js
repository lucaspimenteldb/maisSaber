import api from '../../../api/api';

export default {
  update: async (name, email, id) => {
    console.log(email, name)
    let dados = await api.post('/update-personal', {
      id: id,
      nome: name,
      email: email
    });
    return dados.data;
  }
}