import React from 'react';
import logo from './logo.svg';
import './App.css';
// Pull in JSON file
import data from './data/data';

// Header Tag that will explain the site
function Header() {
  return(
    <div className="mt-6">
        <h2>Welcome to NCAA March Madness</h2>
        <p>This sites shows the list of all NCAA basketball teams, their mascots, and location.</p>
    </div>
  );
}

// Team Class that Displays each card for the team
class Team extends React.Component < {school: string, name: string, city: string, state: string} > {
  render() {
    const oneTeam = this.props

    return(    
      
          <div className='card text-dark m-5 col-3'>
            <h2>{oneTeam.school}</h2>
            <span>{oneTeam.name} </span>
            <span>{oneTeam.city}, {oneTeam.state}</span>
          </div>
    );
  }
}

// List of the Teams that Creates a Team Class for Each JSON Team
function TeamList() {
  return(
    <div className='container'>
        <div className='row'>
          {data.teams.map(oneTeam => <Team {...oneTeam}/>)}
        </div>
    </div>
  );
}

// Creates the HTML that will be created
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="m-5">
          <Header></Header>
          <TeamList></TeamList>
        </div>
      </header>
      
    </div>
  );
}

export default App;
