import React, { useReducer } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fakeData } from '../data/fakeData';

const ResultWrapper = styled.div`
	color: black;
	font-size: 2em;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const Button = styled.button`
	background: transparent;
	color: red;
	position: absolute;
	top: 0;
	left: 0;
	padding: 5px;
	font-size: 20px;
	&:hover {
		cursor: pointer;
	}
`;

const Data = {
	0: {
		Gasolina: '2.180',
		'Gasoleo A o B': '2.520',
		E5: '2.180',
		E10: '2.065',
		E85: '0.344',
		B7: '2.467',
		B10: '2.387',
		B20: '2.122',
		B30: '1.857',
		B100: '0.000',
		XTL: '0.000',
		LNG: '0.203',
		CNG: '0.203',
		LPG: '1.671',
		H2: '0.000',
	},
	1: {
		'Gas Natural': '0.203',
		'Gasoleo C': '2.868',
		'Gas Butano': '2.964',
		'Gas Propano': '2.938 ',
		Fueloleo: '3.127 ',
		LPG: '1.671 ',
		'Carbon Nacional': '2.227 ',
		'Carbon de importacion': '2.444',
		'Coque de petroleo': '3.169',
	},
	2: {
		'HFC-23': '2.1',
		'HFC-32': '2.1',
		'HFC-41': '2.1',
		'HFC-125': '2.1',
		'HFC-134': '2.1',
		'HFC-134a': '2.1',
		'HFC-143': '2.1',
		'HFC-143a': '2.1',
		'HFC-152': '2.1',
		'HFC-152a': '2.1',
		'HFC-161': '2.1',
		'HFC-227ea': '2.1',
		'HFC-236cb': '2.1',
		'HFC-236ea': '2.1',
		'HFC-236fa': '2.1',
		'HFC-245ca': '2.1',
		'HFC-245fa': '2.1',
		'HFC-365mfc': '2.1',
		'HFC-43-10mee': '2.1',
	},
	3: {
		'A-DOS ENERGíA, S.L.': '2.1',
		'ACCIONA GREEN ENERGY DEVELOPMENTS, S.L.': '2.1',
		'ACCIÓN ENERGÍA COMERCIALIZADORA, S.L.': '2.1',
		'ACSOL ENERGÍA GLOBAL, S.A.': '2.1',
		'ADEINNOVA ENERGÍA, S.L.U.': '2.1',
		'AGENTE DEL MERCADO ELÉCTRICO, S.A.': '2.1',
		'AGRI-ENERGÍA, S.A.': '2.1',
		'ALCANZIA ENERGÍA, S.L.': '2.1',
		'ALDRO ENERGÍA Y SOLUCIONES, S.L.U.': '2.1',
		'ALPIQ ENERGÍA ESPAÑA, S.A.U.': '2.1',
		'ANOTHER ENERGY OPTION, S.L.': '2.1',
		'APELES ELECTRICIDAD, S.L.': '2.1',
		'AQUÍ ENERGÍA, S.L.': '2.1',
		'ASAL DE ENERGÍA, S.L.': '2.1',
		'AUDAX ENERGÍA, S.L.U.': '2.1',
		'AURA ENERGÍA, S.L.': '2.1',
		'AUSARTA PRIMA, S.L.': '2.1',
		'AVANZALIA ENERGÍA COMERCIALIZADORA, S.A.': '2.1',
		'AXPO IBERIA, S.L.': '2.1',
		'BASSOLS ENERGÍA COMERCIAL, S.L.': '2.1',
		'CEPSA GAS Y ELECTRICIDAD, S.A.': '2.1',
		'CLIDOM ENERGY, S.L.': '2.1',
		'COMERCIALIZADORA ELÉCTRICA DE CÁDIZ, S.A.': '2.1',
		'COMERCIALIZADORA ELÉCTRICA TALAYUELAS, S.L.': '2.1',
		'COMERCIALIZADORA LERSA , S.L.': '2.1',
		'COMPAÑÍA ESCANDINAVA DE ELECTRICIDAD EN ESPAÑA, S.L.': '2.1',
		'COOPERATIVA ELÉCTRICA DE CASTELLAR, S.C.V.': '2.1',
		'COOPERATIVA ELÉCTRICA BENÉFICA CATRALENSE, COOP. V.': '2.1',
		'COOPERATIVA ELÉCTRICA BENÉFICA SAN FRANCISCO DE ASÍS, COOP. V.': '2.1',
		'COOPERATIVA ELÉCTRICA-BENÉFICA ALBATERENSE, COOP.V.': '2.1',
		'COOPERATIVA VALENCIANA ELECTRODISTRIBUIDORA DE FUERZA Y ALUM': '2.1',
		'SERRALLO, S.Coop.V.': '2.1',
		'COX ENERGÍA COMERCIALIZADORA ESPAÑA, S.L.U.': '2.1',
		'CYE ENERGÍA, S.L.': '2.1',
		'DAIMUZ ENERGÍA, S.L.': '2.1',
		'DISA ENERGÍA ELÉCTRICA, S.L.U.': '2.1',
		'DREUE ELECTRIC, S.L.': '2.1',
		'DRK ENERGY, S.L.': '2.1',
		'ECOFUTURA LUZ ENERGÍA, S.L.': '2.1',
		'EDP COMERCIALIZADORA, S.A.U.': '2.1',
		'EDP ENERGÍA S.A.U.': '2.1',
		'ELECNOVA SIGLO XXI, S.L.': '2.1',
		'ELECTRA CALDENSE ENERGIA, S.A.': '2.1',
		'ELECTRA DEL CARDENER ENERGIA, S.A.': '2.1',
		'ELÉCTRICA ALBATERENSE, S.L.': '2.1',
		'ELÉCTRICA CATRALENSE, S.L.': '2.1',
		'ELÉCTRICA DE CHERA, S.C.V.': '2.1',
		'ELÉCTRICA DE GUADASSUAR COOP. V.': '2.1',
		'ELÉCTRICA DE GUIXES ENERG¿A, S.L.': '2.1',
		'ELÉCTRICA DIRECTA ENERGÍA, S.L.': '2.1',
		'ELÉCTRICA SOLLERENSE, S.A.': '2.1',
		'ELÉCTRICA DE MELIANA, S.C.V.': '2.1',
		'ELÉCTRICA DE SOT DE CHERA S. COOP.V.': '2.1',
		'ELÉCTRICA DE VINALESA, S.L.U.': '2.1',
		'EMASP, S. COOP.': '2.1',
		'EMPRESA DE ALUMBRADO ELÉCTRICO DE CEUTA, S.A.': '2.1',
		'ENARA GESTIÓN Y MEDIACIÓN, S.L.': '2.1',
		'ENDESA ENERGÍA, S.A.': '2.1',
		'ENERCOLUZ ENERGÍA, S.L.': '2.1',
		'ENERGEA SAVING ENERGY, S.L.': '2.1',
		'ENERGY STROM XXI, S.L.': '2.1',
		'ENERGÍA COLECTIVA, S.L.': '2.1',
		'ENERGÍA DLR COMERCIALIZADORA, S.L.': '2.1',
		'ENERPLUS ENERGÍA, S.A.': '2.1',
		'ENGIE ESPAÑA, S.L.U.': '2.1',
		'ENÉRGYA VM GESTIÓN DE ENERGÍA, S.L.U.': '2.1',
		'ESTABANELL Y PAHISA MERCATOR, S.A.': '2.1',
		'ESTRATEGIAS ELÉCTRICAS INTEGRALES, S.A.': '2.1',
		'FACTOR ENERGÍA, S.A.': '2.1',
		'FENIE ENERGIA, S.A.': '2.1',
		'FOENER COMERCIALIZACIÓN, S.L.U.': '2.1',
		'GALP ENERGÍA ESPAÑA S.A.U.': '2.1',
		'GAOLANIA SERVICIOS, S.L.': '2.1',
		'GAS NATURAL COMERCIALIZADORA, S.A.': '2.1',
		'GAS NATURAL FENOSA RENOVABLES, S.L.U.': '2.1',
		'GAS NATURAL SERVICIOS SDG, S.A.': '2.1',
		'GEO ALTERNATIVA, S.L.': '2.1',
		'GEOATLANTER, S.L.': '2.1',
		'GESTERNOVA, S.A.': '2.1',
		'GIGABUSINESS, S.L.': '2.1',
		'GNERA ENERGÍA Y TECNOLOGÍA, S.L.': '2.1',
		'GOIENER S.COOP': '2.1',
		'HIDROELÉCTRICA DEL VALIRA, S.L.': '2.1',
		'HIDROELÉCTRICA EL CARMEN ENERGÍA, S.L.': '2.1',
		'IBERDROLA CLIENTES, S.A.U.': '2.1',
		'IM3 ENERGÍA, S.L.': '2.1',
		'INDEXO ENERGÍA, S.L.': '2.1',
		'INICIATIVA E. NOVA, S.L.': '2.1',
		'INTEGRACIÓN EUROPEA DE ENERGÍA SUR, S.L.': '2.1',
		'INTEGRACIÓN EUROPEA DE ENERGÍA, S.A.U.': '2.1',
		'KILOWATIOS VERDES, S.L.': '2.1',
		'LA UNIÓN ELECTRO INDUSTRIAL, S.L.U.': '2.1',
		'LONJAS TECNOLOGIA, S.A.': '2.1',
		'LUBALOO, S.L.': '2.1',
		'NABALIA ENERGIA 2000, S.A.': '2.1',
		'NEXUS ENERGIA, S.A.': '2.1',
		'NINOBE SERVICIOS ENERGÉTICOS, S.L.': '2.1',
		'NOBE SOLUCIONES Y ENERGÍA': '2.1',
		'NOSA ENERXIA SOCIEDADE COOP GALEGA': '2.1',
		'NUEVA COMERCIALIZADORA ESPAÑOLA, S.L.': '2.1',
		'ODF ENERGÍA LIBRE COMERCIALIZADORA, S.L.': '2.1',
		'ON DEMAND FACILITIES, S.L.U.': '2.1',
		PEPEENERGY: '2.1',
		'PETRO NAVARRA, S.L.': '2.1',
		'PETRONIEVES ENERGÍA 1, S.L.': '2.1',
		'PHOTON GESTIÓN': '2.1',
		'PROT ENERGÍA COMERCIALIZACIÓN, S.L.': '2.1',
		'PULSAR SERVICIOS ENERGÉTICOS, S.L.': '2.1',
		'RENEWABLE VENTURES, S.L.': '2.1',
		'SAMPOL INGENIERÍA Y OBRAS, S.A.': '2.1',
		'SOM ENERGÍA, S.C.C.L.': '2.1',
		'SUMINISTRADORA ELÉCTRICA VIENTOS ALISIOS DE LANZAROTE, S.L.': '2.1',
		'SUMINISTROS ESPECIALES ALGINETENSES COOP. V.': '2.1',
		'SWAP ENERGÍA, S.A.': '2.1',
		'SYDER COMERCIALIZADORA VERDE, S.L.': '2.1',
		'TELEFÓNICA SOLUCIONES DE INFORMÁTICA Y COMUNICACIONES DE ESPAÑA, S.A.U.':
			'2.1',
		'THE YELLOW ENERGY, S.L.': '2.1',
		'TRADE UNIVERSAL ENERGY, S.A.': '2.1',
		'UNIELÉCTRICA ENERGÍA, S.A.': '2.1',
		'V3J INGENIERIA Y SERVICIOS, S.L.': '2.1',
		'VIESGO ENERGÍA, S.L.': '2.1',
		'WATIUM, S.L.': '2.1',
		'WIND TO MARKET, S.A.': '2.1',
	},
};

export function Result({ stateScreen }) {
	let result = 0;

	console.log(stateScreen);
	if (stateScreen.formState) {
		Object.keys(stateScreen.formState).map((key) => {
			Object.keys(stateScreen.formState[key].rowStructure).map((i) => {
				let energy = stateScreen.formState[key].rowStructure[i].energyType;
				let quantity = stateScreen.formState[key].rowStructure[i].quantity;
				result = result + Number(quantity) * Number(Data[key][energy]);
			});
		});
	}

	console.log(result);

	return (
		<ResultWrapper>
			<Link to='/'>
				<Button>Home</Button>
			</Link>
			<div>Results: {result} t CO2</div>
		</ResultWrapper>
	);
}

// const initialState = {
// 	firstName: '',
// 	lastName: '',
// };

// function reducer(state, action) {
// 	switch (action.type) {
// 		case 'firstName':
// 			return { firstName: action.payload };
// 		case 'lastName':
// 			return { lastName: action.payload };
// 		default:
// 			throw new Error();
// 	}
// }

// function manageState({ stateScreen }) {
// 	const [state, dispatch] = useReducer(reducer, initialState);
// 	const handleInput = (e, name) => {
// 		dispatch({
// 			type: name,
// 			payload: e.target.value,
// 		});
// 	};

// 	return (
// 		<ResultWrapper>
// 			<input
// 				type='text'
// 				name='firstName'
// 				placeholder='First Name'
// 				onChange={(e) => handleInput(e, 'firstName')}
// 				value={state.firstName}
// 			/>
// 			<input
// 				type='text'
// 				name='lastName'
// 				placeholder='Last Name'
// 				onChange={(e) => handleInput(e, 'lastName')}
// 				value={state.lastName}
// 			/>
// 		</ResultWrapper>
// 	);
// }
