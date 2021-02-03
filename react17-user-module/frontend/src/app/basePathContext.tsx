import {createContext} from "react";

export interface BasePaths {
    readonly apiBasePath: string;
}

export const BasePathContext = createContext<BasePaths>({apiBasePath: ""});
