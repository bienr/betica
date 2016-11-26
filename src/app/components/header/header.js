import React from "react";

require("./header.scss");

export const Header = (props) => {
    return (
        <header className="page-header">
            <h1>{props.title}</h1>
        </header>
    );
};