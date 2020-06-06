import bgO1 from '../assets/bg_carbon_side_i_1.png';
import bgO11 from '../assets/bg_carbon_i_1.png';
import bgO2 from '../assets/bg_carbon_side_i_2.jpg';
import bgO22 from '../assets/bg_carbon_i_2.png';
import bgO33 from '../assets/bg_carbon_i_3.png';
import bgO3 from '../assets/bg_carbon_b_3.jpg';

export const PersonCarbonQuizData = {
	0: {
		id: 0,
		title: 'Living Place',
		type: 'simple',
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
		rowStructure: [],
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
		description: 'How much travel do you do?',
		description2: 'How much do you use your car?',
		rowTitles: [
			'Km recorridos al año',
			'Eficiencia Del Vehiculo',
			'Tipo de Combustible',
		],
		rowsType: [
			{
				'Km recorridos al año': '',
				'Eficiencia Del Vehiculo': '',
				'Tipo de Combustible': '',
			},
		],
		placeHolder: {
			'Km recorridos al año': '12000 Km',
			'Eficiencia Del Vehiculo': '5.5 L',
			'Tipo de Combustible': '',
		},
		rowStructure: [],
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
		sideTitle: 'Tranporte',
		sideBody:
			'This is the footprint produced by the use of different uses of trasnports. And it would be included inside the First scope of the Carbon Footprint.',
		infoPlusBody:
			"That the earth isn't round and it is in fact flat. All those people laughing about it and they were rigth all along.",
	},
	2: {
		id: 2,
		title: 'Motocicle',
		description: 'Are you a biker?',
		description2: 'How often do you ride?',
		rowStructure: [],
		rowsType: [{ title: '', energyType: '', quantity: '' }],
		placeHolder: {
			first: 'Sotano',
			third: '',
			energyType: '',
			second: '100 litres',
		},
		rowTitles: [
			'Edificio/Sede',
			'Nombre del Gas',
			'Tipo de Equipo',
			'Emisiones Parciales',
		],
		dropdownTypes: ['--', '- 125cc', '125cc - 500cc', '500cc -'],
		image: bgO3,
		image2: bgO33,
		sideTitle: 'Fugas',
		sideBody:
			'This is the footprint produced by the use of different uses of trasnports. And it would be included inside the First scope of the Carbon Footprint.',
		infoPlusBody:
			"That the earth isn't round and it is in fact flat. All those people laughing about it and they were rigth all along.",
	},
	3: {
		id: 3,
		title: 'Car',
		description: 'How much travel do you do?',
		description2: 'How much do you use your car?',
		rowTitles: [
			'Km recorridos al año',
			'Eficiencia Del Vehiculo',
			'Tipo de Combustible',
		],
		rowsType: [
			{
				'Km recorridos al año': '',
				'Eficiencia Del Vehiculo': '',
				'Tipo de Combustible': '',
			},
		],
		placeHolder: {
			'Km recorridos al año': '12000 Km',
			'Eficiencia Del Vehiculo': '5.5 L',
			'Tipo de Combustible': '',
		},
		rowStructure: [],
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
		sideTitle: 'Tranporte',
		sideBody:
			'This is the footprint produced by the use of different uses of trasnports. And it would be included inside the First scope of the Carbon Footprint.',
		infoPlusBody:
			"That the earth isn't round and it is in fact flat. All those people laughing about it and they were rigth all along.",
	},
};
