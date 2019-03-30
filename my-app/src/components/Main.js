import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {Home} from './Home'
import {About} from './About'
import {Explore} from './Explore'
import {Learn} from './Learn'
import {Start} from './Start'
import {Lesson} from './Lesson'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={Lesson}/>
      <Route exact path='/explore' component={Explore}/>
      <Route exact path='/learn' component={Learn}/>
      <Route exact path='/signin' component={Start}/>
    </Switch>
  </main>
)

export default Main