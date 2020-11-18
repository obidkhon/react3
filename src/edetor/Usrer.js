import React, { Component } from 'react'

 class Usrer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {xabar:false
             
        }
    }
    
    render() {
        if(this.state.xabar){ 
            return (
                <div>
                    <h1> hello</h1>
                </div>
            )
            
            }else{
                return (
                    <div>
                        <h1>goodbaye</h1>
                    </div>
                )
            }
        }
        
    }


export default Usrer
