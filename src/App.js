import React, { Component } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import ComboBox from './components/ComboBox';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import CloseIcon from '@material-ui/icons/Close';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [
        { key: 1, title: 'Juan Mejias', description: '18', image: 'https://image.flaticon.com/icons/svg/701/701993.svg'},
        { key: 2, title: 'Pedro Almirante', description: '25', image: 'https://image.flaticon.com/icons/svg/701/701993.svg' },
        { key: 3, title: 'Mathew Person', description: '30', image: 'https://image.flaticon.com/icons/svg/701/701993.svg' },
        { key: 4, title: 'Teresa Albañez', description: '40', image: 'https://image.flaticon.com/icons/svg/702/702016.svg' },
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
    const { rows, selected } = this.state;
    if (selected.length > 0) {
      rows.map(row => {
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
          {selected.length > 0 ? (
            <Chip
              className="current"
              key={current.key}
              avatar={
                <Avatar alt="Remy Sharp" src={current.image}>
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
          <ComboBox data={rows} open={open} onClose={this.handleClose} onSelect={this.onSelect} />
        </Paper>
      </div>
    );
  }
}

export default App;


