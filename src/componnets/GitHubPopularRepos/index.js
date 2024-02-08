import { useEffect, useReducer } from "react";
import Repo from "./repo";

const languageFiltersData = [
  { id: "ALL", language: "All" },
  { id: "JAVASCRIPT", language: "Javascript" },
  { id: "RUBY", language: "Ruby" },
  { id: "JAVA", language: "Java" },
  { id: "CSS", language: "CSS" },
];

const reducer = (state, action) => {
  if (action.type === "selectRepo") {
    return {
      ...state,
      val: action.payload,
    };
  } else if (action.type === "getData") {
    return {
      ...state,
      arr: action.payload,
    };
  }

  throw new Error("Something went Wrong!");
};

const GithubRepos = () => {
  const [state, dispatch] = useReducer(reducer, { val: "ALL", arr: [] });

  useEffect(() => {
    let mm = async () => {
      try {
        let response = await fetch(
          `https://apis.ccbp.in/popular-repos?language=${state.val}`
        );
        let data = await response.json();
        let result = data.popular_repos;
        dispatch({ type: "getData", payload: result });
      } catch (e) {
        console.log(e);
      }
    };
    mm();
  }, [state.val]);

  const filterRepo=(jj)=>{
    
    dispatch({ type: "selectRepo",payload:jj });

  }
  return (
    <>
      <h1>Git hub popular repos</h1>
      <ul>
        {languageFiltersData.map((i) => (
          <li key={i.id}>
            <button type="button" onClick={()=>filterRepo(i.id)}>{i.language}</button>
          </li>
        ))}
      </ul>
      <ul>
        {state.arr.map(i=>
            <Repo data={i} key={i.id}/>)}
      </ul>
    </>
  );
};

export default GithubRepos;
