import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';

class ComboBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: this.props.data,
            open: this.props.open,
            search: '',
            filteredRows: []
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
        this.props.onSelect(item, closed);
        this.setState({ search: '' });

    }

    updateSearch = (e) => {
        this.setState({ search: e.target.value });
    }

    renderRows = (row) => {
        return (
            <ListItem key={row.key} button onClick={() => { this.onSelectHandle(row.key) }}>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={row.image}>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={row.title} secondary={row.description} />
            </ListItem>);
    }

    render() {

        const { open, search, rows } = this.state;
    
        const filteredRows = rows.filter(row => {
            return Object.keys(row).some(key =>{
                if(key !== 'key' && key !== 'image'){
                   return row[key].toLowerCase().indexOf(search.toLowerCase()) !== -1;
                }
            })});

        return (
            <div>
                <Modal open={open}>
                    <Paper className='main-container'>
                        <TextField
                            size="small"
                            className='search-box'
                            label="Search"
                            className={'search'}
                            value={search}
                            onChange={this.updateSearch}
                            variant="outlined"
                        />
                        <Fab size="small" color="primary" className="close" onClick={this.props.onClose}>
                            <CloseIcon />
                        </Fab>
                        <List className="list-rows" style={{ maxHeight: 350 }}>
                            {
                                filteredRows.map(current => {
                                    return this.renderRows(current);
                                })
                            }
                        </List>
                    </Paper>
                </Modal>
            </div>
        );
    }
}

export default ComboBox;