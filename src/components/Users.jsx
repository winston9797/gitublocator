import React, { Component } from 'react'
import UserItem from './UserItem'

export default class Users extends Component {
    render() {
        const style = {
            display : 'grid',
            gridTemplateColumns : 'repeat(3,1fr)',
            gridGap : '20px'
        }
        return (
            <div style={style}>
                {this.props.users.map(user=>{
                    return <UserItem key={user.id} className='col-sm' key={user.id} avatar_url={user.avatar_url} login={user.login} html_url={user.html_url} />
                })}
            </div>
        )
        
    }
}

