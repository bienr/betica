import React from "react";
import { render } from "react-dom";

require("./products.scss");

export class Products extends React.Component {
    constructor(props) {
        super();
        this.state = {
            items: props.items
        };
    }

    render() {
        var products = this.state.items.map((item, key) =>
            <div key={key} className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div className="thumbnail">
                    <img src="" alt="{item.product}"/>
                    <div className="caption">
                        <h3>{item.product}</h3>
                        <p>Manufactured by <strong>{item.manufacturer}</strong> to be released on <strong>{item.releaseDate}.</strong></p>
                        <p><a href="#" className="btn btn-primary" role="button">$ {item.price}</a></p>
                    </div>
                </div>
            </div>
        );
        for (var i = 0; i < this.state.items.length; i++) {
            console.log("[" + i + "] = " + this.state.items[i]);
        }
        return (
            <div>
                {products}
            </div>
        );
    }
}