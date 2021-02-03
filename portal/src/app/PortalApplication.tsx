import * as React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom";
import {NavBar} from "./navbar/NavBar";
import {WrapperComponent} from "./wrapper/WrapperComponent";
import {HomeScreen} from "./home/HomeScreen";
import {ConfigScreen} from "./config/ConfigScreen";

export const PortalApplication = () => {
    return (
        <div>
            <Router>
                <NavBar/>
                <Route path="/" component={HomeScreen} exact={true}/>
                <Route path="/config" component={ConfigScreen} exact={true}/>
                <Route path="/:moduleName" component={WrapperComponent}/>
            </Router>
        </div>
    )
}
