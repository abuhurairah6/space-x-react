import './_app.js';
import data from '../data.json';
import Header from '../component/Header.js';
import Footer from '../component/Footer.js';
import Rocket from '../component/Rocket.js';
import SectionTitle from '../component/SectionTitle.js';

export default function Home() {
	return (
		<body>
			<Header 
				title="Space-X"
				subtitle="An interactive test design for space-x's rockets"
			/>
			<SectionTitle
				title="List of Rockets"
			/>
			<Rocket
				rockets={data.rockets}
			/>
			<Footer 
				subtitle="View source code here:"
				link="https://github.com/abuhurairah6/space-x-react"
			/>
		</body>
	);
};