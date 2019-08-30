import React, { Component } from 'react';
import { FixedSizeList } from 'react-window';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

class ModalPerson extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: this.props.data,
            open: this.props.open,
            search: ''
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.open !== state.open) {
            return {
                open: props.open
            };
        }
        return null;
    }


     onSelectHandle = (item) => {
         const closed = false;
        this.props.onSelect(item,closed);
    } 

    updateSearch = (event) => {
        this.setState({ search: event.target.value.substr(0, 20) });
      }

    render() {

        const { rows, open, search } = this.state;

        let filteredRows = rows.filter(
            function (row) {
                return row.title.indexOf(search.toLowerCase()) !== -1;
              }
          );

          console.log(filteredRows)

        const persons = ({ index, style }) => (
            <ListItem button style={style} key={index} onClick={() =>{this.onSelectHandle(rows[index].key)}}>
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={rows[index].title} secondary={rows[index].description} />
            </ListItem>
        );

        return (
            <div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                >
                    <Paper className='main-container'>
                        <TextField
                            size="small"
                            className='search-box'
                            id="outlined-name"
                            label="Search"
                            className={'search'}
                            value={search}
                            onChange={this.updateSearch}
                            margin="normal"
                            variant="outlined"
                        />
                        <Fab size="small" color="primary" className="close" onClick={this.props.onClose}>
                            <CloseIcon />
                        </Fab>
                        <FixedSizeList height={400} width={360} itemSize={46} itemCount={rows.length}>
                            {persons}
                        </FixedSizeList>
                    </Paper>
                </Modal>
            </div>
        );
    }
}

export default ModalPerson;