import React from 'react';
import CombatParticipantGroupModel from '../Model/CombatParticipantGroupModel';

function HpBar(props: any) {
	const percentage = getHpPercentage(props.participant)
	if (percentage >= 0) {
		return (
			<div className="row">
				<div className="col-12 HpBarContainer">
					<div className="HpBarMax">
						<Filler percentage={percentage} />
					</div>
				</div>
			</div>
		);
	};
	return <div />;
}

const Filler = (props: any) => {
	return <div className="HpBarCur" style={{width: `${props.percentage}%` }} />
}

function getHpPercentage(ObjectData: any): number {
	//groups of combatants are handled differently
	//HP bar shows how many creatures are left
	if (ObjectData instanceof CombatParticipantGroupModel) {
		var curHp
		var maxHp
		if (ObjectData.Group.length === 1) {
			curHp = ObjectData.Group[0].CurHP;
			maxHp = ObjectData.Group[0].MaxHP;
		}
		else {
			curHp = ObjectData.ActiveCombatants();
			maxHp = ObjectData.Group.length;
		}
		return Math.round((curHp/maxHp)*100);
	}

	//There's only one participant left
	else {
		return Math.round((ObjectData.CurHP/ObjectData.MaxHP)*100);
	}
}

export default HpBar;