import React, { Component } from 'react'

 class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    bizningHisob(){
        /*
        this.setState({
            count: this.state.count+1
        },()=>{
            console.log('coll back value',this.state.count)
        })
        */

        this.setState(newPriss=>({
            count: newPriss.count +1
        }))
        console.log(this.state.count)
    }
    bizningHisobFour(){
        this.bizningHisob()
        this.bizningHisob()
        this.bizningHisob()
        this.bizningHisob()
    }
    
    render() {
        return (
            <div>
                Count- {this.state.count}
                <button onClick={ this.bizningHisobFour.bind(this)}> submit</button>
            </div>
        )
    }

    // I do it by my Self
}

export default Counter
