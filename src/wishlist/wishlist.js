import React, {Component} from 'react';
import './wishlist.css';
import ProductCondensed from '../product-condensed/product-condensed';
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification-service';

let ns = new NotificationService();

class WishList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wishList: []
        };
        this.createWishList = this.createWishList.bind(this);
        this.onWishListChanged = this.onWishListChanged.bind(this);
    }

    componentDidMount() {
        ns.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishListChanged);
    }

    componentWillMount() {
        ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
    }

    onWishListChanged(newWishList) {
        this.setState({wishList: newWishList});
    }

    createWishList() {
        return this.state.wishList.map((product) => {
            return (
                <ProductCondensed key={product._id} product={product}/>
            );
        })
    }

    render() {
        return (
            <div className="card product">
                <div className="card-block">
                    <h4 className="card-title">Wish List</h4>
                    <ul>
                        {this.createWishList()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default WishList;