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
	padding: 0 2em;
`;

const QuestionWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid black;
	padding: 0.7em;
	@media (max-width: 810px) {
		height: 4.5em;
	}
`;

const QuestionComplex = styled.div`
	font-family: 'Heebo', sans-serif;
	font-size: 18px;
	text-align: initial;
	max-width: 60%;
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
		width: 47%;
	}
	@media (max-width: 1000px) {
		width: 47%;
	}
	@media (max-width: 900px) {
		width: 47%;
	}
	@media (max-width: 810px) {
		width: 47%;
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

export const QuestionWaterQuizIndividualComplex = ({
	rowsValues,
	handleWaterInput,
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

	const dropdown = false;

	return (
		<>
			<ComplexQuestionBox>
				{rowTitles.map((question, key) => {
					return (
						<QuestionWrapper>
							<QuestionComplex>{question}</QuestionComplex>
							{!dropdown ? (
								<QuestionInput
									type='number'
									id={0}
									onChange={(e) => handleWaterInput(e, question)}
									value={rowStructureComplex[question] || ''}
									placeholder={placeHolder[question]}
								/>
							) : (
								<Selector
									value={rowStructureComplex[0][question]}
									onChange={(e) => handleWaterInput(e, question)}>
									{dropdownTypes.map((item, i) => {
										return <option key={i}>{item}</option>;
									})}
								</Selector>
							)}
						</QuestionWrapper>
					);
				})}
			</ComplexQuestionBox>
		</>
	);
};
