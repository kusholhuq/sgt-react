
import React from 'react';
import Header from './header';

import GradeTable from './gradeTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      sum: 0,
      average: 0

    };

  }

  getAverageGrade() {
    for (let i = 0; i < this.state.grades; i++) {
      this.setState({
        sum: this.state.sum + this.state.grades[i].grade
      });

    }
    this.setState({
      average: Math.ceil((this.state.sum) / this.state.grades.length)
    });
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
