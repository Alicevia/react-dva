
import React, { Component } from 'react'

export default class Sign extends Component {
  changeRouter =()=>{
    this.props.history.push('/home')
  }
  render() {
    return (
      <div>
        <button onClick={this.changeRouter}>toHome</button>
      </div>
    )
  }
}
