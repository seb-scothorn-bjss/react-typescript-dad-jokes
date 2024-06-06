import { Vessel } from '../../types/vessel';
import { VesselCard } from '../VesselCard/VesselCard';
import './VesselCardList.scss';

export type VesselCardListProps = {
	vessels: Vessel[];
};

export const VesselCardList = (props: VesselCardListProps) => {
	const { vessels } = props;
	return (
		<div className="vessel-card-list">
			{vessels.map((vessel) => {
				return <VesselCard vessel={vessel}></VesselCard>;
			})}
		</div>
	);
};
