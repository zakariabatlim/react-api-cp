import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
	const [listOfUsers, setListOfUsers] = useState([]);

	useEffect(() => {
		// Fetch user data from JSONPlaceholder API
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				// Save the data in the state
				setListOfUsers(response.data);
			})
			.catch((error) => {
				console.error("Error fetching user data:", error);
			});
	}, []);

	return (
		<div className="user-list">
			<h1>User List</h1>
			<ul>
				{listOfUsers.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
}

export default UserList;