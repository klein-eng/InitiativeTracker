import React from 'react';

function ContentRow(props: any) {
	return (
		<div className="row">
			{props.AC &&	
				<div className="col-5">AC: {props.AC}</div>
			}
			{props.MaxHP && (props.CurHP != null) &&
				<div className="col-7">HP: {props.CurHP}/{props.MaxHP}</div>
			}
		</div>
	);
}


export default ContentRow;