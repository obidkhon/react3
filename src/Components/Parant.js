import React, { Component } from 'react'
import Child from './Child'

export class Parant extends Component {
constructor(props) {
    super(props)

    this.state = {
         parantName:'parant'
    }
this.greetParant=this.greetParant.bind(this)
}
greetParant(childName){
    alert(` Hello ${this.state.parantName} from ${childName}`)
}


    render() {
        return (
            <div>
                <Child getHandler={this.greetParant}/>
            </div>
        )
    }
}

export default Parant
