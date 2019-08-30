import React, { Component } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import ModalPerson from './components/ModalPerson';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [
        { key: 1, name: 'Juan Mejias', age: 18 },
        { key: 2, name: 'Pedro Almirante', age: 25 },
        { key: 3, name: 'Mathew Person', age: 30 },
        { key: 4, name: 'Teresa Albañez', age: 40 },
        { key: 5, name: 'Juan Peralta', age: 23 },
        { key: 6, name: 'Leonardo Galves', age: 19 },
        { key: 7, name: 'Favio Lopez', age: 28 },
        { key: 8, name: 'Timothy Keller', age: 29 },
        { key: 9, name: 'Rodrigo Ibañez', age: 47 },
        { key: 10, name: 'Jose Barraza', age: 23 },
        { key: 11, name: 'Alex Guerra', age: 22 },
        { key: 12, name: 'Antonio salcedo', age: 24 },
        { key: 13, name: 'Aris Julio', age: 23 },
        { key: 14, name: 'Winston Stand', age: 24 }
      ],
      open: false
    }
  }

  onHandleOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    const { rows, open } = this.state;
    return (
      <div className="App">
        <Paper className='main-container'>
          <Fab variant="extended" className='add-person' onClick={this.onHandleOpen}>
            <AddIcon />
            Add person
                </Fab>
          <ModalPerson data={rows} open={open} onClose={this.handleClose}/>
        </Paper>
      </div>
    );
  }
}

export default App;


