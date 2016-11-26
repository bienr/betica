import React from "react";

require("./footer.scss");

export const Footer = (props) => {
    return (
        <footer className="footer">
            <p className="text-muted">{props.title} Copyright &copy;</p>
        </footer>
    );
};