
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
    this.deleteAGrade = this.deleteAGrade.bind(this);
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

  deleteAGrade(gradeId) {
    const options = {
      method: 'DELETE'

    };
    fetch(`/api/grades/${gradeId}`, options)
      .then(res => res.json())
      .then(json => {
        const newGrades = this.state.grades.slice();
        let targetIndex;
        for (let i = 0; i < newGrades.length; i++) {
          if (newGrades[i].id === gradeId) {
            targetIndex = i;
            break;
          }
        }
        newGrades.splice(targetIndex, 1);
        this.setState({ grades: newGrades });
      })
    ;
  }

  render() {
    return (
      <div className='container'>

        <Header text="Student Grade Table" average={this.getAverageGrade()}></Header>

        <div className='d-flex justify-content-between'>
          <div className=' flex-grow-1'>
            <GradeTable grades={this.state.grades} deleteAGrade={this.deleteAGrade}/>
          </div>
          <div className='ml-5'>
            <GradeForm onSubmit={this.postAGrade} ></GradeForm>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
