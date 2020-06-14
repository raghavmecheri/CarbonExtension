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
const QuestionQuiz = styled.div`
	font-size: 25px;
	padding-top: 0.5em;
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
	@media (max-width: 640px) {
		display: none;
	}
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
	@media (max-width: 640px) {
		display: none;
	}
`;
const WrapperComplexSimple = styled.div`
	padding-left: 10%;
	padding-right: 5%;
`;
const StyleComplexSimple = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0.5em;
`;
const TitleSlider2 = styled.div`
	font-family: 'Heebo', sans-serif;
	font-size: 20px;
	text-align: initial;
`;
const QuestionInput = styled.input`
	background: #90ee9052;
	border: none;
	border-bottom: 2px solid lightgreen;
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
		height: 2em;
		margin: auto;
	}
`;

export const QuestionQuizIndividualSimple = ({
	rowsValues,
	handleSliderInput,
}) => {
	const {
		id,
		title,
		description,
		description2,
		image2,
		rowStructureSimple,
		dropdownTypes,
		placeHolder,
	} = rowsValues;

	const { slider } = rowStructureSimple;

	const SliderText = () => {
		if (slider < 1) {
			return (
				<>
					<SliderTextStyle>Nunca</SliderTextStyle>
					<SliderSubTextStyle>{'( x0 )'}</SliderSubTextStyle>
				</>
			);
		} else if (slider < 3) {
			return (
				<>
					<SliderTextStyle>Ocasionalmente</SliderTextStyle>
					<SliderSubTextStyle>{'( x1/3 )'}</SliderSubTextStyle>
				</>
			);
		} else if (slider < 5) {
			return (
				<>
					<SliderTextStyle>Normal</SliderTextStyle>
					<SliderSubTextStyle>{'( x1 )'}</SliderSubTextStyle>
				</>
			);
		} else if (slider < 7) {
			return (
				<>
					<SliderTextStyle>Frecuentemente</SliderTextStyle>
					<SliderSubTextStyle>{'( x1,5 )'}</SliderSubTextStyle>
				</>
			);
		} else if (slider < 9) {
			return (
				<>
					<SliderTextStyle>Muy Frecuentemente</SliderTextStyle>
					<SliderSubTextStyle>{'( x3 )'}</SliderSubTextStyle>
				</>
			);
		} else if (slider <= 10) {
			return (
				<>
					<SliderTextStyle>Siempre</SliderTextStyle>
					<SliderSubTextStyle>{'( x5 )'}</SliderSubTextStyle>
				</>
			);
		}
	};

	return (
		<>
			<QuestionQuiz>{description2}</QuestionQuiz>
			<SubQuestionQuiz>(Más alta o más baja que el promedio)</SubQuestionQuiz>
			{id === 1 ? (
				<WrapperComplexSimple>
					<StyleComplexSimple>
						<TitleSlider2>Km recorridos</TitleSlider2>
						<SliderBox2>
							<LeftText>Nunca</LeftText>
							<SliderInput
								type='range'
								id={id}
								name='slider'
								min='0'
								max='10'
								step='2'
								value={slider}
								onChange={(e) => handleSliderInput(e, id, 'slider')}
							/>
							<RightText>Siempre</RightText>
						</SliderBox2>
					</StyleComplexSimple>
					<StyleComplexSimple>
						<TitleSlider2>Tipo de Combustible</TitleSlider2>
						<Selector
							value={rowStructureSimple.coche}
							onChange={(e) => handleSliderInput(e, id, 'coche')}>
							{dropdownTypes.map((item, i) => {
								return <option key={i}>{item}</option>;
							})}
						</Selector>
					</StyleComplexSimple>
					<StyleComplexSimple>
						<TitleSlider2>Eficiencia</TitleSlider2>
						<QuestionInput
							type='number'
							placeholder='5L / 100km'
							value={rowStructureSimple.eficiencia}
							onChange={(e) => handleSliderInput(e, id, 'eficiencia')}
						/>
					</StyleComplexSimple>
				</WrapperComplexSimple>
			) : id === 2 ? (
				<WrapperComplexSimple>
					<StyleComplexSimple>
						<TitleSlider2>Km recorridos</TitleSlider2>
						<SliderBox2>
							<LeftText>Nunca</LeftText>
							<SliderInput
								type='range'
								id={id}
								name='slider'
								min='0'
								max='10'
								step='2'
								value={slider}
								onChange={(e) => handleSliderInput(e, id, 'slider')}
							/>
							<RightText>Siempre</RightText>
						</SliderBox2>
					</StyleComplexSimple>
					<StyleComplexSimple>
						<TitleSlider2>Cilindrada Moto</TitleSlider2>
						<Selector
							value={rowStructureSimple.moto}
							onChange={(e) => handleSliderInput(e, id, 'moto')}>
							{dropdownTypes.map((item, i) => {
								return <option key={i}>{item}</option>;
							})}
						</Selector>
					</StyleComplexSimple>
				</WrapperComplexSimple>
			) : (
				<>
					<SliderBox>
						<LeftText>Nunca</LeftText>
						<SliderInput
							type='range'
							id={id}
							name='slider'
							min='0'
							max='10'
							step='2'
							value={slider}
							onChange={(e) => handleSliderInput(e, id, 'slider')}
						/>
						<RightText>Siempre</RightText>
					</SliderBox>
					<SliderText />
				</>
			)}
		</>
	);
};
