import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./stylesheet/main.scss"

import React from "react";
import ReactDOM from "react-dom";

import Board from "./components/Board.jsx";

class Index extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <button className="btn btn-primary">asd</button>
            <Board number={5}/>
        </div>;
    }
}


ReactDOM.render(<Index/>, document.getElementById("index"));
