import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/data';

function Header() {
  return(
    <div className='container m-4'>
        <h2>Welcome to NCAA March Madness</h2>
        <p>This sites shows the list of all NCAA basketball teams, their mascots, and location.</p>
    </div>
  );
}
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

function TeamList() {
  return(
    <div className='container'>
        <div className='row'>
          {data.teams.map(oneTeam => <Team {...oneTeam}/>)}
        </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Header></Header>
          <TeamList></TeamList>
        </div>
      </header>
      
    </div>
  );
}

export default App;
