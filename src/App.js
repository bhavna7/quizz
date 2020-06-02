import React from 'react';

import Button from 'react-bootstrap/Button'

import QuizQuestions from './components/QuizQuestions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzStarted: false
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            this.state.quizzStarted ?
              <QuizQuestions />
            : 
            <div className="text-center">
              <h2>Hello, Welcome to <b>Quizz App</b>!!</h2>
              <Button 
                variant="outline-danger" 
                onClick={() => {
                  this.setState({
                    quizzStarted: true
                  });
                }}
              >
                <i>Start the Quizz</i>
              </Button>
            </div>
          }
        </header>
      </div>
    );
  }
}

export default App;
