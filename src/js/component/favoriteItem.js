import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const FavoriteItem = ({ item })=>{
	const { actions } = useContext(Context);

    return (<>
        <li>
            <div className="d-flex justify-content-between">
                <span className="dropdown-item">{item.name}</span>
                <button className="btn btn-light" onClick={()=> actions.removeFromFavorites(item)} >
                    <i className="fas fa-trash d-flex align-items-center"></i>
                </button>
            </div>
        </li>
    </>)
};