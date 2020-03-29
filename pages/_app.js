import { ApolloProvider } from '@apollo/react-hooks';
import App from 'next/app';
import '../node_modules/bulma/css/bulma.css';
import '../css/custom-styles.css';
import withApollo from '../util.apollo-client.js';

class MyApp extends App {
	render() {
		const {Component, pageProps, client} = this.props;
		return (
			<ApolloProvider client={client}>
				<Component {...pageProps} />
			</ApolloProvider>
		)
	}
}

export default withApollo(MyApp);