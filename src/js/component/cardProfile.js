import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardProfile = ( { data, categoryName } ) =>{
	const { actions } = useContext(Context);

	return (
    <div style={{width: "18rem"}} className="flex-shrink-0 flex-grow-0 me-4 my-4">
		<div className="card" >
			<img src="https://education.eviq.org.au/App_Themes/eviQEdu/images/assets/placeholder_200x200.gif" className="card-img-top" alt="imagen" />
			<div className="card-body">
				<h5 className="card-title">{data.name}</h5>
				<div className="d-flex justify-content-between">
					<Link to={`/single/${categoryName}/${data.uid}`}  className="btn btn-outline-primary">Learn more!</Link>
					<button type="button" className="btn btn-outline-warning" onClick={()=> actions.addToFavorites(data)}>
						<i className={`${actions.isFavorite(data)?'fas':'far'} fa-heart`}>
						</i>
					</button>
				</div>
			</div>
		</div>
	</div>
	)
};