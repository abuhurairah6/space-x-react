class Rocket extends React.Component {
	render() {
		const rockets = this.props.rockets;
		const rocketsArr = [];
		for (let key in rockets){
			rocketsArr.push(rockets[key]);
		};
		console.log(rocketsArr);

		return (
			<section className="section">
				<div className="container">
					<div className="columns">
						{rocketsArr.map(rocket => (
							<div className="column" key={rocket.id}>
								<div className="notification c-hover">
									{rocket.name}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		);
	};
};

export default Rocket;