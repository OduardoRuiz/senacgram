import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://aula-react-quintas.hasura.app/v1/graphql',
    headers : { 'x-hasura-admin-secret' : 'YKKOTAyD4vHCe81H4ZRvBT6bXLNCg2mxIv9q0WkIokzD7247zmrQpUzjol0G2lJ2'},
    cache: new InMemoryCache()
});

export default client;