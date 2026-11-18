import axios from 'axios';

export const getAllUsersAxios = async () => {
    try {
        const response = await axios.get('https://dummyjson.com/users');
        return response.data;
    } catch (error) {
        throw error.message || "Error fetching users";
    }
};