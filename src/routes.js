import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import {
  Lobby,
  SignIn,
  SignUp
} from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Lobby} />
        <Route exact path="/" component={SignIn} />
        <Route exact path="/" component={SignUp} />
      </div>
    )
  }
}
