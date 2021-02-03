import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

    render() {
        const reactVersion = require('./package.json').dependencies['react'];

        return (
            <div>
                <h1>
                    Micro Frontent Assets module. Ohne Logik
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="30"></img>
                </h1>
                <p>
                    React Version: {reactVersion}
                </p>
            </div>
        )
    }
}

class React15AssetsElement extends HTMLElement {
    connectedCallback() {
        ReactDOM.render(<App/>, this, () => {
            console.log("tell Micha what's happened")
        });
    }
}

customElements.define('react15-assets-element', React15AssetsElement);
