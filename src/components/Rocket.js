import React from 'react'

export function Rocket({ rocket }) {
	return(
		<div className="card">
			<div className="card-title">{rocket.name}</div>
			<p className="card-description">{rocket.description}</p>
			<div class="card-spec">Size (ft): {rocket.diameter.feet}</div>
			<div class="card-spec">Cost Per Launch: {rocket.cost_per_launch}</div>
			<div class="card-spec">Engine Type: {rocket.engines.type}</div>
		</div>
	)
}
