import * as React from "react";
import {Microfrontend} from "./microfrontend";
import {useState} from "react";


const dummyModules: Microfrontend[] = [
    {
        // For Loading
        remoteEntry: 'http://localhost:5001/remoteEntry.js',
        remoteName: 'react17UserModule',
        exposedModule: './web-components',

        // For Routing
        displayName: 'React User Module',
        routePath: 'user-module',
        apiBasePath: "http://localhost:8091/api",
        webComponentTag: 'react17-user-element',
    },
    {
        // For Loading
        remoteEntry: 'http://localhost:5002/remoteEntry.js',
        remoteName: 'angularProjectModule',
        exposedModule: './web-components',

        // For Routing
        displayName: 'Angular Module',
        routePath: 'angular-module',
        webComponentTag: 'angular-project-module',
    },
    {
        // For Loading
        remoteEntry: 'http://localhost:5003/remoteEntry.js',
        remoteName: 'react15AssetsModule',
        exposedModule: './web-components',

        // For Routing
        displayName: 'React 15 Module',
        routePath: 'react-15-module',
        webComponentTag: 'react15-assets-element',
    },
];

export const useModuleLoader = () => {

    const [modules, setModules] = useState<Microfrontend[]>([])
    const [loaded, setLoaded] = useState<boolean>(false)

    if (!loaded) {
        setTimeout(() => {
            setModules(dummyModules);
            setLoaded(true);
        }, 500)
    }

    return {
        modules,
        loaded,
    };
}
