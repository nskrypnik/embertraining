import Ember from 'ember'
const {Application} = Ember
import Resolver from './resolver'
import loadInitializers from 'ember-load-initializers'
import config from './config/environment'
const {modulePrefix, podModulePrefix} = config

let App

Ember.MODEL_FACTORY_INJECTIONS = true

App = Application.extend({
  modulePrefix,
  podModulePrefix,
  Resolver
})

loadInitializers(App, modulePrefix)

export default App
