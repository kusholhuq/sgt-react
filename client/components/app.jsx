
import React from 'react';
import Header from './header';

import GradeTable from './gradeTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };

  }

  componentDidMount() {
    this.getAllGrades();
  }

  getAllGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(json => {

        this.setState({ grades: json });
      });

  }

  render() {
    return (
      <div>
        <Header text="Student Grade Table"></Header>
        <GradeTable grades={this.state.grades}/>
      </div>
    );
  }
}

export default App;
