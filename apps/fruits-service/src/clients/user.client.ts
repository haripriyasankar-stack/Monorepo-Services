import axios from 'axios';
const uUSER_SERVICE = 'http://localhost:3001';
export const getUserById = async (userId: string) => {
    try {
        const response = await axios.get(`${uUSER_SERVICE}/users/${userId}`);
        return response.data;
    } catch (error) {
        return null;
    }
};