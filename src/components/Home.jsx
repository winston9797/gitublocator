import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users : [],
             loading : true
        }
      }
      
      async componentDidMount(){
        fetch('https://api.github.com/users?client_id=4ab6bc18742e53060d2b&client_secret=d1028a433e20ff37482659bbf0e16ffd9c792301').then(res =>{
          this.setState({
            loading:true
          })
          return res.json()
        }).then(users =>{
          this.setState({
            loading:false,
            users : users,
            showAlert : false
          })
        })
      }
      searchUser = text =>{
          if(text === ''){
            return
          }else{
            fetch(`https://api.github.com/search/users?q=${text}&?client_id=${'4ab6bc18742e53060d2b'}&client_secret=${'d1028a433e20ff37482659bbf0e16ffd9c792301'}`).then(res=>{
              this.setState({
                loading:true
              })
                return res.json()
            }).then(users =>{
                this.setState({
                    users : users.items,
                    loading:false
                })
            })
          }
       
      }
      showAlert = alert =>{
        this.setState({
          showAlert : true
        })
        setTimeout(() => {
          this.setState({
            showAlert : false
          })
        }, 3000);
      }
    
    const el = !this.state.loading ? <Users loading={this.state.loading} users={this.state.users} /> : <img src={spinner} />
    const alert = this.state.showAlert ? <Alert type='danger' msg='Please enter something' /> : ''
    const alertGreen = this.state.loading ? <Alert type='success' msg='Fetching github users from database' /> : ''
    return (
        <div>
             <Navbar  title="GitHub Finder" />
            <div className='container'>
            <br />
            {alert}       
            {alertGreen}       
            <Search showAlert={this.showAlert}  searchUser={this.searchUser} />
            <div className='container'>        
            {el}
            </div>
            </div>
        </div>
    )
}
