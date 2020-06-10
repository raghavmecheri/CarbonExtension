import React from 'react';
import styled from 'styled-components';

const QuestionQuiz = styled.div`
	font-size: 25px;
	padding-top: 0.5em;
	padding-bottom: 0.5em;
	display: flex;
	justify-content: center;
	@media (max-width: 550px) {
		padding-top: 0;
	}
`;

const SubQuestionQuiz = styled.div`
	font-size: 15px;
	padding-bottom: 1.5em;
	display: flex;
	justify-content: center;
`;

const ComplexQuestionBox = styled.div`
	font-family: 'Heebo', sans-serif;
	width: 100%;
	font-size: 10px;
	padding-left: 17%;
	@media (max-width: 1200px) {
		padding-left: 17%;
	}
	@media (max-width: 1150px) {
		padding-left: 15%;
	}
	@media (max-width: 1100px) {
		padding-left: 12%;
	}
	@media (max-width: 1000px) {
		padding-left: 10%;
	}
	@media (max-width: 900px) {
		padding-left: 8%;
	}
	@media (max-width: 810px) {
		padding-left: 5%;
	}
`;

const QuestionWrapper = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;
	position: relative;
	@media (max-width: 810px) {
		height: 4.5em;
	}
`;

const QuestionComplex = styled.div`
	font-size: 20px;
	margin: 0.3em 0;
	max-width: null;
	@media (max-width: 810px) {
		max-width: 7em;
		text-align: initial;
		font-size: 15px;
	}
`;

const QuestionInput = styled.input`
	position: absolute;
	right: 20%;
	background: #90ee9052;
	border: none;
	border-bottom: 2px solid lightgreen;
	border-radius: 0.5em;
	height: 2em;
	width: 15em;
	text-align: center;
	font-weight: 600;
	font-size: 15px;
	&:focus {
		background: white;
	}
	@media (max-width: 1200px) {
		width: 12em;
		right: 16%;
	}
	@media (max-width: 1150px) {
		width: 12em;
		right: 12%;
	}
	@media (max-width: 1000px) {
		width: 10em;
		right: 10%;
	}
	@media (max-width: 900px) {
		width: 10em;
		right: 8%;
	}
	@media (max-width: 810px) {
		width: 7em;
		right: 5%;
	}
`;

const Selector = styled.select`
	position: absolute;
	right: 20%;
	width: 11em;
	font-size: medium;
	border-radius: 0.3em;
	@media (max-width: 1200px) {
		width: 11em;
		right: 16%;
	}
	@media (max-width: 1150px) {
		width: 8em;
		right: 12%;
	}
	@media (max-width: 1000px) {
		width: 8em;
		right: 10%;
	}
	@media (max-width: 900px) {
		width: 8em;
		right: 8%;
	}
	@media (max-width: 810px) {
		width: 6em;
		right: 5%;
	}
`;

export const QuestionQuizIndividualComplex = ({
	rowsValues,
	handleSliderInput,
	sliderValue,
	handleInputIndividual,
}) => {
	const {
		id,
		title,
		description,
		description2,
		image2,
		rowTitles,
		placeHolder,
		dropdownTypes,
		rowStructureSimple,
		rowStructureComplex,
	} = rowsValues;

	return (
		<>
			<QuestionQuiz>{description2}</QuestionQuiz>
			<SubQuestionQuiz>(Higher or Lower than average)</SubQuestionQuiz>
			<ComplexQuestionBox>
				{rowTitles.map((question, key) => {
					let dropdown = false;
					if (
						question === 'Tipo de Combustible' ||
						question === 'Cilindarada Motocicleta'
					) {
						dropdown = true;
					}

					return (
						<QuestionWrapper>
							<QuestionComplex>{question}</QuestionComplex>
							{dropdown ? (
								<Selector
									value={rowStructureComplex[0][question]}
									onChange={(e) => handleInputIndividual(e, question)}>
									{dropdownTypes.map((item, i) => {
										return <option key={i}>{item}</option>;
									})}
								</Selector>
							) : (
								<QuestionInput
									type='number'
									id={0}
									onChange={(e) => handleInputIndividual(e, question)}
									value={rowStructureComplex[0][question] || ''}
									placeholder={placeHolder[question]}
								/>
							)}
						</QuestionWrapper>
					);
				})}
			</ComplexQuestionBox>
		</>
	);
};
