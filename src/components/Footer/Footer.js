import { Typography } from "@mui/material";
import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_left">
                <a
                    href="https://cse.buet.ac.bd/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <figure>
                        <img
                            src={require("../../assets/images/logo.png")}
                            alt="BUET Logo"
                        />
                    </figure>
                </a>
            </div>
            <div className="footer_right">
                <Typography className="footer_details">
                    <a
                        href="https://cse.buet.ac.bd/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}
                        Bangladesh University of Engineering &amp; Technology
                    </a>
                </Typography>
            </div>
        </div>
    );
};

export default Footer;
