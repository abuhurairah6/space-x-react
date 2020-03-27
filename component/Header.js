export default function Header(props) {
	return (
		<section className="hero is-dark is-medium">
			<div className="hero-body has-text-centered">
				<h1 className="title">
					{props.title}
				</h1>
				<p>
					{props.subtitle}
				</p>
			</div>
		</section>
	)
}