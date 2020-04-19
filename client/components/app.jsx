
import React from 'react';
import Header from './header';
import Grade from './grade';
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
        console.log(json);
        this.setState({ grades: json });
      });

  }

  render() {
    return (
      <Header text="Student Grade Table"></Header>
      <GradeTable allGrades = {this.state.grades}>

      </GradeTable>

    );
  }
}

export default App;
