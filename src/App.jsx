import React, { Component } from 'react'
import Servercall from './Servercall'

export default class App extends Component {
  constructor(props){
    super()
    
  }
  render() {
    return (
      <div className='App'>
        <Servercall/>
      </div>
    )
  }
}
