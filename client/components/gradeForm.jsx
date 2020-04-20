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
        <div className='row'>
          <div className='m-1'>
            <div className='mb-3'><i className='fas fa-user'></i></div>
            <div className='mb-3'><i className='fas fa-list'></i></div>
            <div className='mb-2'><i className='fas fa-graduation-cap'></i></div>
          </div>
          <div>
            <div className='mb-2'><input type='name' placeholder='Name' onChange={this.handleName} value={this.state.name}></input></div>
            <div className='mb-2'> <input type="text" placeholder='Course' onChange={this.handleCourse} value={this.state.course}></input></div>
            <div className='mb-2'><input type="number" placeholder='Grade' onChange={this.handleGrade} value={this.state.grade} /></div>
            <div className='d-flex flex-end justify-content-end'>
              <button className='badge badge-success' type='submit'>Add</button>
              <button className='badge badge-danger ml-1' type='reset' onClick={this.handleReset}>Cancel</button>
            </div>
          </div>
        </div>

        <div className='form-group'>

        </div>
        <div className='form-group'>

        </div>
        <div className='form-group'>

        </div>
        <div>

        </div>

      </form>
    );
  }
}

export default GradeForm;
