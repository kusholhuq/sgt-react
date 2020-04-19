import React from 'react';

function GradeTable(props) {
  return (
    <table className={'.table'}>
      {props.allGrades}
    </table>
  );
}

export default GradeTable;
