import { apiConfig } from './Utils';
import Secrets from 'react-native-config';

const requestHeaderTransformBasic = async request => {
    request.headers = null;
};

const api = apiConfig(Secrets.base_url);
const movieAPI = apiConfig(Secrets.appleBaseURL);

const auth = () => {
    console.log('Secrets.base_url', Secrets.base_url);
    api.addAsyncRequestTransform(requestHeaderTransformBasic);
    const loginUser = (data) => api.post(Secrets.login_api, data);
    const videoListRequest = (data) => movieAPI.get(`${data}/explicit.json`, data);
    return { loginUser, videoListRequest };
};

export default { auth };
