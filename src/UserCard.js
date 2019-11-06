import React from "react"

const Avatar = (props) => {
	return (
		<img src="" alt="Profil of" />
	)
}

const UserCard = (props) => {
	return (
		<div className="card">
			<Avatar />
			<div>
				<p>Prénom: </p>
				<p>House: </p>
			</div>
		</div>
	)
}

export default UserCard