import React, { Component } from 'react'

export class NEwmassage extends Component {
    constructor(props) {
        super(props)
  this.uzaertir=this.uzaertir.bind(this)
        this.state = {
             xobar:'Goodluck'
        }
    }
    uzaertir(){
        this.setState({
            xobar: 'it is going to be well'
        })
    }
    render() {
        return (
            <div>
<h1>{this.state.xobar}</h1>
<button onClick={this.uzaertir}> davomi</button>
            </div>
        )
    }
}
    // I do it by my Self
    // I do it by my Self
    // I do it by my Self
    // I do it by my Self
export default NEwmassage
