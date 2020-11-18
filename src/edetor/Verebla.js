import React, { Component } from 'react'

export class Verebla extends Component { 
constructor(props) {
    super(props)

    this.state = {
         xabar:false
    }
}

    render() 
    {
        let domla
        if (this.state.xabar) {
           domla=<div><h1> qalaysan </h1></div> 
        } else {
            domla=<div><h1> yaxsh</h1></div> 
        }
        return (
            <div>
                {domla}
            </div>
        )
    }
}

export default Verebla
