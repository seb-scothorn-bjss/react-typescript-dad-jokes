import { Vessel } from '../../types/vessel';
import { VesselCard } from '../VesselCard/VesselCard';
import './VesselComparison.scss';

export type VesselComparisonProps = {
	title: string;
	vesselOver10m: Vessel;
	vesselUnder10m: Vessel;
	highlightedVessel?: 'vesselOver10m' | 'vesselUnder10m';
};

export const VesselComparison = (props: VesselComparisonProps) => {
	const { title, vesselOver10m, vesselUnder10m, highlightedVessel } = props;

	return (
		<div className="vessel-comparison">
			<h1>{title}</h1>
			<div className="vessel-comparison-cards">
				<VesselCard
					vessel={vesselOver10m}
					highlighted={highlightedVessel === 'vesselOver10m'}
				/>
				<VesselCard
					vessel={vesselUnder10m}
					highlighted={highlightedVessel === 'vesselUnder10m'}
				/>
			</div>
		</div>
	);
};
