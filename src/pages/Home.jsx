import React from 'react';
import PersonList from '../containers/PersonList';
import '../styles/Home.css';

const Home = () => {
	return (
		<>
			<div className='Home'>
				<h1>Cartas personalizadas</h1>
				<PersonList />
			</div>
			
		</>
	);
}

export default Home;
