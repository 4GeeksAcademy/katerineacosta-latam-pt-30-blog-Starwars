import React, { useContext, useEffect } from "react";
import { CardProfile } from "./cardProfile";
import { Context } from "../store/appContext";

export const Category = ( { categoryName } ) =>{ 
	const { store, actions } = useContext(Context);
    useEffect(()=>{
        actions.getData(categoryName);
    }, []);

    return (<>
    <div style={{width:'100%'}} className="my-5">
        <h2 class="text-capitalize">{categoryName}</h2>
        <div className="d-flex " style={{overflowX:'auto'}}>
            {store[categoryName].map( elem => <CardProfile data={elem} categoryName={categoryName} />)}
        </div>
    </div>
    </>)};