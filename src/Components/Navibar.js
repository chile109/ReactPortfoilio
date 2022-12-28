import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Navibar.css";
import ReorderIcon from '@material-ui/icons/Reorder';

function Navibar() {
    const [expandNavibar, setExpandNavibar] = React.useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandNavibar(false);
    }, [location]);

    return (
        <div className="navibar" id={expandNavibar ? "open" : "close"} >
            <div className="toggleButton">
                <button onClick={() => { setExpandNavibar((prev) => !prev) }}>
                    <ReorderIcon />{""}
                </button>
            </div>
            <div className="links">
                <Link to="/">Home </Link>
                <Link to="/projects">Projects </Link>
                <Link to="/experience">Experience </Link>
            </div>
        </div>
    );
}

export default Navibar;