import React, {useState, useEffect} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {

};
const useStyles = makeStyles(styles);


export default function Landing()
{
    const classes = useStyles();
    return (
        <Grid container spacing={3}>

            <Grid item alignContent="stretch">
                <div>hello</div>
            </Grid>

            <Grid item alignContent="stretch">
                <div>hello</div>
            </Grid>

            <Grid item alignContent="stretch">
                <div>hello</div>
            </Grid>


        </Grid>
    );
}