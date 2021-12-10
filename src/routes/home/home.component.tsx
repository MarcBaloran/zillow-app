import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({ 
    homeHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

export interface Props {
    
}
 
function Home() {
    const classes = useStyles();

    return ( 
        <Typography className={classes.homeHeader} variant="h1">
            Home Page
          </Typography>
     );
}
 
export default Home;