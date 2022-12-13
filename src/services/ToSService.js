import axios from "axios";

class ToSService {

    static BASE_URL = "http://localhost:8080/terms-of-service";

    verificar() {
        return axios.get(`${ToSService.BASE_URL}/verify`);
    }

    aceitar() {
        return axios.get(`${ToSService.BASE_URL}/accept`);
    }

    ultimoTermo() {
        return axios.get(`${ToSService.BASE_URL}/latest`);
    }

}

const tosService = new ToSService();
export default tosService;