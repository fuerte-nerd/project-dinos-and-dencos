import React from "react"

import { Row } from "reactstrap"

import DogCard from "./DogCard"

export default function Dogs({ data }) {
	return (
		<div className="dogs py-4">
			<Row>
				{data.map(dog => {
					return <DogCard data={dog} />
				})}
			</Row>
		</div>
	)
}
