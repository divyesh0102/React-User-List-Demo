import React, { lazy, Suspense } from 'react';
import './App.css';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
const Users = lazy<any>(() => import('./pages/Users'));

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>
        <Users />
      </Suspense>      
    </div>
  );
}

export default App;
