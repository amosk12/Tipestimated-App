import { defineApolloClient } from '@nuxtjs/apollo'

export default defineApolloClient({
  // The GraphQL endpoint.
  // httpEndpoint: 'https://tipstimate.com/graphql',
  httpEndpoint: process.env.NUXT_GRAPHQL_ENDPOINT as string,

  httpLinkOptions: {
    credentials: 'same-origin'
  },

  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network'
    }
  },

  // LocalStorage token
  tokenName: 'auth-token',
  websocketsOnly: false,
  cookieAttributes: {
    sameSite: true,
  }
})
