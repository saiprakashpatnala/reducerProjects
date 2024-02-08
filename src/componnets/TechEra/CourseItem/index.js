import {Link} from "react-router-dom"

const CourseItem=(props)=>{
    const{data}=props
    const{id,name,logo_url}=data
    return(
        <li>
            <Link to={`/courses/${id}`}>
                <h1>{name}</h1>
                <img src={logo_url} alt={name}/>
            </Link>

        </li>
    )
}

export default CourseItem