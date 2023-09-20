import { json } from "react-router";
import { Link, useNavigate } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: ["test"],
			editID: 0
		},
		
		actions: {

			loadSomeData: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/oliver")
				.then((recieved) => recieved.json())
				.then((data) => {setStore({ "contacts": data }); console.log(data)})
			},

			editClicked: (id) => {
				console.log("Edit pressed")
				console.log(id)
				setStore({"editID": id})
				useNavigate("/edit");
			},

			deleteClicked: (id) => {
				if(confirm("Are you sure to want to delete this contact?")) {
					console.log("Delete pressed")
					console.log(id)
					fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
						method:"DELETE"
					}).then((recieved) => recieved.json())
					.then((data) => console.log(data))
				}
			},

			newContactClicked: (name, email, address, phone, current) => {
				console.log("New contact pressed")
				console.log(current)
				if(current) {
					fetch(`https://playground.4geeks.com/apis/fake/contact/${current.id}`, {
						method: "PUT",
						body: JSON.stringify(
							{
								"full_name": name,
								"email": email,
								"agenda_slug": "oliver",
								"address": address,
								"phone": phone
							}),
						headers: {
							"Content-Type": "application/json"
						}
						
					}).then((recieved) => recieved.json())
					.then((data) => console.log(data))
				} else {
					fetch("https://playground.4geeks.com/apis/fake/contact/", {
						method: "POST",
						body: JSON.stringify(
							{
								"full_name": name,
								"email": email,
								"agenda_slug": "oliver",
								"address": address,
								"phone": phone
							}),
						headers: {
							"Content-Type": "application/json"
						}
						
					}).then((recieved) => recieved.json())
					.then((data) => console.log(data))
				}


			}
		}
	};
};

export default getState;
