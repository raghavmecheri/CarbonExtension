import React from 'react';
import styled from 'styled-components';

const ComplexQuestionBox = styled.div`
	font-family: 'Heebo', sans-serif;
	width: 90vw;
	padding: 0 2em;
	@media (max-width: 530px) {
	}
`;

const QuestionWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid black;
	padding: 0.7em;
	@media (max-width: 810px) {
		height: 4.5em;
	}
	@media (max-width: 610px) {
		height: 6.5em;
		padding: 0;
	}
`;

const QuestionComplex = styled.div`
	font-family: 'Heebo', sans-serif;
	font-size: 18px;
	text-align: initial;
	max-width: 60%;
	@media (max-width: 610px) {
		font-size: ${(props) => (props.id === 3 ? '15px' : console.log(props.id))};
	}
`;

const QuestionInput = styled.input`
	background: #1acefb59;
	border: none;
	border-bottom: 2px solid #1bccfc;
	border-radius: 0.5em;
	height: 2em;
	width: 35%;
	margin-right: 2em;
	text-align: center;
	font-weight: 600;
	font-size: 15px;
	&:focus {
		background: white;
	}
	@media (max-width: 1200px) {
		width: 30%;
	}
	@media (max-width: 1150px) {
		width: 30%;
	}
	@media (max-width: 1000px) {
		width: 30%;
	}
	@media (max-width: 900px) {
		width: 30%;
	}
	@media (max-width: 610px) {
		width: 30%;
		width: 30%;
		margin-right: 2%;
	}
`;

const Selector = styled.select`
	width: 25%;
	margin-right: 8.5%;
	height: 2em;
	border-radius: 0.3em;
	@media (max-width: 1200px) {
		width: 25%;
		margin-right: 8.5%;
		height: 2em;
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
	@media (max-width: 610px) {
		width: 6em;
		right: 5%;
		margin-right: 0%;
	}
`;

export const QuestionWaterQuizIndividualComplex = ({
	rowsValues,
	handleWaterInput,
}) => {
	const {
		id,
		dropdownKey,
		dropdown,
		rowTitles,
		placeHolder,
		rowStructureComplex,
	} = rowsValues;

	return (
		<>
			<ComplexQuestionBox>
				{rowTitles.map((question, key) => {
					return (
						<QuestionWrapper>
							<QuestionComplex id={id}>{question}</QuestionComplex>
							{key === dropdownKey[0] || key === dropdownKey[1] ? (
								<Selector
									value={rowStructureComplex[question]}
									onChange={(e) => handleWaterInput(e, question)}>
									{dropdown[key].map((item, i) => {
										return <option key={i}>{item}</option>;
									})}
								</Selector>
							) : (
								<QuestionInput
									type='number'
									id={0}
									onChange={(e) => handleWaterInput(e, question)}
									value={rowStructureComplex[question] || ''}
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
