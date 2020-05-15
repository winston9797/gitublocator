import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Users from './components/Users'
import Search from './components/Search'
import spinner from './spinner.gif'
import Alert from './components/Alert'
import About from './components/About'
import User from './components/User'
import NotFound from './components/NotFound'


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
         users : [],
         loading : true
    }
  }
  
  async componentDidMount(){
    const githubId = '4ab6bc18742e53060d2b'
    const githubSecret = 'd1028a433e20ff37482659bbf0e16ffd9c792301'
    fetch(`https://api.github.com/users?client_id=${githubId}&client_secret=${githubSecret}`).then(res =>{
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
        fetch(`https://api.github.com/search/users?q=${text}&?client_id=${'id'}&client_secret=${'secret'}`).then(res=>{
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

  render() { 
    const el = !this.state.loading ? <Users loading={this.state.loading} users={this.state.users} /> : <img src={spinner} />
    const alert = this.state.showAlert ? <Alert type='danger' msg='Please enter something' /> : ''
    const alertGreen = this.state.loading ? <Alert type='success' msg='Fetching github users from database' /> : ''
    return (
      <>
       <Router>
       <Navbar  title="GitHub Locator" />
       <div className='container'>
         <br />       
        <Switch>
          <Route exact path='/' >
          {alert}       
       {alertGreen}
          <Search showAlert={this.showAlert}  searchUser={this.searchUser} />
            <div className='container'>        
              {el}
            </div>
          </Route>
          <Route exact path='/about'>
              <About />
          </Route>
          <Route exact path='/user/:login' render={props =>(
            <User {...props} />
          )} />
          <Route >
            <NotFound msg='ops wrong page bro feel free to go back and search for users' />
          </Route>
        </Switch>
       </div>
       </Router>
      </>
    )
  }
}
