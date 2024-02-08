import { createBrowserRouter } from "react-router-dom";
import Home from "../TechEra/Home";
import CourseDetails from "../TechEra/CourseDetails";


let router=createBrowserRouter([{
    path:"/",element:<Home/>
},
{path:'/courses/:id',element:<CourseDetails/>}])

export default router