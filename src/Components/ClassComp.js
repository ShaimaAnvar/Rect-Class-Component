import React, { Component } from 'react'

class ClassComp extends Component {
    constructor(){
        super();
        this.state={count:10}
    }
    handleIncrement = ()=>this.setState({count:this.state.count+5})
    
    handleDecrement = ()=>this.setState({count:this.state.count-1})
    componentDidUpdate(){
      console.log('Component updated');
  }
  // componentWillUnmount(){
  //   console.log('Component removed');
  // }
  //   componentDidMount(){
  //       console.log('Component mounted');
  //   }
  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    )
  }
}
export default ClassComp