import { Vessel } from '../../types/vessel';
import { VesselCardList } from '../VesselCardList/VesselCardList';
import './VesselCardLists.scss';

export type VesselCardListsProps = {
	vesselsOver10m: Vessel[];
	vesselsUnder10m: Vessel[];
};

export const VesselCardLists = (props: VesselCardListsProps) => {
	const { vesselsOver10m, vesselsUnder10m } = props;
	return (
		<div className="vessel-card-lists">
			<VesselCardList vessels={vesselsOver10m} />
			<VesselCardList vessels={vesselsUnder10m} />
		</div>
	);
};
