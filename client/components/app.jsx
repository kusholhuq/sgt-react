
import React from 'react';
import Header from './header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.Header = this.Header.bind(this);
    this.state = {
      grades: []
    };
  }

  render() {
    return (
      <Header text="Student Grade Table"/>
    );
  }
}

export default App;
