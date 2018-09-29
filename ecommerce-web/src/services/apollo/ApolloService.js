import ApolloClient, { InMemoryCache } from "apollo-boost";
import { getLoggedUser } from "../UserApi";

const URL_API = "http://localhost:3333/graphql";

const apolloClient = new ApolloClient({
  uri: URL_API,
  request: async operation => {
    const user = await getLoggedUser();
    operation.setContext({
      headers: {
        authorization: `Bearer ${user ? user.token : ""}`
      }
    });
  },
  cache: new InMemoryCache({ addTypename: false })
});

const apolloQueryService = (queryTag, variables) =>
  new Promise((resolve, reject) => {
    apolloClient
      .query({
        query: queryTag,
        variables
      })
      .then(result => resolve(result.data))
      .catch(error =>
        reject(error.graphQLErrors ? error.graphQLErrors[0] : error)
      );
  });

const apolloMutateService = (mutationTag, variables) =>
  new Promise((resolve, reject) => {
    apolloClient
      .mutate({
        mutation: mutationTag,
        variables
      })
      .then(result => resolve(result.data))
      .catch(error =>
        reject(error.graphQLErrors ? error.graphQLErrors[0] : error)
      );
  });

export { apolloClient, apolloQueryService, apolloMutateService };
