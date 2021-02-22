import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Rocket } from '../components/Rocket'
import { GET_ROCKETS } from '../graphql/get-rockets'

export function RocketsContainer() {
	const { data: { rockets = [] } = {} } = useQuery(GET_ROCKETS, {
		variables: { limit: 10 }
	})
	return (
		<div className="container">
			{ rockets && rockets.map( rocket => <Rocket key={rocket.id} rocket={rocket} />)}
		</div>
	)
}