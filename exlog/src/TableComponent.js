import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const TR = styled(TableRow)({
    background: 'blue'
});

class TableComponent extends Component{
    
    
    
    render(){
        return(
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                        {this.props.columnNames.map((c, i) => <TableCell key={i}>{c}</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        
                        {this.props.data.map((d, ind)=><TableRow className={classes.tabler} key={ind}>{this.props.columnNames.map((col, ind)=><TableCell key={ind}>{d[col]}</TableCell>)}</TableRow>)}
                        
                    </TableBody>
                </Table>
                
            </div>
        )
    }
}

export default withStyles(StyledTableRow)(TableComponent);