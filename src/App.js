import React, { Component } from 'react';
import './App.css';
import ComboBox from './examples/ComboBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [
        { key: 1, title: 'Juan Mejias', description: '18', image: 'https://image.flaticon.com/icons/svg/701/701993.svg'},
        { key: 2, title: 'Pedro Almirante', description: '25', image: 'https://image.flaticon.com/icons/svg/701/701993.svg' },
        { key: 3, title: 'Mathew Person', description: '30', image: 'https://image.flaticon.com/icons/svg/701/701993.svg' },
        { key: 4, title: 'Camila Parra', description: '25', image: 'https://image.flaticon.com/icons/svg/702/702016.svg' },
        { key: 5, title: 'Juan Peralta', description: '23', image: 'https://image.flaticon.com/icons/svg/701/701993.svg' },
        { key: 6, title: 'Leonardo Galves', description: '19', image: 'https://image.flaticon.com/icons/svg/701/701993.svg' },
        { key: 7, title: 'Karen Perez', description: '28', image: 'https://image.flaticon.com/icons/svg/702/702016.svg' },
        { key: 8, title: 'Timothy Keller', description: '29', image: 'https://image.flaticon.com/icons/svg/701/701993.svg' },
        { key: 9, title: 'Laura Mendoza', description: '47', image: 'https://image.flaticon.com/icons/svg/702/702016.svg' },
        { key: 10, title: 'Jose Barraza', description: '23', image: 'https://image.flaticon.com/icons/svg/701/701993.svg' },
        { key: 11, title: 'Alex Guerra', description: '22', image: 'https://image.flaticon.com/icons/svg/701/701993.svg' },
        { key: 12, title: 'Antonio salcedo', description: '24', image: 'https://image.flaticon.com/icons/svg/701/701993.svg' },
        { key: 13, title: 'Aris Julio', description: '23', image: 'https://image.flaticon.com/icons/svg/701/701993.svg' },
        { key: 14, title: 'Winston Stand', description: '24', image: 'https://image.flaticon.com/icons/svg/701/701993.svg' }
      ]
    }
  }

  render() {
    
    const { rows } = this.state;

    return (
      <div className="App">
        <ComboBox placeHolder="Add someone" data={rows} onChange={(value) => {console.log(value.title)}}/>
      </div>
    );
  }
}

export default App;


