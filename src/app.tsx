import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component<{}, {}>{
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementsByClassName("main")[0]);