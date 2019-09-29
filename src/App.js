import React, { Component } from 'react';
import Pessoas from './components/pessoas'

class App extends Component {
  state = {
    pessoas: []
  }
  componentDidMount() {
    fetch('https://swapi.co/api/people')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
  render() {
    return (
      <Pessoas pessoas={this.state.pessoas}/>
    )  
  }
}

export default App;
