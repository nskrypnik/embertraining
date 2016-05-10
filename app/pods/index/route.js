import Ember from 'ember'
const {Route} = Ember

export const transitionToRouteName = 'organizations'

export default Route.extend({
  /**
   * Transition to route for desired application entry point
   */
  beforeModel () {
    this._super(...arguments)
    this.transitionTo(transitionToRouteName)
  }
})
