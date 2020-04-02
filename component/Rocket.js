import Link from 'next/link';
import Loading from '../component/Loading.js';
import SectionTitle from '../component/SectionTitle.js';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

function RocketComponent() {
	const GET_ROCKETS = gql`
		{
			rockets {
				id
				name
			}
		}
	`;
	const { loading, error, data} = useQuery(GET_ROCKETS);

	if (loading) return <Loading />	;

	const rockets = data.rockets;
	const rocketsArr = [];
	for (let key in rockets){
		rocketsArr.push(rockets[key]);
	};

	return (
		<section className="section">
			<SectionTitle
				title="List of Rockets"
			/>
			<div className="container">
				<div className="columns is-multiline c-gap-1">
					{rocketsArr.map(rocket => (
						<RocketHeader
							rocket = {rocket}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

function RocketHeader(props) {
	return (
		<div className="column is-half">
			<Link href={{ pathname: "/rocket", query: {data: props.rocket.id} }} as={`/rocket/${props.rocket.name}`}>
				<div className="columns c-hover is-gapless">
					<div className="column is-one-fifth" key={props.rocket.id}>
						<figure className="image is-square">
							<img class="" src="https://bulma.io/images/placeholders/128x128.png"></img>
						</figure>
					</div>
					<div className="column">
						<div className="notification c-full-height">
							{props.rocket.name}<br/>
							{props.rocket.description}<br/>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default RocketComponent;