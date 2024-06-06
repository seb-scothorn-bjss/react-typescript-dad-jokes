export type Vessel = {
	name: string;
	yearBuilt: number;
	homePort: string;
	enginePower: number;
	length: number;
};

export type RawVesselOver10m = {
	'Administrative port': string;
	'Home port': string;
	'Port letters and numbers': string;
	'Vessel name': string;
	'Registry of Shipping and Seamen number': string;
	'Licence number': number;
	'Fish producer organisation*': string;
	'Overall length': number;
	'Registered tonnage': string | null;
	'Engine power': number | null;
	'Vessel capacity units': number;
	'Year built': number;
	Hull: string;
	'Country of construction': string;
	Category: string;
};

export type RawVesselUnder10m = {
	'Administrative port': string;
	'Home port': string;
	'Port letters and number': string;
	'Vessel name': string;
	'Registry of Shipping and Seamen number': string;
	'Licence number': number;
	'Fish producer organisation': string;
	'Overall length': number;
	'Registered tonnage': string | null;
	'Engine Power (kw)': number | null;
	'Vessel Capacity Units': number;
	'Year Built': number;
	'Hull Material': string;
	'Country of Build': string;
	'Licence Category': string;
};
