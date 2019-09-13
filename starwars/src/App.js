import React from 'react';
import './App.css';
import styled from 'styled-components';
import StarWarsList from './components/StarWarsList';

const AppContainer = styled.div`
	// display: flex;
	// flex-direction: column;
`;

const AppHeader = styled.h1`
	text-align: Center;
	font-size: 4rem;
`;

const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.

	return (
		<div>
			<AppHeader>React Wars</AppHeader>
			<AppContainer>
				<StarWarsList />
			</AppContainer>
		</div>
	);
};

export default App;
