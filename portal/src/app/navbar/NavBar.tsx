import * as React from "react";
import {useModuleLoader} from "../moduleMgmnt/useModuleLoader";
import {Link} from "react-router-dom";

import "./navbar.css";

export const NavBar = () => {

    const {modules, loaded} = useModuleLoader();

    return (
        <div className="navbar">
            {
             modules.map((m, i) => {
                 return (
                     <span key={i} className="navbar-item">
                     <Link to={m.routePath}>{m.displayName}</Link>
                 </span>
                 )
             })
            }
        </div>
    )
}
