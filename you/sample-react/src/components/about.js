import React from 'react';

class About extends React.Component {

  constructor(props) {
    super(props)
    console.log('i am in constructor')
    this.state = {
      number: 0
    };
  }

  static getDerivedStateFromProps(prevProps, prevState ) {
    console.log('i am in getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('1 ===========',this.state)
    this.state.number = 1 // it is working whats the diffrance
    console.log('2 ===========',this.state)

    
    console.log(' i am in componentDidMount', )
  }

  firstFunction = () => {
    const { counter } = this.state;
    
  }
    

  shouldComponentUpdate(prevState, currentState) {
    console.log(' i am in shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('i am in getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate() {
    console.log('i am in componentDidUpdate')
  }

  componentWillUnmount() {
    console.log(' i m in componentWillUnmount')
  }

  render() {
    console.log('i am in render  method')
    return (
      <div>
        <h3 >Hi this is about </h3>
        <h3>Number of Clicks {this.state.number}</h3>
        <button onClick={() => this.setState({ number: this.state.number + 1 })}>Increment</button>
        <button onClick={() => this.setState({ number: this.state.number === 0 ? 0 : this.state.number - 1 })}>Decrement</button>
      </div>
    )
  }
}

export default About;
