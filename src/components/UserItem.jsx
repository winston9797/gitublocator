import React from 'react'
import {Link} from 'react-router-dom'

export default function UserItem(props) {
    const {avatar_url,login} = props
    return (
    <div className="card">
      <div className="card-body">
        <img  alt=''  className='card-img rounded-circle' src={avatar_url}/>
        <h5 className="card-title">{login}</h5>
        <Link to={`user/${login}`} className="btn btn-dark">GITHUB PROFILE</Link>
      </div>
    </div>
    )
}
