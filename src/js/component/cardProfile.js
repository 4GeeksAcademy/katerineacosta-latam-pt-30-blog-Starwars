import React from "react";
import { Link } from "react-router-dom";

export const CardProfile = ( { data, categoryName } ) =>{
	
	return (
    <div style={{width: "18rem"}} className="flex-shrink-0 flex-grow-0 me-4 my-4">
		<div className="card" >
			<img src="https://education.eviq.org.au/App_Themes/eviQEdu/images/assets/placeholder_200x200.gif" className="card-img-top" alt="imagen" />
			<div className="card-body">
				<h5 className="card-title">{data.name}</h5>
				<div className="d-flex justify-content-between">
					<Link to={`/single/${categoryName}/${data.uid}`}  class="btn btn-outline-primary">Learn more!</Link>
					<button type="button" class="btn btn-outline-warning"><i class="far fa-heart"></i></button>
				</div>
			</div>
		</div>
	</div>
	)
};