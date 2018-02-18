import 'whatwg-fetch';

class HttpService {

    getPoducts = () => {
        fetch('http://localhost:3004/product').then(responce =>{
            console.log(responce.json());
        })
    }
}

export default HttpService;