import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'
import store from './store'
import { BootstrapVue, IconsPlugin, DropdownPlugin } from 'bootstrap-vue'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Import Bootstrap and BootstrapVue CSS files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core' // import the fontawesome core
import { faPhone, faHouse, faEnvelope } from '@fortawesome/free-solid-svg-icons' // import specific icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' // import font awesome icon component

library.add(faPhone, faHouse, faEnvelope) // add icons to the library
Vue.component('font-awesome-icon', FontAwesomeIcon) // add font awesome icon component

const httpLink = new createHttpLink({
  // Use an absolute URL here from Hasura
    uri: 'https://precise-fawn-52.hasura.app/v1/graphql',
    headers: {
      "x-hasura-admin-secret": "ou67lt6RPjhqXU5leisJ5L3vydxA5iuDOFJ1O3Vqi4DoyNfCeF0BPDIkCNkCQ2i6"
    }
})
 
// Create the apollo client
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

Vue.use(VueApollo) // Install the vue plugin
 
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.use(DropdownPlugin)
Vue.use(BootstrapVue) // Make BootstrapVue available throughout the project
Vue.use(IconsPlugin) // Optionally install the BootstrapVue icon components plugin
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
