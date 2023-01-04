import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
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
            {/* reocord button for RWD */}
            <div className="toggleButton">
                <button onClick={() => { setExpandNavibar((prev) => !prev) }}>
                    <ReorderIcon />{""}
                </button>
            </div>
            <div className="links">
                <NavLink to="/"> <b>Home</b> </NavLink>
                <NavLink to="/projects"> <b>Projects</b> </NavLink>
                <NavLink to="/experience"> <b>Experience</b> </NavLink>
            </div>
        </div>
    );
}

export default Navibar;