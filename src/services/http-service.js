import 'whatwg-fetch';

class HttpService {

    getProducts = () => {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:3000/product').then(response =>{
                resolve(response.json());
            })
        });
    }
}

export default HttpService;