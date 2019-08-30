import React, { Component } from 'react';
import { FixedSizeList } from 'react-window';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import List from '@material-ui/core/List';
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
            open: this.props.open
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

    render() {

        const { rows, open } = this.state;

        const persons = ({ index, style }) => (
            <ListItem button style={style} key={index}>
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={rows[index].name} secondary={rows[index].age} />
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
                            /* value={values.name}
                            onChange={handleChange('name')} */
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