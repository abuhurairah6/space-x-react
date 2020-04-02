import App from 'next/app';
import '../node_modules/bulma/css/bulma.css';
import './custom-styles.css';
import { ApolloProvider } from '@apollo/react-hooks';
import withApollo from '../util/apollo-client.js';

class MyApp extends App {
	render() {
		const {Component, pageProps, apollo} = this.props;
		return (
			<ApolloProvider client={apollo}>
				<Component {...pageProps} />
			</ApolloProvider>
		)
	}
}

export default withApollo(MyApp);