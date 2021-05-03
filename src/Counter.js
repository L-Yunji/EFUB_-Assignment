import React, { Component } from "react";

class Counter extends Component {
    state = {
        number: 0
    }

    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        })
    }
    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        })
    }
    render() {
        return (
            <div>
                <h1>Count</h1>
                <h1>값: {this.state.number}</h1>
                <button onClick={this.handleIncrease}>Plus</button>
                <button onClick={this.handleDecrease}>Minus</button>
            </div>
        );
    }
}

export default Counter;