import React, { Component } from 'react'
import './App.css'
import Counter from './Components/Counter'
import Limmlim1 from './Components/Limmlim1'
import Limmolim from './Components/Limmolim'
import Limmolim2 from './Components/Limmolim2'

import NEwmassage from './Components/NEwmassage'
import Parant from './Components/Parant'
import Nur from './edetor/Nur'
import Usrer from './edetor/Usrer'
import Verebla from './edetor/Verebla'
export class App extends Component {
  render() {
    return (
      <div className='App'>
        <Parant/>
        <NEwmassage/>
        <Counter/>
        <Limmolim name='Akbarali' lastName= 'Olimov'/>
        <Limmlim1 name='Akbarali' lastName= 'Olimov'/>
        <Limmolim2  name='Akbarali' lastName= 'Olimov'/>
        <Usrer/>
        <Verebla/>
        <Nur/>
      </div>
    )
  }
}
    // I do it by my Self
    // I do it by my Self
    // I do it by my Self
    // I do it by my Self
export default App
