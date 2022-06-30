import api from '../../../api/api';

export default {
    buscarComentarios: async (id) => {
        let dados = await api.get('/get-comentarios-mural/' + id);
        return dados.data;
    },

    curtir: async (idMural, idUser, curtir) => {
        let dados = await api.post('/marcar-curtir', {
            id_mural: idMural,
            id_user: idUser,
            curtidas: curtir
        });

        return dados.data;
    },

    visualizar: async (id, id_user) => {
        let dados = await api.post('/marcar-visto', {
            id_mural: id,
            id_user: id_user
        });

        return dados.data;
    },

    comentar: async (id, nome, comentario, turma) => {
        let dados = await api.post('/comentar-post', {
            id_mural: id,
            nome: nome,
            comentario: comentario,
            turma: turma,
            created_at: new Date().getDate()
        });

        return dados.data;
    },

    getAcoes: async (id, id_user) => {
        let dadosCurtidas = await api.get('/get-curtida/' + id_user + '/' + id);

        let dadosVistos = await api.get('/get-visto/' + id_user + '/' + id);

        let objAcao = {
            visto: dadosVistos.data.success,
            curtido: dadosCurtidas.data.success,
        }

        return objAcao; 
    }
}