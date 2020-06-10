import React from 'react';
import styled from 'styled-components';

// START SLIDER -------------------------------------------------------------------------------------------------------------------
const height = '16px';
const thumbHeight = 36;
const trackHeight = '16px';
// colours
const upperColor = '#888E92';
const thumbColor = 'white';
const thumbHoverColor = 'white';
const upperBackground = `linear-gradient(to bottom, ${upperColor}, ${upperColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;
const lowerBackground = `linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb);`;
// Webkit cannot style progress so we fake it with a long shadow on the thumb element
const makeLongShadow = (color, size) => {
	let i = 18;
	let shadow = `${i}px 0 0 ${size} ${color}`;
	for (; i < 706; i++) {
		shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
	}
	return shadow;
};
const SliderInput = styled.input`
	overflow: hidden;
	display: block;
	appearance: none;
	max-width: 700px;
	border: 1px solid black;
	width: 30em;
	border-radius: 10px;
	height: ${height};
	cursor: pointer;
	&:focus {
		outline: none;
	}
	&::-webkit-slider-runnable-track {
		width: 100%;
		height: ${height};
		background: ${lowerBackground};
	}
	&::-webkit-slider-thumb {
		position: relative;
		appearance: none;
		height: ${thumbHeight}px;
		width: ${thumbHeight}px;
		background: ${thumbColor};
		border-radius: 100%;
		border: 1px solid black;
		border: 0;
		top: 50%;
		transform: translateY(-50%);
		box-shadow: ${makeLongShadow(upperColor, '-10px')};
		transition: background-color 150ms;
	}
	&::-moz-range-track,
	&::-moz-range-progress {
		width: 100%;
		height: ${height};
		background: ${upperBackground};
	}
	&::-moz-range-progress {
		background: ${lowerBackground};
	}
	&::-moz-range-thumb {
		appearance: none;
		margin: 0;
		height: ${thumbHeight};
		width: ${thumbHeight};
		background: ${thumbColor};
		border-radius: 100%;
		border: 1px solid black;
		border: 0;
		transition: background-color 150ms;
	}
	&::-ms-track {
		width: 100%;
		height: ${height};
		border: 0;
		/* color needed to hide track marks */
		color: transparent;
		background: transparent;
	}
	&::-ms-fill-lower {
		background: ${lowerBackground};
	}
	&::-ms-fill-upper {
		background: ${upperBackground};
	}
	&::-ms-thumb {
		appearance: none;
		height: ${thumbHeight};
		width: ${thumbHeight};
		background: ${thumbColor};
		border-radius: 100%;
		border: 1px solid black;
		transition: background-color 150ms;
		/* IE Edge thinks it can support -webkit prefixes */
		top: 0;
		margin: 0;
		box-shadow: none;
	}
	&:hover,
	&:focus {
		&::-webkit-slider-thumb {
			background-color: ${thumbHoverColor};
		}
		&::-moz-range-thumb {
			background-color: ${thumbHoverColor};
		}
		&::-ms-thumb {
			background-color: ${thumbHoverColor};
		}
	}
`;
// END SLIDER -----------------------------------------------------------------------------------------------------------------

const SliderBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin: auto;
`;
const SliderBox2 = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 47%;
`;

const LeftText = styled.div`
	padding-right: 0.5em;
	width: 4em;
	font-family: 'Heebo', sans-serif;
`;

const SliderTextStyle = styled.div`
	font-family: 'Heebo', sans-serif;
	font-size: 20px;
	font-weight: 600;
	padding: 5px;
`;

const SliderSubTextStyle = styled.div`
	font-family: 'Heebo', sans-serif;
	font-size: 15px;
`;

const RightText = styled.div`
	font-family: 'Heebo', sans-serif;
	padding-left: 0.5em;
	width: 4em;
`;
const WrapperComplexSimple = styled.div`
	padding-left: 5%;
	padding-right: 5%;
`;
const StyleComplexSimple = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid black;
	padding: 0.7em;
`;
const TitleSlider2 = styled.div`
	font-family: 'Heebo', sans-serif;
	font-size: 18px;
	text-align: initial;
	max-width: 49%;
`;
const QuestionInput = styled.input`
	background: #1acefb59;
	border: none;
	border-bottom: 2px solid #1bccfc;
	border-radius: 0.5em;
	height: 2em;
	width: 47%;
	text-align: center;
	font-weight: 600;
	font-size: 15px;
	&:focus {
		background: white;
	}
	@media (max-width: 1200px) {
		width: 47%;
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
	width: 47%;
	font-size: medium;
	border-radius: 0.3em;
	@media (max-width: 1200px) {
		width: 47%;
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

export const QuestionWaterQuizIndividualSimple = ({
	rowsValues,
	handleWaterSlider,
	handleWaterInput,
}) => {
	const {
		id,
		description2,
		rowTitlesSlider,
		rowTitlesInput,
		rowStructureSimple,
		rowStructureComplex,
	} = rowsValues;

	return (
		<>
			<WrapperComplexSimple>
				{rowTitlesSlider.map((question, key) => {
					return (
						<StyleComplexSimple>
							<TitleSlider2>{question}</TitleSlider2>
							<SliderBox2>
								<LeftText>Never</LeftText>
								<SliderInput
									type='range'
									id={id}
									key={'WaterSlider' + key}
									name='slider'
									min='0'
									max='10'
									step='2'
									value={rowStructureSimple.question}
									onChange={(e) => handleWaterSlider(e, id, question)}
								/>
								<RightText>Always</RightText>
							</SliderBox2>
						</StyleComplexSimple>
					);
				})}
				{rowTitlesInput.map((question, key) => {
					return (
						<StyleComplexSimple>
							<TitleSlider2>{question}</TitleSlider2>
							<QuestionInput
								key={'waterSimpleInput' + key}
								type='number'
								placeholder='5L / 100km'
								value={rowStructureComplex[question]}
								onChange={(e) => handleWaterInput(e, question)}
							/>
						</StyleComplexSimple>
					);
				})}
			</WrapperComplexSimple>
		</>
	);
};
