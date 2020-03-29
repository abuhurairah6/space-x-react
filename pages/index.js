import data2 from '../data.json';
import Layout from '../component/Layout.js';
import Rocket from '../component/Rocket.js';
import SectionTitle from '../component/SectionTitle.js';
import Loading from '../component/Loading.js';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export default function Home() {
	const GET_ROCKETS = gql`
		{
			rockets {
				id
				name
			}
		}
	`;
	const { loading, error, data} = useQuery(GET_ROCKETS);

	if (loading) return <Loading />	;

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