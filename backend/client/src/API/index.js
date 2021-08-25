import axios from 'axios';

const getCustomer = (data) => axios.get('/api/customerRoutes/data', data);
const postCustomer = (data) => axios.post('/api/customerRoutes/data', data);
const deleteCustomer = (id) => axios.delete('/api/customerRoutes/data', { data: { _id: id } });

export default {
    getCustomer,
    postCustomer,
    deleteCustomer
};

