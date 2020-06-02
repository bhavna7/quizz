import React from 'react';

import QuizQuestions from './components/QuizQuestions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QuizQuestions />
      </header>
    </div>
  );
}

export default App;
