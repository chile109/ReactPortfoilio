import React from "react";
import { Instagram, LinkedIn, Twitter } from "@material-ui/icons";
import "../Styles/Footers.css";

function Footers() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <Instagram onClick={() => window.open('https://www.instagram.com/kaimin.chang0220', '_blank')}>Instagram</Instagram>
                <LinkedIn onClick={() => window.open('https://www.linkedin.com/in/%E6%84%B7%E7%8F%89-kevin-chang-%E5%BC%B5-a36944128/', '_blank')}>LinkedIn</LinkedIn>
                <Twitter onClick={() => window.open('https://twitter.com/KMINGCHANG', '_blank')}>Twitter</Twitter>
            </div>

            <p>© 2023, SharKevin.com</p>
        </div>
    );
}

export default Footers;