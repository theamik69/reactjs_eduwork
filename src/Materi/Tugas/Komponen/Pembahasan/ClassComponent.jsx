import React from "react";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }
    
      incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
      }
    
      decrementCount = () => {
        this.setState({ count: this.state.count - 1 });
      }
    
      render() {
        return (
          <div>
            <h1>Counter</h1>
            <p>Count: {this.state.count}</p>
            <button onClick={this.incrementCount}>Increment</button>
            <button onClick={this.decrementCount}>Decrement</button>
          </div>
        );
      }
}

export default ClassComponent;