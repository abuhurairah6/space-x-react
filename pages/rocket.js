import Link from 'next/link';
import Layout from '../component/Layout.js';
import Loading from '../component/Loading.js';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

class Rocket extends React.Component {
	static async getInitialProps(context) {
		const rocketID = context.query.data
		return {rocketID}
	}

	render() {
		return (
			<Layout>
				<section className="section">
					<RocketDetails rocketID={this.props.rocketID} />
				</section>
			</Layout>
		);
	};
};

function RocketDetails(props) {
	const GET_ROCKET = gql`
		{
			rocket(id: "${props.rocketID}") {
				id
				active
				wikipedia
				success_rate_pct
				stages
				name
				description
				country
				company
				cost_per_launch
				diameter {
					feet
					meters
				}
				height {
					feet
					meters
				}
			}
		}
		`;
	const { loading, error, data } = useQuery(GET_ROCKET);
	
	if (loading) return <Loading />	;

	return (
		<div className="column">
			<div className="columns is-gapless">
				<div className="column is-one-fifth" key={data.rocket.id}>
					<figure className="image is-square">
						<img class="" src="https://bulma.io/images/placeholders/128x128.png"></img>
					</figure>
				</div>
				<div className="column">
					<div className="notification c-full-height">
						{data.rocket.name}<br/>
						{data.rocket.active}<br/>
						{data.rocket.company}<br/>
						{data.rocket.country}<br/>
						{data.rocket.stages}<br/>
						{data.rocket.success_rate_pct}<br/>
						{data.rocket.cost_per_launch}<br/>
						{data.rocket.description}<br/>
					</div>
				</div>
			</div>
				<Link href="/">
					Back
				</Link>
		</div>
	);
};

export default Rocket;