import * as React from "react";
import {useLocation} from "react-router-dom";
import {useModuleLoader} from "../moduleMgmnt/useModuleLoader";
import {loadRemoteModule} from "@angular-architects/module-federation";
import {Microfrontend} from "../moduleMgmnt/microfrontend";

export const WrapperComponent = () => {
    const location = useLocation();

    const moduleRoutePath = getModuleNameOfPath(location.pathname);

    const {modules} = useModuleLoader();

    const module: Microfrontend | undefined = modules.find(m => m.routePath === moduleRoutePath)

    if (module == undefined) {
        return (
            <div>
                module not found
            </div>
        )
    }

    loadRemoteModule(module)
        .then(_ => {
            console.log(`element loaded!`)
            const element = document.createElement(module.webComponentTag);
            element.setAttribute("routepath", module.routePath);
            element.setAttribute("apibasepath", module.apiBasePath ?? "");
            const htmlTargetElement = document.getElementById("frame")!!;
            htmlTargetElement.innerHTML = "";
            htmlTargetElement.appendChild(element);
        })
        .catch(err => {
            console.log(`error loading:`, err)
        })


    return (
        <div>

            LOCATION: {getModuleNameOfPath(location.pathname)}

            <div id={"frame"}/>
        </div>
    );
}

const getModuleNameOfPath = (path: string) => {
return path.split("/")[1]
}
