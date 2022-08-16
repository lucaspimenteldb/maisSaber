import api from '../../../api/api';

export default {
  getSubjects: async (id, id_ano, id_user) => {
    let dados = await api.get(`/get-videos/${id}/${id_ano}/${id_user}`);
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

  curtirVideoaula: async (id_user, id_video) => {
    let dados = await api.post('/curtir-aula', {
      id_user: id_user,
      id_video: id_video
    });
    return dados.data;
  },

  getDataVideo: async (id_user, id_video) => {
    let dados = await api.get('/get-video-dados/' + id_video + '/' + id_user);
    return dados.data;
  },

  sendReponse: async (idUser, idQuestao, selectedAlternative) => {
    let dados = await api.post('/enviar-resposta-video', {
      id_user: idUser,
      id_questao: idQuestao,
      resposta: selectedAlternative
    });
    return dados.data;
  }
}
