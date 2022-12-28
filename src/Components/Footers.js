import React from "react";
import { Instagram, LinkedIn, Twitter } from "@material-ui/icons";
import "../Styles/Footers.css";

function Footers() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <Instagram />
                <LinkedIn />
                <Twitter />
            </div>

            <p>© 2023, SharKevin.com</p>
        </div>
    );
}

export default Footers;