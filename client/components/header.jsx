import React from 'react';

function Header(props) {
  return (
    <div className='d-flex mt-1 mr-1 justify-content-between'>
      <h1 className="mb-4">{props.text}</h1>
      <h2>Average Grade<span className='badge badge-secondary'> {props.average}</span></h2>
    </div>
  );
}

export default Header;
