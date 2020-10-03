import React from 'react';
import Aside from './Aside';
import AddModel from './components/models/AddModel';

function App() {
  return (
    <div className="d-flex flex-row flex-column-fluid page">
      <Aside/>
      <div className="d-flex flex-column flex-row-fluid wrapper">
        
          <AddModel/>
      </div>
    </div>
  );
}

export default App;
