import React, { useState } from 'react';
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

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 400px;
	margin: 0 auto;
`;

const App = () => {
	const [ page, setPage ] = useState(1);
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.

	return (
		<div>
			<AppHeader>React Wars</AppHeader>
			<ButtonContainer>
				<div>
					<button
						onClick={() => {
							if (page > 1) {
								setPage(page - 1);
							}
						}}
					>
						Previous Page
					</button>
				</div>
				<div>
					<button onClick={() => setPage(page + 1)}>Next Page</button>
				</div>
			</ButtonContainer>
			<AppContainer>
				<StarWarsList page={page} />
			</AppContainer>
		</div>
	);
};

export default App;
