// import { headerAuthorization } from '../common-utils'
import {loginUrl, signUpUrl} from '../const/index';
import axios from 'axios';

class UserLoginData {
    addUser = async (data) => {
        try {
            const response = await this.axios.post(`${signUpUrl}`, {
                username: data.username,
                email: data.email,
                identityCard: data.identityCard,
                areaCode: data.areaCode,
                role: data.role,
            });
            return response.data;
        } catch (error) {
            const apiError = error;
            throw apiError;
        }
    };
    getCompany = async () => {
        try {
            const response = await axios.get(`${loginUrl}`);
            return {success: true, data: response.data};
        } catch (error) {
            return {success: false, data: {}};
        }
    };
    loginUser = async (data) => {
        try {
            const response = await axios.post(loginUrl, {...data});
            return response;
        } catch (error) {
            const apiError = error;
            throw apiError;
        }
    };
}

export default UserLoginData;
