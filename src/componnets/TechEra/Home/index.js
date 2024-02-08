import { useReducer, useEffect } from "react";
import Header from "../Header";
import CourseItem from "../CourseItem";

const reducer = (state, action) => {
  if (action.type === "getData") {
    return {
      ...state,
      arr: action.payload,
    };
  }
};

const Home = () => {
  const [state, dispatch] = useReducer(reducer, { arr: [] });

  useEffect(() => {
    let getCourse = async () => {
      try {
        let response = await fetch("https://apis.ccbp.in/te/courses");
        let data = await response.json();
        let result = data.courses;

        dispatch({
          type: "getData",
          payload: result,
        });
      } catch (e) {
        console.log(e);
      }
    };
    getCourse();
  }, []);
  return (
    <div>
      <Header />
      {state.arr.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {state.arr.map((i) => (
            <CourseItem key={i.id} data={i} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
