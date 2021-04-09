import { TextField, Grid, Button } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    menuWrapper: {
      padding: theme.spacing(3),
      textAlign: 'center',

    }

}));


export default function Menu(props) {

    const classes = useStyles();
    const { onCountChanged, onCreateClicked, onFillClicked } = props;

    return (
            <Grid container className={classes.menuWrapper}  spacing={3} >
                <Grid classitem xs={4} spacing={3}>
                    <TextField
                        id="standard-number"
                        label="Размерность матрицы"
                        type="number"
                        fullWidth="true"
                        onInput={(e) => onCountChanged(e.target.value)}
                        inputProps={{
                            min: 3,
                            max: 20
                        }}
                        />
                    </Grid>
                    <Grid item xs={4} spacing={3}>
                        <Button onClick={onCreateClicked}>Создать</Button>
                    </Grid>
                    <Grid item xs={4} spacing={3}>
                    <Button
                        onClick={onFillClicked}
                    >
                        Закрасить</Button>
                </Grid>
            </Grid>

    )
}