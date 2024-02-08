import { useEffect,useReducer } from "react";
const categoriesList = [
  { id: "ALL", displayText: "All" },
  { id: "STATIC", displayText: "Static" },
  { id: "RESPONSIVE", displayText: "Responsive" },
  { id: "DYNAMIC", displayText: "Dynamic" },
  { id: "REACT", displayText: "React" },
];


const reducer=(state,action)=>{
    if(action.type==="selectCategory"){
        return {
          ...state,
          val: action.payload,
        };
    }

    else if(action.type==="getData"){
        return{
            ...state,
            arr:action.payload
        }
    }
}


const ProjectShowCase=()=>{
    const [state,dispatch]=useReducer(reducer,{val:"ALL",arr:[]})

    

    useEffect(()=>{
        let getProjects=async()=>{
            try{
                let response = await fetch(
                  `https://apis.ccbp.in/ps/projects?category=${state.val}`
                );
                let data=await response.json()
                let result=data.projects
                dispatch({ type: "getData",payload:result });
            }
            catch(e){
                console.log(e)
            }
        }
        getProjects()
    },[state.val])


    const filterProjects=(e)=>{
       dispatch({ type: "selectCategory",payload:e.target.value });
    }
    return (
      <div>
        <h1>Project Showcase</h1>
        <select
          value={state.val}
          onChange={filterProjects}
        >
          {categoriesList.map((i) => (
            <option key={i.id} value={i.id}>
              {i.displayText}
            </option>
          ))}
        </select>
        <ul>
            {state.arr.map(i=>
                <li key={i.id}>
                <h1>{i.name}</h1>
                <img src={i.image_url} alt={i.name}/>
                </li>)}
        </ul>
      </div>
    );
}

export default ProjectShowCase