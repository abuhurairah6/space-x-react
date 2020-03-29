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
		<p>{data.rocket.name}</p>
	);
};

export default Rocket;