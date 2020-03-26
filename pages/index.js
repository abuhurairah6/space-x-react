import './_app.js';
import data from '../data.json';
import Header from '../component/Header.js';
import Rocket from '../component/Rocket.js';

export default function Home() {

	let item;
	for (item in data.rockets) {
		// console.log(data.rockets[item]);
	}

	return (
		<div>
			<Header 
				title="Space-X"
			/>
			<Rocket
				rockets={data.rockets}
			/>
		</div>
	);
};