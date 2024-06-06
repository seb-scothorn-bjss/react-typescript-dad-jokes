import { useMemo } from 'react';
import { Vessel } from '../../types/vessel';
import { getVesselGroupStats } from '../../utils/vessel-group-stats';
import { VesselComparison } from '../VesselComparison/VesselComparison';
import './VesselComparisons.scss';

export type VesselComparisonsProps = {
	vesselsOver10m: Vessel[];
	vesselsUnder10m: Vessel[];
};

export const VesselComparisons = (props: VesselComparisonsProps) => {
	const { vesselsOver10m, vesselsUnder10m } = props;

	const statsVesselsOver10m = useMemo(
		() => getVesselGroupStats(vesselsOver10m),
		[vesselsOver10m],
	);
	const statsVesselsUnder10m = useMemo(
		() => getVesselGroupStats(vesselsUnder10m),
		[vesselsUnder10m],
	);

	return (
		<div className="vessel-comparisons">
			<VesselComparison
				title="Oldest Vessel"
				vesselOver10m={statsVesselsOver10m.oldest}
				vesselUnder10m={statsVesselsUnder10m.oldest}
				highlightedVessel={
					statsVesselsOver10m.oldest < statsVesselsUnder10m.oldest
						? 'vesselOver10m'
						: 'vesselUnder10m'
				}
			/>
			<VesselComparison
				title="Newest Vessel"
				vesselOver10m={statsVesselsOver10m.newest}
				vesselUnder10m={statsVesselsUnder10m.newest}
				highlightedVessel={
					statsVesselsOver10m.newest > statsVesselsUnder10m.newest
						? 'vesselOver10m'
						: 'vesselUnder10m'
				}
			/>
		</div>
	);
};
