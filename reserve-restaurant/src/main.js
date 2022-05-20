import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'
import store from './store'
import { BootstrapVue, IconsPlugin, DropdownPlugin } from 'bootstrap-vue'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Import Bootstrap and BootstrapVue CSS files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const httpLink = new HttpLink({
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
    connectToDevTools: true
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
