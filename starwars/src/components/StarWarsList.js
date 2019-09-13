import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StarWarsCard from './StarWarsCard';
import styled from 'styled-components';

const CharacterCard = styled.div`
	// display: flex;
	width: 300px;
	justify-content: space-between;
	margin: 20px;
	border: 5px solid #35271d;
	background: rgba(168, 147, 130, 0.5);

	color: black;
`;
const CharacterContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
export default function StarWarsList(props) {
	const [ characters, setCharacters ] = useState([]);

	useEffect(
		() => {
			axios
				.get(`https://swapi.co/api/people/?page=${props.page}`)
				.then((response) => {
					console.log(response);
					const characterInfo = response.data.results;
					console.log(characterInfo);
					setCharacters(characterInfo);
				})
				.catch((error) => {
					console.log('The data was not returned, ', error);
				});
		},
		[ props.page ]
	);

	return (
		<CharacterContainer>
			{characters.map((character) => {
				return (
					<CharacterCard>
						<StarWarsCard
							key={character.created}
							name={character.name}
							gender={character.gender}
							hairColor={character.hair_color}
							birthYear={character.birth_year}
							eyeColor={character.eye_color}
							height={character.height}
							weight={character.mass}
							skinColor={character.skin_color}
						/>
					</CharacterCard>
				);
			})}
		</CharacterContainer>
	);
}
