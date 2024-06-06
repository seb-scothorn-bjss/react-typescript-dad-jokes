import { Vessel } from './vessel';

export type VesselGroupStats = {
	oldest: Vessel;
	newest: Vessel;
	highestScrabbleScore: Vessel;
};
