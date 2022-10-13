import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

class BetterHelloComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { greeting: "Hello" }
  }

  handleClick = newGreeting => e => {
    e.preventDefault()

    this.setState({ greeting: newGreeting })
  }

  render() {

    return (
      <p>
        <button onClick={this.handleClick("Hallo")}>Deutsch</button>
        <button onClick={this.handleClick("salam")}>Persisch</button>
        <br />
        <span>{ this.state.greeting} {this.props.name}</span>
      </p>
    )
  }
}


function HelloComponent(props) {
 
  let greeting = "Hello"

  return (
    <p>
      {greeting} {props.name}!!! 
    </p>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <HelloComponent name="Mohadeseh" />
          <HelloComponent name="Christoph" />

          <BetterHelloComponent name="Mohadeseh" />

        </header>
      </div>
    )
  }
}

export default App
