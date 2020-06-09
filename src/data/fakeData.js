import bgO1 from '../assets/bg_carbon_side_i_1.png';
import bgO11 from '../assets/bg_carbon_i_1.png';
import bgO2 from '../assets/bg_carbon_side_i_2.jpg';
import bgO22 from '../assets/bg_carbon_i_2.png';
import bgO33 from '../assets/bg_carbon_i_3.png';
import bgO3 from '../assets/bg_carbon_side_i_3.jpg';
import bgO44 from '../assets/bg_carbon_i_4.png';
import bgO4 from '../assets/bg_carbon_side_i_4.png';
import bgO55 from '../assets/bg_carbon_i_5.png';
import bgO5 from '../assets/bg_carbon_side_i_5.png';
import bgO66 from '../assets/bg_carbon_i_6.png';
import bgO6 from '../assets/bg_carbon_side_i_6.png';
import bgO7 from '../assets/bg_carbon_side_i_7.png';

export const fakeData = {
	formState: {
		0: {
			id: 0,
			title: 'Living Place',
			type: 'individual',
			footprint: 'carbon',
			ComplexForm: true,
			ComplexFormState: true,
			persons: 'Cuanity of persons?',
			description: 'How green are you?',
			description2: 'How much electricity do you consume?',
			rowTitles: [
				'Electricity',
				'Natural Gas',
				'Gasoleo',
				'Carbon',
				'GLP',
				'Propano',
				'Pellets de Madera',
			],
			rowsType: [
				{
					Electricity: '',
					'Natural Gas': '',
					Gasoleo: '',
					Carbon: '',
					GLP: '',
					Propano: '',
					'Pellets de Madera': '',
				},
			],
			placeHolder: {
				Electricity: '1000 kWh',
				'Natural Gas': '2000 kWh',
				Gasoleo: '1000 L',
				Carbon: '100 ton',
				GLP: '1000 L',
				Propano: '1000 L',
				'Pellets de Madera': '100 ton',
			},
			rowStructureSimple: { slider: '4' },
			simpleName: 'Electricity',
			rowStructureComplex: [
				{
					Electricity: '1000',
					'Natural Gas': '2000',
					Gasoleo: '',
					Carbon: '',
					GLP: '',
					Propano: '',
					'Pellets de Madera': '',
				},
			],
			dropdownTypes: [],
			image: bgO1,
			image2: bgO11,
			sideTitle: 'House',
			sideBody:
				'This is the footprint produced by the use of different uses of trasnports. And it would be included inside the First scope of the Carbon Footprint.',
			infoPlusBody:
				"That the earth isn't round and it is in fact flat. All those people laughing about it and they were rigth all along.",
		},
		1: {
			id: 1,
			title: 'Car',
			ComplexForm: true,
			ComplexFormState: true,
			description: 'How much tdo you travel?',
			description2: 'How much do you use your car?',
			rowTitles: [
				'Km recorridos al año',
				'Eficiencia Del Vehiculo',
				'Tipo de Combustible',
			],
			rowsType: [
				{
					'Km recorridos al año': '1000',
					'Eficiencia Del Vehiculo': '5',
					'Tipo de Combustible': '',
				},
			],
			placeHolder: {
				'Km recorridos al año': '12000 Km',
				'Eficiencia Del Vehiculo': '5.5 L',
				'Tipo de Combustible': 'Gasolina',
			},
			rowStructureSimple: { slider: '4', car: 'Gasolina', eficiency: '5' },
			simpleName: 'Car',
			rowStructureComplex: [
				{
					'Km recorridos al año': '1000',
					'Eficiencia Del Vehiculo': '5',
					'Tipo de Combustible': 'Gasolina',
				},
			],
			dropdownTypes: [
				'--',
				'Gasolina',
				'Gasoleo A o B',
				'E10',
				'E86',
				'B7',
				'B10',
				'B20',
				'B30',
				'B100',
				'XTL',
				'LNG',
				'CNG',
				'LPG',
				'H2',
			],
			image: bgO2,
			image2: bgO22,
			sideTitle: 'Tranport',
			sideBody:
				'This is the footprint produced by the use of different uses of trasnports. And it would be included inside the First scope of the Carbon Footprint.',
			infoPlusBody:
				"That the earth isn't round and it is in fact flat. All those people laughing about it and they were rigth all along.",
		},
		2: {
			id: 2,
			title: 'Motocicle',
			ComplexForm: true,
			ComplexFormState: true,
			description: 'Are you a biker?',
			description2: 'How often do you ride?',
			rowStructureSimple: { slider: '4', moto: '- 125cc' },
			simpleName: 'Moto',
			rowStructureComplex: [
				{
					'Km Recorridos al año': '1000',
					'Cilindarada Motocicleta': '- 125cc',
				},
			],
			rowsType: '',
			placeHolder: {
				'Km Recorridos al año': '2900 km',
			},
			rowTitles: ['Km Recorridos al año', 'Cilindarada Motocicleta'],
			dropdownTypes: ['--', '- 125cc', '125cc - 500cc', '500cc -'],
			image: bgO3,
			image2: bgO33,
			sideTitle: 'Transport',
			sideBody:
				'This is the footprint produced by the use of different uses of trasnports. And it would be included inside the First scope of the Carbon Footprint.',
			infoPlusBody:
				"That the earth isn't round and it is in fact flat. All those people laughing about it and they were rigth all along.",
		},
		3: {
			id: 3,
			title: 'RENFE',
			ComplexForm: false,
			ComplexFormState: true,
			description: 'How much do you travel?',
			description2: 'How much do you use the train?',
			rowTitles: ['Km recorridos al año'],
			rowsType: [
				{
					'Km recorridos al año': '',
				},
			],
			placeHolder: {
				'Km recorridos al año': '12000 Km',
			},
			rowStructureSimple: { slider: '4' },
			simpleName: 'RENFE',
			rowStructureComplex: [
				{
					'Km Recorridos al año': '1000',
				},
			],
			dropdownTypes: [],
			image: bgO4,
			image2: bgO44,
			sideTitle: 'Tranport',
			sideBody:
				'This is the footprint produced by the use of different uses of trasnports. And it would be included inside the First scope of the Carbon Footprint.',
			infoPlusBody:
				"That the earth isn't round and it is in fact flat. All those people laughing about it and they were rigth all along.",
		},
		4: {
			id: 4,
			title: 'Public Transport',
			ComplexForm: false,
			ComplexFormState: true,
			description: 'How much do you travel?',
			description2: 'How much do you use the train?',
			rowTitles: ['Km recorridos al año'],
			rowsType: [
				{
					'Km recorridos al año': '',
				},
			],
			placeHolder: {
				'Km recorridos al año': '12000 Km',
			},
			rowStructureSimple: { slider: '4' },
			rowStructureComplex: [
				{
					'Km Recorridos al año': '',
				},
			],
			dropdownTypes: [],
			image: bgO5,
			image2: bgO55,
			sideTitle: 'Tranport',
			sideBody:
				'This is the footprint produced by the use of different uses of trasnports. And it would be included inside the First scope of the Carbon Footprint.',
			infoPlusBody:
				"That the earth isn't round and it is in fact flat. All those people laughing about it and they were rigth all along.",
		},
		5: {
			id: 5,
			title: 'Plane',
			ComplexForm: false,
			ComplexFormState: true,
			description: 'How much do you travel?',
			description2: 'How much do you use the train?',
			rowTitles: ['Km recorridos al año'],
			rowsType: [
				{
					'Km recorridos al año': '',
				},
			],
			placeHolder: {
				'Km recorridos al año': '12000 Km',
			},
			rowStructureSimple: { slider: '4' },
			rowStructureComplex: [
				{
					'Km Recorridos al año': '',
				},
			],
			dropdownTypes: [],
			image: bgO6,
			image2: bgO66,
			sideTitle: 'Tranport',
			sideBody:
				'This is the footprint produced by the use of different uses of trasnports. And it would be included inside the First scope of the Carbon Footprint.',
			infoPlusBody:
				"That the earth isn't round and it is in fact flat. All those people laughing about it and they were rigth all along.",
		},
		6: {
			id: 6,
			title: 'Other Expense',
			ComplexForm: false,
			ComplexFormState: true,
			description: '',
			description2: 'How much do you shop?',
			rowTitles: [
				'Comida y Bebida',
				'Farmaceuticos',
				'Ropa y Textile',
				'Papel',
				'Tech items',
				'TV',
				'Motor Vehicles',
				'Furniture',
				'Hotels, Pubs, etc.',
				'Phone Costs',
				'Morgage & Bank',
				'Insurance',
				'Recreational, Sport Activities',
			],
			rowsType: [
				{
					'Comida y Bebida': '',
					Farmaceuticos: '',
					'Ropa y Textile': '',
					'Papel (Libros, periodicos, etc.)': '',
				},
			],
			placeHolder: {
				'Comida y Bebida': '',
				Farmaceuticos: '',
				'Ropa y Textile': '',
				'Papel (Libros, periodicos, etc.)': '',
			},
			optionsFood: [
				'--',
				'Lot of Meat',
				'Average Meat',
				'Few Meat',
				'Fish',
				'Vegetarian',
				'Vegan',
			],
			rowStructureSimple: { slider: '4' },
			rowStructureComplex: [
				{
					'Lot of Meat': '',
					'Average Meat': '',
					'Few Meat': '',
					Fish: '',
					Vegetarian: '',
					Vegan: '',
					Farmaceuticos: '100',
					'Ropa y Textile': '',
					'Papel (Libros, periodicos, etc.)': '',
					'Tech items': '',
					TV: '',
					'Motor Vehicles': '',
					Furniture: '',
					'Hotels, Pubs, etc.': '',
					'Phone Costs': '',
					'Morgage & Bank': '',
					Insurance: '',
					'Other Activities': '',
				},
			],
			dropdownTypes: [],
			image: bgO7,
			image2: '',
			sideTitle: 'Expenses',
			sideBody:
				'This is the footprint produced by the use of different uses of trasnports. And it would be included inside the First scope of the Carbon Footprint.',
			infoPlusBody:
				"That the earth isn't round and it is in fact flat. All those people laughing about it and they were rigth all along.",
		},
	},
};
