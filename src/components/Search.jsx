import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             text : ''
        }
    }
    handleChange = e => this.setState({ [e.target.name] : e.target.value })
    handleSubmit = e =>{
        if(this.state.text === ''){
            this.props.showAlert()
        }else{
            this.props.searchUser(this.state.text)
            this.setState({text:''})
        }
        e.preventDefault()
        
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}  style={{marginTop:'20px'}}>
                        <div className='form-group'>
                        <input name='text' value={this.state.text}  onChange={this.handleChange} className='form-control' type="text" placeholder='Search Users ...' />
                        <br/>
                        <button className='btn btn-block btn-primary'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
