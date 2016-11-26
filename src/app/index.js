import React from "react";
import { render } from "react-dom";

import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Products } from "./components/products/products";

require("./index.scss");

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Betica Shop",
            info : {
                "items": {
                    "phone" : [
                        {
                            "product" : "iPhone 8",
                            "manufacturer" : "Apple",
                            "releaseDate" : "2018",
                            "price" : 499
                        },
                        {
                            "product" : "Galaxy S9",
                            "manufacturer" : "Samsung",
                            "releaseDate" : "2018",
                            "price" : 350
                        },
                        {
                            "product" : "Xperia ZZ",
                            "manufacturer" : "Sony",
                            "releaseDate" : "2020",
                            "price" : 399
                        }
                    ],
                    "laptop" : [
                        {
                            "product" : "MacBook PRO 2018",
                            "manufacturer" : "Apple",
                            "releaseDate" : "2017",
                            "price" : 1999
                        },
                        {
                            "product" : "Vaio",
                            "manufacturer" : "Sony",
                            "releaseDate" : "2020",
                            "price" : 1690
                        }
                    ]
                }
            }
        };
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Header title={this.state.title}/>
                    <main>
                        <div className="phones">
                            <h2>Phones</h2>
                            <div className="row">
                                <Products items={this.state.info.items.phone} />
                            </div>
                        </div>
                        <div className="laptops">
                            <h2>Laptops</h2>
                            <div className="row">
                                <Products items={this.state.info.items.laptop} />
                            </div>
                        </div>
                    </main>
                    <Footer title={this.state.title} />
                </div>
            </div>
        );
    }
}

render(<App/>, document.getElementById("content"));