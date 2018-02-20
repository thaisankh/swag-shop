import React, {Component} from 'react';
import './product-condensed.css';
import DataService from '../services/data-service';

var ds = new DataService();
class ProductCondensed extends Component {


    constructor(props) {
        super(props);
        this.removeProduct = this.removeProduct.bind(this);
    }


    removeProduct = () => {
        ds.removeWishListItem(this.props.product);
    };

    render() {
        return (
            <li className="list list-group-item">
                <a className="btn btn-outline-danger" onClick={() => this.removeProduct()}>X</a>
                {this.props.product.title} | ${this.props.product.price}
            </li>
        );
    }
}

export default ProductCondensed;