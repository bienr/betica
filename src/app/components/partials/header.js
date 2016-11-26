import React from "react";

import "assets/css/header.scss";

export const Header = (props) => {
    return (
        <header className="page-header">
            <div className="container">
                <a href="/">
                    <span className="logo"></span>
                    <h1 className="access-header">{props.title.toUpperCase()}</h1>
                </a>
            </div>
        </header>
    );
};