import React, { Component, Fragment } from "react";
import {Header, Footer, LoginPage, LandingPage, SignUpPage} from './Layouts'
import {Exercises} from './Exercises'
import {muscles, exercises} from '../store.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as ROUTES from '../routes'

export default class extends Component {

  state = {
    exercises
  }

  getExercisesByGroup() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]

        return exercises
      }, {})
    )
  } 

  render() {

    return (
      <Fragment>
        <Router> 
          <Fragment>
            <Header />
            <hr />
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.LOGIN} component={LoginPage} />
            <Route path={ROUTES.SIGNUP} component={SignUpPage} />
          </Fragment>
        </Router>
      </Fragment>
    );
  }
}
