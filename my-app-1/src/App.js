import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//admin-on-rest
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { PostList } from './posts';
import { UserList } from './users';


/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
*/


const App = () => (
	
	<Admin restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
		
		<Resource name="posts" list={PostList} />
    <Resource name="users" list={UserList} />

	</Admin>

);

export default App;
