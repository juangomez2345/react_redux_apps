import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { showUsers } from "../actions";


class App extends Component{
  
  componentWillMount(){
    this.props.showUsers();
  }

  renderUsersList(){
    return this.props.users.map((user)=>{
      return (
        <li key={user.id}>{user.userName} - {user.userPhone}</li>
      )
    })
  }

  render(){
    return (
      <div>
        <ul>
          { this.renderUsersList() }
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    users: state.user.list
  }
}

export default connect(mapStateToProps, { showUsers })(App)