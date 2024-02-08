import {useReducer,useEffect} from "react"

const reducer=(state,action)=>{
   if(action.type==="getData"){
    return{
        ...state,
        arr:action.payload
    }
   }
}






const TravelGuide=()=>{
    const[state,dispatch]=useReducer(reducer,{arr:[]})
    let url = "https://apis.ccbp.in/tg/packages";

    useEffect(() => {
    let getPlaces=async()=>{
        try{
            let response=await fetch(url)
            let data=await response.json()
            let result=data.packages
            dispatch({
                type:"getData",
                payload:result
            })
        }
        catch(e){
            console.log(e)
        }
      
    }
      getPlaces();

    }, [url]);
    return(
        <div>
            <h1>Travel Guide</h1>
            {state.arr.length>0?<ul>
                {state.arr.map(i=>
                    <li key={i.id}>
                     <img src={i.image_url} alt={i.name}/>
                     <h1>{i.name}</h1>
                     <p>{i.description}</p>
                    </li>)}
            </ul>:<p>Loading.....</p>}
        </div>
    )
}

export default TravelGuide