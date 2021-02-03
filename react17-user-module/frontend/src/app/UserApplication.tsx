import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {OverviewPage} from "./pages/OverviewPage";
import {BasePathContext} from "./basePathContext";

import "antd/dist/antd.compact.css";

export function UserApplication(props: { basePath: string, apiBasePath: string }) {

    console.log("UserApplication starts with properties:", props);

    return (
        <div className="App">
            <BasePathContext.Provider value={{apiBasePath: props.apiBasePath}}>

                <Router basename={props.basePath}>
                <Switch>
                    <Route path="/users/:uuid" component={UserDetailsPage}/>
                    <Route path="/" component={OverviewPage}/>
                </Switch>
            </Router>
            </BasePathContext.Provider>
        </div>
    );
}
