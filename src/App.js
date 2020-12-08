import React from "react"
import UserCard from "./UserCard"
// import user from "./data/user"
import users from "./data/users"

const App = () => {
	const cities = ["Tokyo", "Salvadore", "Marseille", "Berlin", "Nairobi"]
	// while, forEach, for, for of, map
	return (
		<>
			<h1>Exercices React</h1>
			{/* <UserCard
				firstname={user.name}
				lastname={user.house}
				image={user.img}
			/> */}
			{users.map(user => (
				<UserCard
					key={user.id}
					firstname={user.name}
					lastname={user.house}
					image={user.img}
				/>
			))}
			<ul>
				{cities.map((city, index) => {
					return <li key={index}>{city}</li>
				})}
			</ul>
		</>
	)
}

export default App
