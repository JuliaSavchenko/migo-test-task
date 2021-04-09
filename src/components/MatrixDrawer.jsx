import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    columnWrapper: {
        display: 'inline-block',
        
    },
    tableWrapper: {
        marginLeft: '14px',
    },
    cell: {
        width: '40px',
        height: '40px',
        margin: '0 auto',
        textAlign: 'center',
        border: '1px solid black',
        boxSizing: 'border-box',
        paddingTop: '25%',
    },
  }));

export default function MatrixDrawer(props) {

    const classes = useStyles();
    const { matrix } = props;

    const getBackgroundColor = (matrixElement) => {
        return { 
            backgroundColor: matrixElement.isColored ? 'blue' : 'grey',
        };
    }

    return (
        <div className={classes.tableWrapper}>
            {matrix && matrix.map(matrixColumn => {
                return <div className={classes.columnWrapper}>
                    { matrixColumn.map(matrixElement => {
                        return <div className={classes.cell} style={ getBackgroundColor(matrixElement) }> { matrixElement.value } </div>
                    })}
                </div>
            })}
        </div>
    )
}

