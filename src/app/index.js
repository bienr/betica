import React from "react";
import { render } from "react-dom";

require("./index.scss");

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <header className="page-header">
                        <h1>Betica <small>Shop</small></h1>
                    </header>
                    <main>
                        <div className="phones">
                            <h2>Phones</h2>
                            <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                    <div className="thumbnail">
                                        <img src="..." alt="..."/>
                                            <div className="caption">
                                                <h3>Thumbnail label</h3>
                                                <p>...</p>
                                                <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                    <div className="thumbnail">
                                        <img src="..." alt="..."/>
                                            <div className="caption">
                                                <h3>Thumbnail label</h3>
                                                <p>...</p>
                                                <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                    <div className="thumbnail">
                                        <img src="..." alt="..."/>
                                            <div className="caption">
                                                <h3>Thumbnail label</h3>
                                                <p>...</p>
                                                <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
                                            </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="laptops">
                            <h2>Laptops</h2>
                            <div className="row">
                                <div className="col-sm-6 col-md-4">
                                    <div className="thumbnail">
                                        <img src="..." alt="..."/>
                                            <div className="caption">
                                                <h3>Thumbnail label</h3>
                                                <p>...</p>
                                                <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <footer className="footer">
                    <div className="container">
                        <p className="text-muted">Place sticky footer content here.</p>
                    </div>
                </footer>
            </div>
        );
    }
}

render(<App/>, document.getElementById("content"));