import { Vessel } from '../../types/vessel';
import { concatClassNames } from '../../utils/concat-class-names';
import './VesselCard.scss';

export type VesselCardProps = {
	vessel: Vessel;
	highlighted?: boolean;
};

export const VesselCard = (props: VesselCardProps) => {
	const { name, yearBuilt, homePort, enginePower, length } = props.vessel;
	return (
		<div
			className={concatClassNames([
				'vessel-card',
				props.highlighted ? 'highlighted' : undefined,
			])}
		>
			<div className="vessel-card-name">{name}</div>

			<div className="vessel-card-stats">
				<div className="vessel-card-stat">Year Built</div>
				<div className="vessel-card-stat">{yearBuilt}</div>

				<div className="vessel-card-stat">Home Port</div>
				<div className="vessel-card-stat">{homePort}</div>

				<div className="vessel-card-stat">Engine Power</div>
				<div className="vessel-card-stat">{enginePower}</div>

				<div className="vessel-card-stat">Length</div>
				<div className="vessel-card-stat">{length}</div>
			</div>
		</div>
	);
};
