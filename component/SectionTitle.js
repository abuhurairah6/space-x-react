export default function SectionTitle(props) {
	return (
		<section className="section">
			<div className="container">
				<h1 className="title has-text-centered">
					{props.title}
				</h1>
			</div>
		</section>
	)
}