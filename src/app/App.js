import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Component
import Product from '../product/product';
import WishList from '../wishlist/wishlist';

// Service
import HttpService from '../services/http-service';

const http = new HttpService();

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
        };
        this.productList = this.productList.bind(this);
        this.loadData = this.loadData.bind(this);
        this.loadData();
    }

    loadData = () => {

        let self = this;

        http.getProducts().then(products => {
            self.setState({
                products: products
            });
        }, err => {
            console.log(err);
        })
    };

    productList = () => {
        return this.state.products.map((product) => {
            return (
                <div className="col-sm-4" key={product._id}>
                    <Product product={product} />
                </div>
            );
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="container-fluid App-main">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                            {this.productList()}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <WishList />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
