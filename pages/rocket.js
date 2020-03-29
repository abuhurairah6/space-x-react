import Layout from '../component/Layout.js';

class Rocket extends React.Component {
	static async getInitialProps(context) {
		const rocket = JSON.parse(context.query.data)
		return {rocket}
	}

	render() {
		return (
			<Layout>
				<section className="section">
					<p>{this.props.rocket.name}</p>
				</section>
			</Layout>
		);
	};
};

export default Rocket;