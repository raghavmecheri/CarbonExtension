import bg0 from '../assets/bg_water_i_1.png';
import bg1 from '../assets/bg_water_i_1.png';
import bg2 from '../assets/bg_water_i_1.png';
import bg3 from '../assets/bg_water_i_1.png';

export const fakeData = {
	formState: {
		0: {
			id: 0,
			title: 'Alimentation',
			footprint: 'water',
			ComplexForm: true,
			ComplexFormState: false,
			description: '',
			description2: 'How much water do you use in your alimentation?',
			rowTitles: [
				'Kg of Cereals per Week',
				'Kg of Meat per Week',
				'Kg of Diary Products per Week',
				'Nº Eggs per Week',
				'Kg of Vegetables per Week',
				'Kg of Fruit per Week',
				'Kg of Starchy roots per Week',
				'Cups of Coffe per day',
				'Cups of Tea per day',
			],
			rowTitlesSlider: [
				'Kg of Cereals per Week',
				'Kg of Meat per Week',
				'Kg of Diary Products per Week',
				'Nº Eggs per Week',
				'Kg of Vegetables per Week',
				'Kg of Fruit per Week',
				'Kg of Starchy roots per Week',
			],
			rowTitlesInput: ['Cups of Coffe per day', 'Cups of Tea per day'],
			placeHolder: {
				'Kg of Cereals per Week': '10kg',
				'Kg of Meat per Week': '10kg',
				'Kg of Diary Products per Week': '10kg',
				'Nº Eggs per Week': '10kg',
				'Kg of Vegetables per Week': '10kg',
				'Kg of Fruit per Week': '10kg',
				'Kg of Starchy roots per Week': '10kg',
				'Cups of Coffe per day': '3',
				'Cups of Tea per day': '3',
			},
			simpleName: 'Alimentation',
			rowStructureSimple: {
				'Kg of Cereals per Week': '6',
				'Kg of Meat per Week': '6',
				'Kg of Diary Products per Week': '6',
				'Nº Eggs per Week': '6',
				'Kg of Vegetables per Week': '6',
				'Kg of Fruit per Week': '6',
				'Kg of Starchy roots per Week': '6',
			},
			rowStructureComplex: {
				'Kg of Cereals per Week': '4',
				'Kg of Meat per Week': '4',
				'Kg of Diary Products per Week': '4',
				'Nº Eggs per Week': '4',
				'Kg of Vegetables per Week': '4',
				'Kg of Fruit per Week': '4',
				'Kg of Starchy roots per Week': '4',
				'Cups of Coffe per day': '4',
				'Cups of Tea per day': '4',
			},
			dropdownKey: [],
			dropdown: {},
			image: bg0,
			sideTitle: 'Weekly Food',
			sideBody:
				'This is the footprint produced by the use of different uses of trasnports. And it would be included inside the First scope of the Carbon Footprint.',
			infoPlusBody:
				"That the earth isn't round and it is in fact flat. All those people laughing about it and they were rigth all along.",
		},
		1: {
			id: 1,
			title: 'Domestic Water Use',
			ComplexForm: false,
			ComplexFormState: true,
			description: 'Indoors',
			description2: 'How much water do you use in your alientation?',
			rowTitles: [
				'Nº Showers per day',
				'Minutes of Shower',
				'Nº Baths per week',
				'Does the water run while brushing your teeth:',
				'Do you have dual flush toilet?',
				'Nº Times Dishes Wahsed each day',
				'Minutes the water run each wash',
				'Times Dish Washer is used per week',
			],
			placeHolder: {
				'Nº Showers per day': '1',
				'Minutes of Shower': '5min',
				'Nº Baths per week': '0',
				'Does the water run while brushing your teeth:': 'Yes',
				'Do you have dual flush toilet?': 'No',
				'Nº Times Dishes Wahsed each day': '2',
				'Minutes the water run each wash': '7',
				'Times Dish Washer is used per week': '0',
			},
			rowStructureComplex: {
				'Nº Showers per day': '1',
				'Minutes of Shower': '5',
				'Nº Baths per week': '',
				'Does the water run while brushing your teeth:': '',
				'Do you have dual flush toilet?': '',
				'Nº Times Dishes Wahsed each day': '1',
				'Minutes the water run each wash': '5',
				'Times Dish Washer is used per week': '5',
			},
			dropdownKey: [3, 4],
			dropdown: {
				3: ['Yes', 'No'],
				4: ['Yes', 'No', 'No flushing. Eco-toilet'],
			},
			image: bg1,
			sideTitle: 'Weekly Food',
			sideBody:
				'This is the footprint produced by the use of different uses of trasnports. And it would be included inside the First scope of the Carbon Footprint.',
			infoPlusBody:
				"That the earth isn't round and it is in fact flat. All those people laughing about it and they were rigth all along.",
		},
		2: {
			id: 2,
			title: 'Domestic Water Use',
			ComplexForm: false,
			ComplexFormState: true,
			description: 'Outdoors',
			description2: 'How much water do you use in your alientation?',
			rowTitles: [
				'Times you wash your car per week',
				'Times you water your garden per week',
				'Minutes you water your garden each time',
				'Minutes per week you spend rising equipment, sidewalks or driveways',
				'Capacity of your swimming pool',
			],
			placeHolder: {
				'Times you wash your car per week': '',
				'Times you water your garden per week': '',
				'Minutes you water your garden each time': '',
				'Minutes per week you spend rising equipment, sidewalks or driveways':
					'',
				'Capacity of your swimming pool': '',
			},
			rowStructureComplex: {
				'Times you wash your car per week': '2',
				'Times you water your garden per week': '2',
				'Minutes you water your garden each time': '5',
				'Minutes per week you spend rising equipment, sidewalks or driveways':
					'',
				'Capacity of your swimming pool': '10',
			},
			dropdownKey: [],
			dropdown: {},
			image: bg2,
			sideTitle: 'Weekly Food',
			sideBody:
				'This is the footprint produced by the use of different uses of trasnports. And it would be included inside the First scope of the Carbon Footprint.',
			infoPlusBody:
				"That the earth isn't round and it is in fact flat. All those people laughing about it and they were rigth all along.",
		},
		3: {
			id: 3,
			title: 'Industrial Goods Consumption',
			ComplexForm: false,
			ComplexFormState: true,
			description: '',
			description2: 'How much water do you use in your alientation?',
			rowTitles: [
				'What is your gross yearly income?(Only that part of income which is consumed by you)',
			],
			placeHolder: {
				'What is your gross yearly income?(Only that part of income which is consumed by you)':
					'20000€',
			},
			rowStructureComplex: {
				'What is your gross yearly income?(Only that part of income which is consumed by you)':
					'10000',
			},
			dropdownKey: [],
			dropdown: {},
			image: bg3,
			sideTitle: 'Weekly Food',
			sideBody:
				'This is the footprint produced by the use of different uses of trasnports. And it would be included inside the First scope of the Carbon Footprint.',
			infoPlusBody:
				"That the earth isn't round and it is in fact flat. All those people laughing about it and they were rigth all along.",
		},
	},
};
