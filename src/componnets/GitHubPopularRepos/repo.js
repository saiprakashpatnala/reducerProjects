

const Repo=(props)=>{
    const{data}=props
    const{avatar_url,forks_count,issues_count,name,stars_count}=data
    return (
      <li>
        <img src={avatar_url} alt={name} />
        <h1>{name}</h1>
        <p>😅:{forks_count}</p>
        <p>🥶:{issues_count}</p>
        <p>⭐:{stars_count}</p>
      </li>
    );

}

export default Repo