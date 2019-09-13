import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StarWarsCard from './StarWarsCard';
import styled from 'styled-components';

const CharacterCard = styled.div`
	// display: flex;
	width: 300px;
	justify-content: space-between;
	margin: 20px;
	border: 2px solid #ccc;

	color: black;
`;
const CharacterContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
export default function StarWarsList() {
	const [ characters, setCharacters ] = useState([]);

	useEffect(() => {
		axios
			.get(`https://swapi.co/api/people`)
			.then((response) => {
				const characterInfo = response.data.results;
				console.log(characterInfo);
				setCharacters(characterInfo);
			})
			.catch((error) => {
				console.log('The data was not returned, ', error);
			});
	}, []);

	return (
		<CharacterContainer>
			{characters.map((character) => {
				return (
					<CharacterCard>
						<StarWarsCard
							key={character.id}
							name={character.name}
							gender={character.gender}
							hairColor={character.hair_color}
							birthYear={character.birth_year}
							eyeColor={character.eye_color}
							height={character.height}
							weight={character.weight}
							skinColor={character.skinColor}
						/>
					</CharacterCard>
				);
			})}
		</CharacterContainer>
	);
}
