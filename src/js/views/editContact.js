import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <div className="d-flex justify-content-between mb-3">
                <h3>Edit Contact</h3>
                <Link to="/" className="btn btn-danger">Return</Link>
            </div>
        
            <div className="container">
                <div className="row m-2">
                    <label className="col-2">Full Name:
                    </label>
                    <input id="nameInput" className="col-10"></input>
                </div>

                <div className="row m-2">
                    <label className="col-2">Email:
                    </label>
                    <input id="emailInput" className="col-10"></input>
                </div>

                <div className="row m-2">
                    <label className="col-2">Address:
                    </label>
                    <input id="addressInput" className="col-10"></input>
                </div>

                <div className="row m-2">
                    <label className="col-2">Phone:
                    </label>
                    <input id="phoneInput" className="col-10"></input>
                </div>


                
                
            </div>
            <button className="btn btn-success mt-3" onClick={() => actions.newContactClicked(
                document.getElementById("nameInput").value,
                document.getElementById("emailInput").value,
                document.getElementById("addressInput").value,
                document.getElementById("phoneInput").value
                )}>Submit</button>
        </div>
    )
}