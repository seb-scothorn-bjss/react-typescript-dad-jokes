import { Vessel } from '../types/vessel';
import { VesselGroupStats } from '../types/vessel-group-stats';

export const getVesselGroupStats = (vessels: Vessel[]): VesselGroupStats => {
	const oldest = vessels.reduce((prev, next) =>
		prev.yearBuilt < next.yearBuilt ? prev : next,
	);

	const newest = vessels.reduce((prev, next) =>
		prev.yearBuilt > next.yearBuilt ? prev : next,
	);

	const highestScrabbleScore = vessels.reduce((prev, next) =>
		prev.scrabbleScore > next.scrabbleScore ? prev : next,
	);

	return {
		oldest,
		newest,
		highestScrabbleScore,
	};
};
