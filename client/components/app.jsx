
import React from 'react';
import Header from './header';
import GradeTable from './gradeTable';
import GradeForm from './gradeForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.postAGrade = this.postAGrade.bind(this);
  }

  getAverageGrade() {
    if (this.state.grades.length) {
      const newGradesArray = this.state.grades.concat();
      const gradeSum = newGradesArray.reduce((a, b) => ({ grade: a.grade + b.grade }));
      return Math.ceil(gradeSum.grade / newGradesArray.length);
    } else {
      return 0;
    }
  }

  componentDidMount() {
    this.getAllGrades();
    this.getAverageGrade();
  }

  getAllGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(json => {

        this.setState({ grades: json });
      });

  }

  postAGrade(newGrade) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGrade)
    };
    fetch('/api/grades', options)
      .then(res => res.json())
      .then(json => {

        this.setState({
          grades: [...this.state.grades, json]
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className='container'>

        <Header text="Student Grade Table" average={this.getAverageGrade()}></Header>

        <div className='d-flex'>
          <div className=' flex-grow-1'>
            <GradeTable grades={this.state.grades}/>
          </div>
          <div className='flex-grow-1'>
            <GradeForm onSubmit={this.postAGrade} ></GradeForm>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
