import {  useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "enterUser") {
    return {
      ...state,
      val: action.payload,
    };
  } else if (action.type === "getUser") {
    return {
      ...state,
      arr: action.payload,
    };
  }
};

let GitHubUser = () => {
  const [state, dispatch] = useReducer(reducer, { val: "", arr: {} });

  let getData = async (val) => {
    
  };

  const kk = async(e) => {
    if (e.key === "Enter") {
        try {
      let response = await fetch(`https://api.github.com/users/${e.target.value}`);
      let data = await response.json();
      dispatch({ type: "enterUser",payload:data });
    } catch (e) {
      console.log(e);
    } 
    }
      getData(e.target.value);
      dispatch({ type: "enterUser", payload: e.target.value });
  };

  let{name,avtar_url,blog}=state.arr
  return (
    <>
      <h1>Git user</h1>
      <input type="search" onKeyDown={kk} />
      {Object.length!==null? <div>
       <h1>{name}</h1>
       <img src={avtar_url} alt={name}/>
       <a href={blog} target="_blank">Blog</a>
      </div>:""}
     
    </>
  );
};

export default GitHubUser;
