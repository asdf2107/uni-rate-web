import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { getDataAll as get, postDataAll as post } from './api-calls';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Universities from './components/Universities';
import SearchBar from './components/SearchBar';
import FacDepSpecSelector from './components/FacDepSpecSelector';

async function getDataAPI() {
  const delay = ms => new Promise((resolve, reject) => setTimeout(() => resolve({
    universities: [
      { route:'kpi', id: 1, name:'KPI', fullName:'Kyiv Polytechnic Institute', rating: 3.65 },
      { route:'nau', id: 2, name:'NAU', fullName:'National Aviation University', rating: 4.01 },
    ],
  }), ms));
  return await delay(1000);
}

function App() {
  const [ filter, setFilter ] = useState('');
  const [ data, setData ] = useState(null);

  getDataAPI().then(dataApi => setData(dataApi));

  function getUniRoutes() {
    const routes = [];

    data.universities.forEach(uni => {
      routes.push(
        <Route path={`/${uni.route}`} exact key={uni.id}>
          <FacDepSpecSelector uni={uni}/>
        </Route>
      );
    });

    return routes;
  };

  return (
    <>
      <Router>
        <Navbar/>
        {data !== null ?
        <Switch>
          <Route path='/' exact>
            <SearchBar textChanged={setFilter}/>
            <Universities universities={data.universities.filter(uni => (uni.name.includes(filter) || uni.fullName.includes(filter)))}/>
          </Route>
          {getUniRoutes()} 
        </Switch> :
        <div className='lds-dual-ring'></div>}
      </Router>
    </>
  );
}

export default App;
