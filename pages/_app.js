import { ApolloProvider } from '@apollo/react-hooks';
import App from 'next/app';
import '../node_modules/bulma/css/bulma.css';
import '../css/custom-styles.css';

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import fetch from 'node-fetch';
import gql from 'graphql-tag';


class MyApp extends App {
	render() {
		const cache = new InMemoryCache();
		const link = new createHttpLink({
		  uri: 'https://api.spacex.land/graphql/', fetch: fetch
		});

		const client = new ApolloClient({
		  cache,
		  link
		});

		client.query({
		    query: gql`{
		  		rockets {
				    id
				    name
				    description
	  			}
			}`
		  })
		  .then(result => console.log(result));

		const {Component, pageProps} = this.props;
		return (
			<ApolloProvider client={client}>
				<Component {...pageProps} />
			</ApolloProvider>
		)
	}
}

export default MyApp;