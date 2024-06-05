import vesselsOver10m from '../data/Vessels_over_10m.json';
import vesselsUnder10m from '../data/Vessels_under_10m.json';
import { RawVesselOver10m, RawVesselUnder10m, Vessel } from '../types/vessel';

const parseRawVesselOver10m = (vessel: RawVesselOver10m): Vessel => {
	const name = vessel['Vessel name'] ?? undefined;
	return {
		name,
	};
};

const parseRawVesselUnder10m = (vessel: RawVesselUnder10m): Vessel => {
	const name = vessel['Vessel name'] ?? undefined;
	return {
		name,
	};
};

export const getVesselsOver10m = () => {
	const parsedVesselsOver10m = vesselsOver10m.map((vessel) => {
		return parseRawVesselOver10m(vessel as RawVesselOver10m);
	});
	return parsedVesselsOver10m;
};

export const getVesselsUnder10m = () => {
	const parsedVesselsUnder10m = vesselsUnder10m.map((vessel) => {
		return parseRawVesselUnder10m(vessel as RawVesselUnder10m);
	});
	return parsedVesselsUnder10m;
};
