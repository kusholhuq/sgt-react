import React from 'react';

function Grade(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.course}</td>
      <td>{props.grade}</td>
      <td><button className='badge' onClick={props.deleteAGrade}>Delete</button></td>
    </tr>
  );
}

export default Grade;
