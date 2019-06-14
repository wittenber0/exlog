import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const TR = {
    background: 'blue'
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    width: '80%',
    minWidth: 650,
  },
  tableRow: {
    color: 'blue',
  },
}));

class TableComponent extends Component{




    render(){
        return(
            <div className={useStyles.root}>
                <Table className={useStyles.table}>
                    <TableHead>
                        <TableRow className={useStyles.tableRow}>
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

export default withStyles(TR)(TableComponent);
