import React from "react";

import { Button } from "@mui/material";
import "./CustomButton.css";

const CustomButton = (props) => {
    return (
        <Button className="custom_btn" endIcon={props.icon && (
            <div className="btn_icon_container">{props.icon}</div>
        )}>
            <span className="btn_text">{props.text}</span>
        </Button>
    )
};

export default CustomButton;