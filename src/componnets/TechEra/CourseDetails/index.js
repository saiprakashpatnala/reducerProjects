import {useEffect,useReducer} from "react";
import {useParams} from "react-router-dom"
 

const reducer=(state,action)=>{
    if(action.type==="getData"){
        return{
            ...state,
            obj:action.payload
        }
    }
    throw new Error("Something Went wrong!")
}


const CourseDetails=()=>{
   const { id } = useParams();
    const[state,dispatch]=useReducer(reducer,{obj:{}})
   
    useEffect(()=>{
        const getDetails=async()=>{
            const url = `https://apis.ccbp.in/te/courses/${id}`;
            try{
                let response=await fetch(url)
                let data=await response.json()
                let result=data.course_details
                dispatch({
                    type:"getData",
                    payload:result
                })

            }
            catch(e){
                console.log(e)
            }
        }
        getDetails()

    },[id])
    
    const{image_url,name,description}=state.obj
    console.log(state.obj)
    return(
        <div>
            <h1>CourseDetails</h1>
            {state.obj.length!==null?<div>
                <img src={image_url} alt={name}/>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>:<p>Loading....</p>}
        </div>
    )
}

export default CourseDetails