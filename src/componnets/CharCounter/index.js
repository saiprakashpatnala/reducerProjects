import { useReducer } from "react";
import {v4 as uuidv4} from "uuid"

const reducer = (state, action) => {
  if (action.type === "enterWord") {
    return {
      ...state,
      word: action.payload,
    };
  }

  else if(action.type==="submitWord"){
    return {
        ...state,
        arr:action.payload
    }
  }
};

const CharCounter = () => {
  const [state, dispacth] = useReducer(reducer, { word: "", arr: [] });

  const submitHandler=(e)=>{
    e.preventDefault()

    let newWord={
       id:uuidv4(),
       word:state.word
    }
    let kk=[...state.arr,newWord]
    dispacth({
      type: "submitWord",
      payload: kk,
    });

    state.word=""
  }
  return (
    <div>
      <h1>Count Characters Like a Boss</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={state.word}
          onChange={(e) =>
            dispacth({ type: "enterWord", payload: e.target.value })
          }
        />
        <button type="submit">Add</button>
      </form>
      {state.arr.length>0?<ul>
        {state.arr.map(i=>
            <li key={i.id}>
                <p>{i.word}:{i.word.length}</p>
            </li>)}

      </ul>:""}
    </div>
  );
};

export default CharCounter;
