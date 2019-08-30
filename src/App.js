import React, { Component } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import ModalPerson from './components/ModalPerson';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import CloseIcon from '@material-ui/icons/Close';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [
        { key: 1, title: 'Juan Mejias', description: 18 },
        { key: 2, title: 'Pedro Almirante', description: 25 },
        { key: 3, title: 'Mathew Person', description: 30 },
        { key: 4, title: 'Teresa Albañez', description: 40 },
        { key: 5, title: 'Juan Peralta', description: 23 },
        { key: 6, title: 'Leonardo Galves', description: 19 },
        { key: 7, title: 'Favio Lopez', description: 28 },
        { key: 8, title: 'Timothy Keller', description: 29 },
        { key: 9, title: 'Rodrigo Ibañez', description: 47 },
        { key: 10, title: 'Jose Barraza', description: 23 },
        { key: 11, title: 'Alex Guerra', description: 22 },
        { key: 12, title: 'Antonio salcedo', description: 24 },
        { key: 13, title: 'Aris Julio', description: 23 },
        { key: 14, title: 'Winston Stand', description: 24 }
      ],
      open: false,
      selected: [],
      current: []
    }
  }

  onHandleOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  onSelect = (item, closed) => {
    this.state.selected.push(item);
    this.setState({ open: closed });
    this.renderSelect();
  }

  renderSelect = () => {
    if (this.state.selected.length > 0) {
      this.state.rows.map(row => {
        if (row.key === this.state.selected[0]) {
          this.setState({ current: row });
        }
      });
    }
  }

  handleDelete = () => {
    this.setState({ selected: [] });
    this.setState({ current: [] });
  }

  render() {
    const { rows, open, selected, current } = this.state;

    return (
      <div className="App">
        <Paper className='main-container'>
          {selected > 0 ? (
            <Chip
              className="current"
              key={current.key}
              avatar={
                <Avatar>
                  <FaceIcon />
                </Avatar>
              }
              label={current.title}
              deleteIcon={
                <CloseIcon />
              }
              onDelete={this.handleDelete}
            />
          ) : (
              <Fab variant="extended" className='add-person' onClick={this.onHandleOpen}>
                <AddIcon />
                Add person
                </Fab>
            )
          }
          <ModalPerson data={rows} open={open} onClose={this.handleClose} onSelect={this.onSelect} />
        </Paper>
      </div>
    );
  }
}

export default App;


