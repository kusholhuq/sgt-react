import React from 'react';
import Grade from './grade';

function GradeTable(props) {
  if (props.grades.length === 0) {
    return (
      'No grades recorded'
    );

  } else {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Grade</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {

            props.grades.map(grade => {
              return (
                <Grade key={grade.id} name={grade.name} course={grade.course} grade={grade.grade} deleteAGrade={function () { props.deleteAGrade(grade.id); }}/>
              );
            })

          }
        </tbody>
      </table>
    );
  }
}

export default GradeTable;
