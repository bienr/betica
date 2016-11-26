import React from "react";

import "assets/css/footer.scss";

export const Footer = (props) => {
    return (
        <footer className="page-footer">
            <div className="container">
                <p className="text-muted text-center">{props.title} Copyright &copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};