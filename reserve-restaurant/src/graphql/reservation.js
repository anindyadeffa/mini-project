import gql from "graphql-tag";

export const ADD_RESERVATION = gql`
	mutation insertReservation(
		$name: String!
		$email: String!
		$package: String!
		$date: date!
		$time: time!
	)
    {
		insert_user(
			objects: [
				{
					name: $name
					email: $email
					package: $package
					date: $date
					time: $time
				}
			]
		)
		{
			returning {
				id
				name
			}
		}
	}
`;