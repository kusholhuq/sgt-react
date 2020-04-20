import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      name: '',
      course: '',
      grade: 0
    });
    this.handleName = this.handleName.bind(this);
    this.handleCourse = this.handleCourse.bind(this);
    this.handleGrade = this.handleGrade.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }

  handleCourse(event) {
    this.setState({ course: event.target.value });
  }

  handleGrade(event) {
    this.setState({ grade: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: parseInt(this.state.grade)
    };
    this.props.onSubmit(newGrade);
  }

  handleReset(event) {
    this.setState({
      name: '',
      course: '',
      grade: 0
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <div className='form-group d-flex'>
          <label className='mt-1 mr-2' htmlFor="name"><i className='fas fa-user'></i></label>
          <input id='name' className='form-control' type='name' placeholder='Name' onChange={this.handleName} value={this.state.name}></input>
        </div>
        <div className='form-group d-flex'>
          <label className='mt-1 mr-2' htmlFor="course"><i className='fas fa-list'></i></label>
          <input id='course' className='form-control' type="text" placeholder='Course' onChange={this.handleCourse} value={this.state.course}></input>
        </div>
        <div className='form-group d-flex'>
          <label className='mt-1 mr-2' htmlFor="grade"><i className='fas fa-graduation-cap'></i></label>
          <input id='grade' className='form-control' type="number" placeholder='Grade' onChange={this.handleGrade} value={this.state.grade}></input>
        </div>
        <div className='d-flex flex-end justify-content-end'>
          <button className='badge badge-success form-control' type='submit'>Add</button>
          <button className='badge badge-danger ml-1 form-control' type='reset' onClick={this.handleReset}>Cancel</button>
        </div>

      </form>
    );
  }
}

export default GradeForm;
