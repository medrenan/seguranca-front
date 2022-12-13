import $ from 'jquery';

class Requester {

    static get GET_OPTIONS(){
        return {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            type: 'GET',
            dataType: 'json'
        }
    }

    static get POST_OPTIONS(){
        return {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            'type': 'POST',
            'dataType': 'json'
        };
    }

    getAuthToken() {
        let local = localStorage.getItem("user");
        if(!local) {
            return "";
        }

        const user = JSON.parse(local);

        return user["token"];
    }

    embalarAjaxEmPromise(optionsAjax){
        return new Promise(function (resolve, reject) {
            $.ajax(optionsAjax).done(resolve).fail(reject);
        }).catch((err) => {
            return Promise.reject(err.responseJSON)
        });
    }

    get(url){
        return this.embalarAjaxEmPromise(Object.assign({}, Requester.GET_OPTIONS, {url:url}));
    }

    post(url, data){
        return this.embalarAjaxEmPromise(Object.assign({}, Requester.POST_OPTIONS, {url:url, data: JSON.stringify(data)}));
    }
}

const requester = new Requester();
export default requester;
