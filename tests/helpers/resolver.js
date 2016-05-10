import Resolver from '../../resolver'
import config from '../../config/environment'
const {modulePrefix, podModulePrefix} = config

const resolver = Resolver.create()

resolver.namespace = {
  modulePrefix,
  podModulePrefix
}

export default resolver
