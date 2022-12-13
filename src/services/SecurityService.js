import axios from "axios";
class SecurityService {
    static USER_BASE_URL = "http://localhost:8080/user";
    static LOGIN_BASE_URL = "http://localhost:8080/login";

    cadastrar(usuario) {
        return axios.post(`${SecurityService.USER_BASE_URL}`, usuario);
    }

    login(usuario) {
        return axios.post(`${SecurityService.LOGIN_BASE_URL}`, usuario);
    }

}

const securityService = new SecurityService();
export default securityService;