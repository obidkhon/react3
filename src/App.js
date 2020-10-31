import React, { Component } from 'react'
import './App.css'
import Counter from './Components/Counter'
import Limmlim1 from './Components/Limmlim1'
import Limmolim from './Components/Limmolim'
import Limmolim2 from './Components/Limmolim2'

import NEwmassage from './Components/NEwmassage'
export class App extends Component {
  render() {
    return (
      <div className='App'>
        <NEwmassage/>
        <Counter/>
        <Limmolim name='Akbarali' lastName= 'Olimov'/>
        <Limmlim1 name='Akbarali' lastName= 'Olimov'/>
        <Limmolim2  name='Akbarali' lastName= 'Olimov'/>
      </div>
    )
  }
}
    // I do it by my Self
    // I do it by my Self
    // I do it by my Self
    // I do it by my Self
export default App
