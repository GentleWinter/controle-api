import React, { Component } from 'react';
import Pessoas from './components/pessoas'

class App extends Component {
  state = {
    pessoas: [], loading: true
  }
  componentDidMount() {
    fetch('https://swapi.co/api/people')
    .then(res => res.json())
    .then((data) => {
      this.setState({ pessoas: data.results, loading: false })
    })
    .catch(console.log)
  }
  render() {
    return (
      this.state.loading
      ? <p> Loading... </p>
       : <Pessoas pessoas={this.state.pessoas}/>
    )  
  }
}

export default App;
