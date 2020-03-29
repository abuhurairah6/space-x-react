import Link from 'next/link'

class RocketComponent extends React.Component {
	render() {
		const rockets = this.props.rockets;
		const rocketsArr = [];
		for (let key in rockets){
			rocketsArr.push(rockets[key]);
		};

		return (
			<section className="section">
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
};

function RocketHeader(props) {
	return (
		<div className="column is-half">
			<Link href={{ pathname: "/rocket", query: {data: JSON.stringify(props.rocket)} }} as={`/rocket/${props.rocket.name}`}>
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

function RocketDetails(props) {
	return (
		<div/>
	);
};

export default RocketComponent;