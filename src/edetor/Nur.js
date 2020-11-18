import React, { Component } from 'react'

export class Nur extends Component {


constructor(props) {
    super(props)

    this.state = {
         mod:true
    }
}





    render() {
       
        return (
            this.state.mod?
            <div>
                <h1>olima</h1>
            </div>:
            <div >  <h1> Akbarali</h1> </div>
        )
    }
}

export default Nur
