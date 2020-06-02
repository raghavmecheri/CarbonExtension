import React from 'react';
import styled from 'styled-components';
import { ArrowheadDownOutline } from '@styled-icons/evaicons-outline';

// START SLIDER -------------------------------------------------------------------------------------------------------------------
const height = '16px';
const thumbHeight = 36;
const trackHeight = '16px';
// colours
const upperColor = '#888E92';
const thumbColor = 'white';
const thumbHoverColor = 'white';
const upperBackground = `linear-gradient(to bottom, ${upperColor}, ${upperColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;
const lowerBackground = `linear-gradient(to right, #00f260, #0575e6)`;
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

const QuestionsWrapper = styled.div`
	height: 100%;
	width: inherit;
	padding-top: 5vh;
`;

const Tittle = styled.div`
	font-size: 42px;
	font-weight: 600;
	display: flex;
	justify-content: center;
	color: #38a66d;
`;

const Description = styled.div`
	font-size: 20px;
	font-weight: 300;
	display: flex;
	justify-content: center;
	padding-bottom: 2em;
`;

const SimpleQuizImage = styled.img`
	width: 15em;
`;

const InputBox = styled.div`
	background-color: white;
	border-radius: 10px;
	width: 80%;
	margin: auto;
	padding-bottom: 1em;
	margin-top: 2em;
	-webkit-box-shadow: 5px 3px 31px -10px rgba(0, 0, 0, 0.66);
	-moz-box-shadow: 5px 3px 31px -10px rgba(0, 0, 0, 0.66);
	box-shadow: 5px 3px 31px -10px rgba(0, 0, 0, 0.66);
`;

const QuestionQuiz = styled.div`
	font-size: 25px;
	padding-top: 1em;
	padding-bottom: 0.5em;
	display: flex;
	justify-content: center;
`;

const SubQuestionQuiz = styled.div`
	font-size: 15px;
	padding-bottom: 1.5em;
	display: flex;
	justify-content: center;
`;

const SliderBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin: auto;
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

const DropdownIcon = styled(ArrowheadDownOutline)`
	margin-top: 2em;
	font-size: 16px;
	color: black;
	border: 2px solid black;
	border-radius: 50%;
	&:hover {
		color: #38a66d;
		border-color: #38a66d;
		cursor: pointer;
	}
`;

const TextDropdown = styled.div`
	padding-top: 0.4em;
	font-size: 17px;
	font-weight: 600;
`;

export const QuestionQuizSimple = ({
	rowsValues,
	handleSliderInput,
	sliderValue,
	handleQuizDesign,
}) => {
	const { id, title, description, image2 } = rowsValues;

	const SliderText = () => {
		if (sliderValue < 1) {
			return (
				<>
					<SliderTextStyle>Never</SliderTextStyle>
					<SliderSubTextStyle>{'(never)'}</SliderSubTextStyle>
				</>
			);
		} else if (sliderValue < 3) {
			return (
				<>
					<SliderTextStyle>Infrequently</SliderTextStyle>
					<SliderSubTextStyle>{'(Once a Month)'}</SliderSubTextStyle>
				</>
			);
		} else if (sliderValue < 7) {
			return (
				<>
					<SliderTextStyle>Often</SliderTextStyle>
					<SliderSubTextStyle>{'(Once a Week)'}</SliderSubTextStyle>
				</>
			);
		} else if (sliderValue <= 10) {
			return (
				<>
					<SliderTextStyle>Very Often</SliderTextStyle>
					<SliderSubTextStyle>{'(Once a Day)'}</SliderSubTextStyle>
				</>
			);
		}
	};

	return (
		<QuestionsWrapper>
			<Tittle>{title}</Tittle>
			<Description>{description}</Description>
			<SimpleQuizImage src={image2} />
			<InputBox>
				<QuestionQuiz>How often do you use the car?</QuestionQuiz>
				<SubQuestionQuiz>(Higher or Lower than average)</SubQuestionQuiz>
				<SliderBox>
					<LeftText>Never</LeftText>
					<SliderInput
						type='range'
						id={id}
						name='slider'
						min='0'
						max='10'
						step='2'
						defaultValue='4'
						onChange={(e) => handleSliderInput(e, id)}
					/>
					<RightText>Very Often</RightText>
				</SliderBox>
				<SliderText />
			</InputBox>
			{/* <DropdownIcon size='35' onClick={handleQuizDesign} />
			<TextDropdown>
				Add Detail Quiz
				<br />
				Improve Accuracy
			</TextDropdown> */}
		</QuestionsWrapper>
	);
};
