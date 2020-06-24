import bgO1 from '../../assets/bg_carbon_side_i_1.png';
import bgO11 from '../../assets/bg_carbon_i_1.png';
import bgO2 from '../../assets/bg_carbon_side_i_2.jpg';
import bgO22 from '../../assets/bg_carbon_i_2.png';
import bgO33 from '../../assets/bg_carbon_i_3.png';
import bgO3 from '../../assets/bg_carbon_side_i_3.jpg';
import bgO44 from '../../assets/bg_carbon_i_4.png';
import bgO4 from '../../assets/bg_carbon_side_i_4.png';
import bgO55 from '../../assets/bg_carbon_i_5.png';
import bgO5 from '../../assets/bg_carbon_side_i_5.png';
import bgO66 from '../../assets/bg_carbon_i_6.png';
import bgO6 from '../../assets/bg_carbon_side_i_6.png';
import bgO7 from '../../assets/bg_carbon_side_i_7.png';

export const IndividualCarbonQuizData = {
	0: {
		id: 0,
		title: 'Vivienda',
		type: 'individual',
		footprint: 'carbon',
		ComplexForm: true,
		ComplexFormState: false,
		persons: 'Cuanity of persons?',
		description: '¿Que tan verde eres?',
		description2: '¿Cuánta electricidad consumes?',
		rowTitles: [
			'Electricidad',
			'Gas Natural',
			'Gasoleo',
			'Carbono',
			'GLP',
			'Propano',
			'Pellets de Madera',
		],
		placeHolder: {
			Electricidad: '1000 kWh',
			'Gas Natural': '2000 kWh',
			Gasoleo: '1000 L',
			Carbono: '100 ton',
			GLP: '1000 L',
			Propano: '1000 L',
			'Pellets de Madera': '100 ton',
		},
		rowStructureSimple: { slider: '4' },
		simpleName: 'Electricidad',
		rowStructureComplex: [
			{
				Electricidad: '',
				'Gas Natural': '',
				Gasoleo: '',
				Carbono: '',
				GLP: '',
				Propano: '',
				'Pellets de Madera': '',
			},
		],
		dropdownTypes: [],
		image: bgO1,
		image2: bgO11,
		sideTitle: 'Hogar',
		sideBody:
			'En esta pregunta se calcula la Huella de Carbono que produce el consumo de electricidad en su hogar. Se refiere a la huella que te corresponde en tu hogar. Si viven 4 personas deberas dividir el total de consumo entre 4.',
		sideBody2:
			'La media esta calculada por persona por hogar en España. Y este calculo corresponderia al Alcance 1.',
	},
	1: {
		id: 1,
		title: 'Coche',
		ComplexForm: true,
		ComplexFormState: false,
		description: '¿Cuánto viajas?',
		description2: '¿Cuánto usas tu coche?',
		rowTitles: [
			'Km. recorrido por año',
			'Tipo de Combustible',
			'Eficiencia del vehículo',
		],
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
		image2: bgO22,
		sideTitle: 'Transporte',
		sideBody:
			'En esta pregunta se calcula la Huella de Carbono que produce el uso del coche.',
		sideBody2:
			'En el caso de que sea un coche electrico o hibrido deberas contabilizarlo como gasto electrico de la pregunta anterior.',
	},
	2: {
		id: 2,
		title: 'Moto',
		ComplexForm: true,
		ComplexFormState: false,
		description: '¿Eres motorista?',
		description2: '¿Con qué frecuencia viajas?',
		rowStructureSimple: { slider: '4', moto: '' },
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
		image2: bgO33,
		sideTitle: 'Moto',
		sideBody:
			'En esta pregunta se calcula la Huella de Carbono que produce el uso de una moto.',
		sideBody2: '',
	},
	3: {
		id: 3,
		title: 'RENFE',
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
		image2: bgO44,
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
		image: bgO5,
		image2: bgO55,
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
		image: bgO6,
		image2: bgO66,
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
		image: bgO7,
		image2: '',
		sideTitle: 'Gastos',
		sideBody:
			'En esta pregunta se calcula la Huella de Carbono que produce el consumo de bienes.',
		sideBody2:
			'Debes introducir el consumo que realizas de las siguientes categorias de productos al mes.',
	},
};
