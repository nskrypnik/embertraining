import Ember from 'ember'
const {Route} = Ember

export default Route.extend({
  model () {
    return [
      {
        id: 1,
        name: 'Org 1'
      },
      {
        id: 2,
        name: 'Org 2'
      }
    ]
  }
})
