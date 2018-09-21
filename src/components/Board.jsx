import React from 'react'

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>This is a board {this.props.number}</p>
            </div>
        );
    }

}

export default Board;