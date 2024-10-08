import { useState } from "react"
import Params from "./molecules/Params"
import { requestToPostInform } from "./molecules/mods/Reqs"
import AlumnItem from "./molecules/AlumnItem";

export default function AsistenterPage(){
    let [alumnsList, setAlumnsList]=useState([]);
    return(
        <>
            <Params setAlumnsList={setAlumnsList}/>
            <div className="alumn-list">
                <div className='list'>
                    {
                        
                        alumnsList.map(a=>{return(<AlumnItem almn={a}/>)})
                    }
                </div>
                <div className="submit-presence">
                    <button onClick={requestToPostInform}>Enviar informe</button>
                </div>
            </div>
        </>
    )
}