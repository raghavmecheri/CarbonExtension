import bgO1 from '../assets/carbon_i_1.png';
import bgO2 from '../assets/carbon_i_2.png';
import bgO3 from '../assets/carbon_i_3.png';
import bgO4 from '../assets/carbon_i_4.png';
import bgO55 from '../assets/bg_carbon_i_5.png';
import bgO5 from '../assets/bg_carbon_side_i_5.png';
import bgO66 from '../assets/bg_carbon_i_6.png';
import bgO6 from '../assets/bg_carbon_side_i_6.png';
import bgO7 from '../assets/bg_carbon_side_i_7.png';

const IndividualCarbonData = {
	0: {
		id: 0,
		initialState: 'simple',
		changeState: true,
		title: 'Living',
		title2: 'How much electricity do you consume?',
		simpleState: { slider: '4' },
		complexState: {
			questions: {
				Electricity: '',
				'Natural Gas': '',
				Gasoleo: '',
				Carbon: '',
				GLP: '',
				Propane: '',
				'Wood Pellets': '',
			},
			placeHolder: {
				Electricity: '1000 kWh',
				'Natural Gas': '2000 kWh',
				Gasoleo: '1000 L',
				Carbon: '100 ton',
				GLP: '1000 L',
				Propane: '1000 L',
				'Wood Pellets': '100 ton',
			},
		},
		dropdownTypes: [],
		image: bgO1,
		image2: bgO1,
		sideTitle: 'Hogar',
		sideBody:
			'En esta pregunta se calcula la Huella de Carbono que produce el consumo de electricidad en su hogar. Se refiere a la huella que te corresponde en tu hogar. Si viven 4 personas deberas dividir el total de consumo entre 4.',
		sideBody2:
			'La media esta calculada por persona por hogar en España. Y este calculo corresponderia al Alcance 1.',
	},
	1: {
		id: 1,
		initialState: 'simple',
		changeState: true,
		title: 'Car',
		title2: 'How much do use the car?',
		simpleState: { slider: '4' },
		description2: '¿Cuánto usas tu coche?',
		rowTitles: ['Km. recorrido por año', 'Tipo de Combustible', 'Eficiencia del vehículo'],
		placeHolder: {
			'Km. recorrido por año': '12000 Km',
			'Tipo de Combustible': '',
			'Eficiencia del vehículo': '5.5 L',
		},
		rowStructureSimple: { slider: '4', coche: '', eficiencia: '' },
		simpleName: 'coche',
		rowStructureComplex: [
			{
				'Km. recorrido por año': '',
				'Tipo de Combustible': '',
				'Eficiencia del vehículo': '',
			},
		],
		dropdownTypes: ['--', 'Gasolina', 'Gasoleo A o B'],
		image: bgO2,
		sideTitle: 'Transporte',
		sideBody: 'En esta pregunta se calcula la Huella de Carbono que produce el uso del coche.',
		sideBody2:
			'En el caso de que sea un coche electrico o hibrido deberas contabilizarlo como gasto electrico de la pregunta anterior.',
	},
	2: {
		id: 2,
		initialState: 'simple',
		changeState: true,
		title: 'Bike',
		title2: 'How often do you ride?',
		simpleState: { slider: '4' },
		simpleName: 'moto',
		rowStructureComplex: [
			{
				'Km. recorrido por año': '',
				'Moto cc.': '',
			},
		],
		placeHolder: {
			'Km. recorrido por año': '2900 km',
		},
		rowTitles: ['Km. recorrido por año', 'Moto cc.'],
		dropdownTypes: ['--', '- 125cc', '125cc - 500cc', '500cc -'],
		image: bgO3,
		sideTitle: 'Moto',
		sideBody: 'En esta pregunta se calcula la Huella de Carbono que produce el uso de una moto.',
		sideBody2: '',
	},
	3: {
		id: 3,
		title: 'Train',
		ComplexForm: false,
		ComplexFormState: true,
		description: '¿Cuánto viajas?',
		description2: '¿Cuánto usas el tren?',
		rowTitles: ['Km. recorrido por año'],
		placeHolder: {
			'Km. recorrido por año': '12000 Km',
		},
		rowStructureSimple: { slider: '4' },
		rowStructureComplex: [
			{
				'Km. recorrido por año': '',
			},
		],
		dropdownTypes: [],
		image: bgO4,
		sideTitle: 'RENFE',
		sideBody:
			'En esta pregunta se calcula la Huella de Carbono que produce el uso de los servicios de trenes de RENFE.',
		sideBody2: '',
	},
	4: {
		id: 4,
		title: 'Transporte Publico',
		ComplexForm: false,
		ComplexFormState: true,
		description: '¿Cuánto viajas?',
		description2: '¿Cuánto usas el transporte público?',
		rowTitles: ['Km. recorrido por año'],
		placeHolder: {
			'Km. recorrido por año': '12000 Km',
		},
		rowStructureSimple: { slider: '4' },
		rowStructureComplex: [
			{
				'Km. recorrido por año': '',
			},
		],
		dropdownTypes: [],
		image2: bgO5,
		image: bgO55,
		sideTitle: 'Tranporte Publico',
		sideBody:
			'En esta pregunta se calcula la Huella de Carbono que produce el uso de los servicios de transporte publico tales como bus, tranvia, metro, etc.',
		sideBody2: '',
	},
	5: {
		id: 5,
		title: 'Avion',
		ComplexForm: false,
		ComplexFormState: true,
		description: '¿Cuánto viajas?',
		description2: '¿Cuánto usas el avión?',
		rowTitles: ['Km. recorrido por año'],
		placeHolder: {
			'Km. recorrido por año': '12000 Km',
		},
		rowStructureSimple: { slider: '4' },
		rowStructureComplex: [
			{
				'Km. recorrido por año': '',
			},
		],
		dropdownTypes: [],
		image2: bgO6,
		image: bgO66,
		sideTitle: 'Tranporte Aereo',
		sideBody:
			'En esta pregunta se calcula la Huella de Carbono que produce el uso de transporte aereo. La cantidad de km que realizas al año.',
		sideBody2:
			'Esta calculado usando la media del consumo medio del modelo de avion mas populares y el factor de emision de su combustible. Por lo que es calculo aproximado.',
	},
	6: {
		id: 6,
		title: 'Otro Consumo',
		ComplexForm: false,
		ComplexFormState: true,
		description: '',
		description2: '¿Cuánto compras?',
		rowTitles: [
			'Comida y Bebida',
			'Farmaceuticos',
			'Ropa y Textil',
			'Papel',
			'Tecnologia',
			'TV',
			'Vehiculos a Motor',
			'Mobiliario',
			'Hoteles, Pubs, etc.',
			'Coste de Telefono',
			'Hipoteca y Banco',
			'Seguro',
			'Otras actividades',
		],
		placeHolder: {
			'Comida y Bebida': '10€',
			Farmaceuticos: '10€',
			'Ropa y Textil': '10€',
			Papel: '10€',
			Tecnologia: '10€',
			TV: '10€',
			'Vehiculos a Motor': '10€',
			Mobiliario: '10€',
			'Hoteles, Pubs, etc.': '10€',
			'Coste de Telefono': '10€',
			'Hipoteca y Banco': '10€',
			Seguro: '10€',
			'Otras actividades': '10€',
		},
		optionsFood: ['--', 'Lot of Meat', 'Average Meat', 'Few Meat', 'Fish', 'Vegetarian', 'Vegan'],
		rowStructureSimple: { slider: '4' },
		rowStructureComplex: [
			{
				'Comida y Bebida': '',
				Farmaceuticos: '',
				'Ropa y Textil': '',
				Papel: '',
				Tecnologia: '',
				TV: '',
				'Vehiculos a Motor': '',
				Mobiliario: '',
				'Hoteles, Pubs, etc.': '',
				'Coste de Telefono': '',
				'Hipoteca y Banco': '',
				Seguro: '',
				'Otras actividades': '',
			},
		],
		dropdownTypes: [],
		image2: bgO7,
		image: '',
		sideTitle: 'Gastos',
		sideBody: 'En esta pregunta se calcula la Huella de Carbono que produce el consumo de bienes.',
		sideBody2: 'Debes introducir el consumo que realizas de las siguientes categorias de productos al mes.',
	},
};

export default IndividualCarbonData;
