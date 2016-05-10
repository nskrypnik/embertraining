import Ember from 'ember'
const {Route} = Ember

export const transitionToRouteName = 'organizations'

export default Route.extend({
  beforeModel () {
    this._super(...arguments)
    this.transitionTo(transitionToRouteName)
  }
})
