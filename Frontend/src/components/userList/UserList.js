import User from "../../components/user/User"
function UserList(props) {
	return (
		<div>
			{props.myUser.map(function (x) {
				return (
					<User
						key={x.id}
						id={x.id}
						nom={x.nom}
						prenom={x.prenom}
						datenaiss={x.datenaiss}
						abonnement={x.abonnement}
						email={x.email}
						password={x.password}
						alerte={x.alerte}
						updateUser={props.updateUser}
					/>
				)
			})}
		</div>
	)
}

export default UserList
