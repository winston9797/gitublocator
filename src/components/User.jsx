import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './user.css'

export default class User extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user : {},
             repos:[]
        }
    }

    async componentDidMount(){
        fetch(`https://api.github.com/users/${this.props.match.params.login}?client_id=4ab6bc18742e53060d2b&client_secret=d1028a433e20ff37482659bbf0e16ffd9c792301`).then(res =>{
            return res.json()
        }).then(user =>{
            this.setState({
                user:user
            })
        })
        fetch(`https://api.github.com/users/${this.props.match.params.login}/repos?client_id=4ab6bc18742e53060d2b&client_secret=d1028a433e20ff37482659bbf0e16ffd9c792301`).then(res =>{
            return res.json()
        }).then(repos =>{
            this.setState({
                repos
            })
        })
      }
    render() {
        const {login,bio,html_url,followers,public_repos,following,blog,location} = this.state.user
        return (
            <>
                <Link style={{margin:'20px 0'}} className='btn btn-primary btn-md btn-block' to="/">Back to search</Link>
                <div className="fb-profile">
                <img align="left" className="fb-image-lg" src="https://source.unsplash.com/850x250/?javascript" alt="Profile image example"/>
                <img align="left" className="fb-image-profile thumbnail" src={this.state.user.avatar_url} alt="Profile image example"/>
                <div className="fb-profile-text">
                    <h1>{login}</h1>
                    <p>{bio}</p>
                </div>
                </div>
                <div className="card no-card">
                    <div className="card-body">
                        <a target='_blank' href={html_url} className="btn btn-dark btn-lg">View On GitHub</a> 
                        <span className="btn btn-primary btn-lg">Follower {followers}</span>
                        <span className="btn btn-danger btn-lg">Following {following}</span>
                        <span className="btn btn-secondary btn-lg">Public Repository {public_repos}</span>
                        <span className="btn btn-info btn-lg">Location : {location}</span>
                    </div>
                </div>
                <div className="card no-card">
                    <div className="card-body">
                            {this.state.repos.map((repo,i) =>{
                                return (
                                    <div className='card' key={i}>
                                        <div className="card-body">
                                        <a target='_blank' href={repo.html_url}>{repo.name}</a>
                                        <p> :{repo.description}</p>
                                        </div>
                                    </div>

                                    )
                            })}
                    </div>
                </div>
            </>
        )
    }
}

