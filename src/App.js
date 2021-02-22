import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { RocketsContainer } from './containers/RocketsContainer'

export function App() {
	const client = new ApolloClient({
		uri: 'https://api.spacex.land/graphql/'
	})

	return (
		<ApolloProvider client={client}>
			<main>
				<RocketsContainer />
			</main>
		</ApolloProvider>
	)
}

