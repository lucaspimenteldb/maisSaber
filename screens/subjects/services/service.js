import api from '../../../api/api';
import axios from 'axios';

export default {
  getSubjects: async (id) => {
    let dados = await axios.get('http://10.0.2.2:8000/api/get-videos/' + id);
    return dados.data;
  }
}