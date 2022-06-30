import api from '../../../api/api';

export default {
    getEscolaMomento: async (id) => {
        let dados = await api.get('/get-escola-momento/' + id);
        return dados.data;
    },
}