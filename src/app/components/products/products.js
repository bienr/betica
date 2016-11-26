import React from "react";
import { render } from "react-dom";
import Numeral from "numeral";

import "assets/css/products.scss";

export class Products extends React.Component {
    constructor(props) {
        super();
        this.state = {
            items: props.items
        };
    }

    formatCurrency(number) {
        return Numeral(number).format("$ 0,0");
    }

    getPicture(name) {
        name = name.replace(/ /g, "-").toLowerCase();
        return require("./items/" + name + ".jpg");
    }

    buyItem(item) {
        alert("Thank you for choosing " + item + "!");
    }

    render() {
        let products = this.state.items.map((item, key) =>
            <div key={key} className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div className="thumbnail">
                    <a href="#" onClick={() => this.buyItem(item.product)}><img src={this.getPicture(item.product)} alt={item.product}/></a>
                    <div className="caption">
                        <a href="#" onClick={() => this.buyItem(item.product)}><h3>{item.product}</h3></a>
                        <p>Manufactured by <strong>{item.manufacturer}</strong> to be released on <strong>{item.releaseDate}.</strong></p>
                        <p><a href="#" className="btn btn-primary btn-lg btn-block" onClick={() => this.buyItem(item.product)} role="button">{this.formatCurrency(item.price)}</a></p>
                    </div>
                </div>
            </div>
        );
        return (
            <div>
                {products}
            </div>
        );
    }
}