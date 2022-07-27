import api from '../../../api/api';

export default {
  getSubjects: async (id) => {
    let dados = await api.get('/get-videos/' + id);
    return dados.data;
  },
  
  getQuestion: async (id) => {
    let dados = await api.get('/get-video-questao/' + id);
    return dados.data;
  },

  finishVideoaula: async (id_user, id_video) => {
    let dados = await api.post('/finalizar-aula', {
      id_user: id_user,
      id_video: id_video
    });
    return dados.data;
  },

  getDataVideo: async (id_user, id_video) => {
    let dados = await api.get('/get-video-dados/' + id_video + '/' + id_user);
    return dados.data;
  }
}
