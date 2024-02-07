import {useReducer} from "react"

const reducer=(state,action)=>{
    if(action.type==="setText"){
        return {
            ...state,
          text: action.payload,
        };
        
    }
    else if(action.type==="toggleHandler"){
        return{
            ...state,
        toggle:!state.toggle
    }
    }
    throw new Error("Error Occured")
}

const EditableText=()=>{
    const[state,dispatch]=useReducer(reducer,{text:"",toggle:true})
    return (
      <div>
        {state.toggle === true ? (
          <div>
            <input type="text" value={state.text} onChange={(e)=>dispatch({type:"setText",payload:e.target.value})} />
            <button onClick={() => dispatch({ type: "toggleHandler" })}>
              Save
            </button>
          </div>
        ) : (
          <div>
            <p>{state.text}</p>
            <button onClick={() => dispatch({ type: "toggleHandler" })}>
              Edit
            </button>
          </div>
        )}
      </div>
    );
}

export default EditableText