import * as React from "react";
import {useModuleLoader} from "../moduleMgmnt/useModuleLoader";


export const ConfigScreen = () => {
    const {
        modules,
    } = useModuleLoader();
    return (
        <div>
            <h1>
                ConfigScreen
            </h1>

            <pre>
                <code>
                    {
                        JSON.stringify(modules, null, 2)
                    }
                </code>
            </pre>
        </div>
    )
};