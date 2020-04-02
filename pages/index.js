import Layout from '../component/Layout.js';
import Link from 'next/link';
import Rocket from '../component/Rocket.js';

export default function Home() {
	return (
		<body>
			<Layout>
				<Rocket />
			</Layout>
		</body>
	)
};