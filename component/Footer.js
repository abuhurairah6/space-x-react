export default function Footer(props) {
	return (
		<section className="hero is-dark">
			<div className="hero-body has-text-centered">
				<h1 className="title">
					{props.title}
				</h1>
				<p>
					{props.subtitle} <a href={props.link}>{props.link}</a>
				</p>
			</div>
		</section>
	)
}