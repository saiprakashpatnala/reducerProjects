const SongName=(props)=>{
    const { data, deleteSong } = props;
    const{id,imageUrl,name,duration,genre}=data
    const ok=()=>{
        deleteSong(id)
    }
    return(
        <li>
     <img src={imageUrl} alt={name}/>
     <h1>{name}</h1>
     <p>{genre}</p>
     <span>{duration}</span>
     <button type="button" onClick={ok}>Delete</button>
        </li>
    )
}

export default SongName