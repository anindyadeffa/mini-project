import gql from "graphql-tag";

export const ADD_MESSAGE = gql`
	mutation insertContact(
		$name: String!
		$email: String!
		$message: String!
	)
    {
		insert_contact(
			objects: [
				{
					name: $name
					email: $email
					message: $message
				}
			]
		) {
			returning {
				id
				name
			}
		}
	}
`;