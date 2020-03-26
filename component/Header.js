export default function Header(props) {
	return (
		<section className="hero is-primary is-medium">
			<div className="hero-body has-text-centered">
				<h1 className="title">
					{props.title}
				</h1>
			</div>
		</section>
	)
}