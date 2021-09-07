import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {UserApplication} from "../../frontend/src/app/UserApplication";

export class React17UserElement extends HTMLElement {

    connectedCallback() {
        const basePath: string = this.getAttribute("routepath") || "";
        const apiBasePath: string = this.getAttribute("apibasepath") || "";
        ReactDOM.render(<UserApplication basePath={basePath}
        apiBasePath={apiBasePath}/>, this);
    }
}

customElements.define('react17-user-element', React17UserElement);
