import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';

class ModalPerson extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: this.props.data,
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
            <div>
                <Fab variant="extended" className='add-person' onClick={this.onHandleOpen}>
                    <AddIcon />
                    Add person
                </Fab>
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
                        <Fab size="small" color="primary" className="close" onClick = {this.handleClose}>
                            <CloseIcon />
                        </Fab>
                        <Table className='main-table'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell align="right">Calories</TableCell>
                                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map(row => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Modal>
            </div>
        );
    }
}

export default ModalPerson;