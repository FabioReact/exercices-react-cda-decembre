const Avatar = (props) => {
	return (
		<img src={props.src} alt={`Profil of ${props.alt}`} />
	)
}

const UserCard = (props) => {
	const { firstname, lastname, image } = props
	/* Equivalent à:
	const firstname = props.firstname
	const lastname = props.lastname
	const image = props.image
	*/
	return (
		<div className="card">
			<Avatar src={image} alt={`${firstname} ${lastname}`} />
			<div>
				<p>Prénom: {firstname}</p>
				<p>House: {lastname}</p>
			</div>
		</div>
	)
}

export default UserCard