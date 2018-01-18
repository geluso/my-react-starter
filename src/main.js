import './style/main.scss'
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>This is React!</h1>
      </div>
    )
  }
}

let div = document.createElement('div')
document.body.appendChild(div)
ReactDOM.render(<App/>, div)


