import vesselsOver10m from '../data/Vessels_over_10m.json';
import vesselsUnder10m from '../data/Vessels_under_10m.json';
import { RawVesselOver10m, RawVesselUnder10m, Vessel } from '../types/vessel';

const parseRawVesselOver10m = (vessel: RawVesselOver10m): Vessel | null => {
	const name = vessel['Vessel name'];
	const yearBuilt = vessel['Year built'];
	const homePort = vessel['Home port'];
	const enginePower = vessel['Engine power'];
	const length = vessel['Overall length'];

	if (!name || !yearBuilt || !homePort || !enginePower || !length)
		return null;

	return {
		name,
		yearBuilt,
		homePort,
		enginePower,
		length,
	};
};

const parseRawVesselUnder10m = (vessel: RawVesselUnder10m): Vessel | null => {
	const name = vessel['Vessel name'] ?? undefined;
	const yearBuilt = vessel['Year Built'];
	const homePort = vessel['Home port'];
	const enginePower = vessel['Engine Power (kw)'];
	const length = vessel['Overall length'];

	if (!name || !yearBuilt || !homePort || !enginePower || !length)
		return null;

	return {
		name,
		yearBuilt,
		homePort,
		enginePower,
		length,
	};
};

export const getVesselsOver10m = (): Vessel[] => {
	const parsedVesselsOver10m = vesselsOver10m
		.map((vessel) => {
			return parseRawVesselOver10m(vessel as RawVesselOver10m);
		})
		.filter((vessel) => vessel != null);
	return parsedVesselsOver10m as Vessel[];
};

export const getVesselsUnder10m = (): Vessel[] => {
	const parsedVesselsUnder10m = vesselsUnder10m
		.map((vessel) => {
			return parseRawVesselUnder10m(vessel as RawVesselUnder10m);
		})
		.filter((vessel) => vessel != null);
	return parsedVesselsUnder10m as Vessel[];
};
