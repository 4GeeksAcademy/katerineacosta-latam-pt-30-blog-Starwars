import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(()=>{
		actions.getDetails(params.categoryName, params.uid);
	}, [])
	
	console.log(store.selected);
	return (
		<div className="jumbotron">
		 {//<h1 className="display-4">This will show the demo element: {params.categoryName} - {params.uid}</h1>
		 }
			
			<div className="row">
				<div className="col">
					<img src="https://www.uk-rehab.com/wp-content/uploads/2019/09/436x350.jpg" className="card-img-top" alt="imagen" />
				</div>
				<div className="col">
					<h1>{store.selected?.properties?.name}</h1>
					<p>{store.selected?.description}</p>
					</div>
				</div>
				<hr className="my-4 text-danger" />

				{ 
					params.categoryName == "vehicles" && 
					<div className="d-flex text-center text-danger">
						<div className="col">
							<h6>Name</h6>
							<p>{store.selected?.properties?.name}</p>
						</div>
						<div className="col">
							<h6>Cargo carpacity</h6>
							<p>{store.selected?.properties?.cargo_capacity}</p>
						</div>
						<div className="col">
							<h6>Consumables</h6>
							<p>{store.selected?.properties?.consumables}</p>
						</div>
						<div className="col">
							<h6>Cost in credits</h6>
							<p>{store.selected?.properties?.cost_in_credits}</p>
						</div>
						<div className="col">
							<h6>Crew</h6>
							<p>{store.selected?.properties?.crew}</p>
						</div>
						<div className="col">
							<h6>Manufacturer</h6>
							<p>{store.selected?.properties?.manufacturer}</p>
						</div>
					</div>
				}

				{ 
					params.categoryName == "planets" && 
					<div className="d-flex text-center text-danger">
						<div className="col">
							<h6>Name</h6>
							<p>{store.selected?.properties?.name}</p>
						</div>
						<div className="col">
							<h6>Climate</h6>
							<p>{store.selected?.properties?.climate}</p>
						</div>
						<div className="col">
							<h6>Population</h6>
							<p>{store.selected?.properties?.population}</p>
						</div>
						<div className="col">
							<h6>Orbital Period</h6>
							<p>{store.selected?.properties?.orbital_period}</p>
						</div>
						<div className="col">
							<h6>Rotation Period</h6>
							<p>{store.selected?.properties?.rotation_period}</p>
						</div>
						<div className="col">
							<h6>Diamter</h6>
							<p>{store.selected?.properties?.diameter}</p>
						</div>
					</div>
				}

				{ 
					params.categoryName == "people" && 
					<div className="d-flex text-center text-danger">
						<div className="col">
							<h6>Name</h6>
							<p>{store.selected?.properties?.name}</p>
						</div>
						<div className="col">
							<h6>Height</h6>
							<p>{store.selected?.properties?.height}</p>
						</div>
						<div className="col">
							<h6>hair_color</h6>
							<p>{store.selected?.properties?.hair_color}</p>
						</div>
						<div className="col">
							<h6>skin_color</h6>
							<p>{store.selected?.properties?.skin_color}</p>
						</div>
						<div className="col">
							<h6>birth_year</h6>
							<p>{store.selected?.properties?.birth_year}</p>
						</div>
						<div className="col">
							<h6>gender</h6>
							<p>{store.selected?.properties?.gender}</p>
						</div>
					</div>
				}

			<Link to="/">
				<span className="btn btn-primary btn-lg mt-3" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
