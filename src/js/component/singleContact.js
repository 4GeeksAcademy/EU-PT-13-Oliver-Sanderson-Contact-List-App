import React, { useContext } from "react";

import { Context } from "../store/appContext";

export const SingleContact = (props) => {
    const { store, actions } = useContext(Context);


    return <div>
                <div className="border border-secondary m-3 p-3" id={props.id}>
                    <div className="d-flex justify-content-between "  >
                        <p><b>Name:</b> {props.name}</p> 
                        <div>
                            <button className="btn btn-primary" onClick={ () => {actions.editClicked(props.id)} } >Edit</button>
                            <button className="btn btn-danger" onClick={ () => {actions.deleteClicked(props.id)} } >Delete</button>
                            {props.id} (remove later)
                        </div>
                    </div>
                    <p><b>Address:</b> {props.address}</p>
                    <p><b>Phone:</b> {props.phone}</p>
                    <p><b>Email:</b> {props.email}</p>
                </div>
            </div>
}


