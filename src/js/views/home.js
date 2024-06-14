import React, {useContext} from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { Category } from "../component/category";

export const Home = () =>{
	const { store } = useContext(Context);
	

	return(
	<>
		{store.categories.map(x=> <Category key={x.categoryName} categoryName={x.categoryName} />)}		
	</>
)};
