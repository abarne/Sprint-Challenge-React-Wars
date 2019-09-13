import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StarWarsCard = (props) => {
	return (
		<div>
			<h1>Name: {props.name}</h1>
			<h3>Gender: {props.gender}</h3>
			<h3>Hair Color: {props.hairColor}</h3>
			<h3>Birth Year: {props.birthYear}</h3>
			<h3>Eye Color: {props.eyeColor}</h3>
			<h3>Height: {props.height}</h3>
			<h3>Weight: {props.weight}</h3>
			<h3>Skin Color: {props.skinColor}</h3>
		</div>
	);
};

export default StarWarsCard;
