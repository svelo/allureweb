import React from 'react';
import './App.css';
import Layout from './core/layout/layout.component';

function App() {
  return (
    <div
      className="p-3 mb-2  text-white"
      style={{ backgroundColor: '#e8e7e3' }}
    >
      <div className="container">
        <Layout></Layout>
      </div>
    </div>
  );
}

export default App;
