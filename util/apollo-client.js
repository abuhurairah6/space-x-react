import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import withApollo from 'next-with-apollo';
import fetch from 'node-fetch';
import gql from 'graphql-tag';

const cache = new InMemoryCache();
const link = new createHttpLink({
  uri: 'https://api.spacex.land/graphql/', fetch: fetch
});

export default withApollo (
	({ initialState }) => {
		return new ApolloClient({
		  cache,
		  link
		});
	}
)