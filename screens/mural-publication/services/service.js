import api from '../../../api/api';

export default {
    buscarComentarios: async (id) => {
        let dados = await api.get('/get-comentarios-mural/' + id);
        return dados.data;
    },

    curtir: async (id, curtir) => {
        let dados = await api.post('/curtir-post', {
            id_mural: id,
            curtidas: curtir
        });

        return dados.data;
    },

    visualizar: async (id, visto) => {
        let dados = await api.post('/vaisualizar-post', {
            id_mural: id,
            vistos: visto
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
    }
}