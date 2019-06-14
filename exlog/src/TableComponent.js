import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import './Styles/TableComponent.css'

const TR = {
    background: 'blue'
};

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 1000,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

class TableComponent extends Component{




    render(){
      const { classes } = this.props;
        return(
            <div className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow className={classes.tableRow}>
                        {this.props.columnNames.map((c, i) => <TableCell key={i}>{c}</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {this.props.data.map((d, ind)=><TableRow key={ind}>{this.props.columnNames.map((col, ind)=><TableCell key={ind}>{d[col]}</TableCell>)}</TableRow>)}

                    </TableBody>
                </Table>

            </div>
        )
    }
}

export default withStyles(styles)(TableComponent);
