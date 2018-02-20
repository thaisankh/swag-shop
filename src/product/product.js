import React, {Component} from 'react';
import './product.css';
import DaaService from '../services/data-service';
import NotificationService, {NOTIF_WISHLIST_CHANGED} from "../services/notification-service";

let ns = new NotificationService();
let ds = new DaaService();
class Product extends Component {

    constructor(props) {
        super(props);
        this.onButtonClicked = this.onButtonClicked.bind(this);
        this.onWishListChanged = this.onWishListChanged.bind(this);
        this.state = {onWishList: ds.itemOnWishList()};
    }

    componentDidMount() {
        ns.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishListChanged);
    }

    componentWillMount() {
        ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
    }

    onWishListChanged() {
        this.setState({onWishList: ds.itemOnWishList(this.props.product)});
    }

    onButtonClicked() {
        if (this.state.onWishList) {
            ds.removeWishListItem(this.props.product);
        } else {
            ds.addWishListItem(this.props.product);
        }
    }

    render() {
        var btnClass = this.state.onWishList ? "btn btn-danger" : "btn btn-primary";

        return (
            <div className="card product">
                <img className="card-img-top" src={this.props.product.imgUrl} alt="Product"/>
                <div className="card-block">
                    <h4 className="card-title">{this.props.product.title}</h4>
                    <p className="card-text">Price: {this.props.product.price}$</p>
                    <a href="#" onClick={() => this.onButtonClicked()} className={ btnClass }>{ this.state.onWishList ? 'Remove from wish list' : 'Add to wish list'}</a>
                </div>
            </div>
        );
    }
}

export default Product;