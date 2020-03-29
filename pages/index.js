import data from '../data.json';
import Layout from '../component/Layout.js';
import Rocket from '../component/Rocket.js';
import SectionTitle from '../component/SectionTitle.js';

export default function Home() {
	return (
		<body>
			<Layout>
				<SectionTitle
					title="List of Rockets"
				/>
				<Rocket
					rockets={data.rockets}
				/>
			</Layout>
		</body>
	);
};