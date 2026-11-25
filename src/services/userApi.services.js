import axios from 'axios';

export const getAllUsersAxios = async () => {
    try {
        const response = await axios.get('https://dummyjson.com/users');
        return response.data;
    } catch (error) {
        throw error.message || "Error fetching users";
    }
    
};
const usersUri = 'http://localhost:3000/users'

export const addUserAxios = async (userObj) => {
    const response = await axios.post(`${usersUri}/signup`, userObj)
    return response.data // { user, token }
}