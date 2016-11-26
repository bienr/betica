import React from "react";
import { render } from "react-dom";

import { Header } from "./components/partials/header";
import { Footer } from "./components/partials/footer";
import { Products } from "./components/products/products";

import "./index.scss";

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
                <Header title={this.state.title}/>
                <div className="container">
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
                </div>
                <Footer title={this.state.title} />
            </div>
        );
    }
}

render(<App/>, document.getElementById("content"));