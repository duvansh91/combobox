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
import AddIcon from '@material-ui/icons/Add';
import Chip from '@material-ui/core/Chip';

/*
**You can pass by props:

*data = [{ key: yourKey, title: yourTitle, description: yourDescription, image: yourUrlImage }]
*placeHolder = "Text to show on the button"

**For get a selected element
*Use in your component a callback on onChange prop:
onChange={(value) => {console.log(value)}}

**Use example:
<ComboBox placeHolder="your Text" data={yourData} onChange={(value) => {console.log(value)}}/>

*/


class ComboBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: this.props.data,
            search: '',
            filteredRows: [],
            open: false,
            selected: [],
            placeHolder: this.props.placeHolder
        }
    }

    onSelectHandle = (item) => {
        this.state.selected.push(item);
        this.setState({ search: '' });
        this.setState({ open: false });
        if(this.props.onChange){this.props.onChange(item)}
    }

    updateSearch = (e) => {
        this.setState({ search: e.target.value });
    }

    renderRows = (row) => {
        return (
            <ListItem key={row.key} button onClick={() => { this.onSelectHandle(row) }}>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={row.image}>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={row.title} secondary={row.description} />
            </ListItem>);
    }

    onHandleOpen = () => {
        this.setState({ open: true });
    }

    handleClose = () => {
        this.setState({ open: false });
    }

    handleDelete = () => {
        this.setState({ selected: [] });
    }

    render() {

        const { open, search, rows, selected, placeHolder } = this.state;

        const filteredRows = rows.filter(row => {
            return Object.keys(row).some(key => {
                if (key !== 'key' && key !== 'image') {
                    return row[key].toLowerCase().indexOf(search.toLowerCase()) !== -1;
                }
            })
        });

        return (
            <div>
                {selected.length > 0 ? (
                    <Chip
                        className="current"
                        key={selected[0].key}
                        avatar={
                            <Avatar alt="Remy Sharp" src={selected[0].image}>
                            </Avatar>
                        }
                        label={selected[0].title}
                        deleteIcon={
                            <CloseIcon />
                        }
                        onDelete={this.handleDelete}
                    />
                ) : (
                        <Fab variant="extended" className='add-person' onClick={this.onHandleOpen}>
                            <AddIcon />
                            {placeHolder}
                        </Fab>
                    )
                }
                <Modal open={open}>
                    <Paper className='main-container'>
                        <TextField
                            size="small"
                            label="Search"
                            className={'search'}
                            value={search}
                            onChange={this.updateSearch}
                            variant="outlined"
                        />
                        <Fab size="small" color="primary" className="close" onClick={this.handleClose}>
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