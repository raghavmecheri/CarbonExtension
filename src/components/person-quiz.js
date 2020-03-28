import React, { useCallback, useState } from 'react';

const PersonQuizDefinition = [
	{
		ref: '1',
		title: 'hola',
		description: 'select One',
		options: [1, 2, 3, 4],
		image: 'www.google.com',
		layout: 'split',
	},
	{
		ref: '2',
		title: 'hola2',
		description: 'select One2',
		options: [1, 2, 3, 4],
		image: 'www.google.com2',
		layout: 'split2',
	},
];

const QuestionsOptions = ({ options }) => {
	return options.map((option, key) => {
		return <div key={key}>{option}</div>;
	});
};
const Question = ({ questionDef }) => {
	const { title, description, options, image, layout } = questionDef;
	return (
		<div>
			<h1>{title}</h1>
			<h3>{description}</h3>
			<QuestionsOptions options={options} />
		</div>
	);
};

const PersonQuiz = () => {
	const [questionIndex, setQuestionIndex] = useState(0);

	const next = useCallback(() => {
		if (questionIndex < PersonQuizDefinition.length - 1) {
			const newIndex = questionIndex + 1;
			setQuestionIndex(newIndex);
		}
	}, [questionIndex, setQuestionIndex]);
	const back = useCallback(() => {
		console.log(questionIndex);
		if (questionIndex >= 0) {
			const newIndex = questionIndex - 1;
			setQuestionIndex(newIndex);
		}
	}, [questionIndex, setQuestionIndex]);
	return (
		<>
			<Question questionDef={PersonQuizDefinition[questionIndex]} />
			<button onClick={back}>Back</button>
			<button onClick={next}>Next</button>
		</>
	);
};

export default PersonQuiz;
