import gql from 'graphql-tag'

export const GET_ROCKETS = gql`
	query rockets($limit: Int!) {
		rockets(limit: $limit) {
			id
			cost_per_launch
			description
			diameter {
				feet
			}
			name
			engines {
				type
			}
		}
	}`