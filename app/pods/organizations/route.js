import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        id: 1,
        data: 'whatever'	
      },
      {
        id: 2,
        data: 'whatsoever'
      }
    ]
  }
});
