import { Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { loadMapApi } from '../../apis/loadMapApi';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Map from '../../components/map/map.component'
import { ZillowApi } from '../../apis/zillowApi';
import ContentLink from 'material-ui/svg-icons/content/link';


const useStyles = makeStyles((theme) => ({ 
    homeHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  
 
function PropertySearch() {
    const classes = useStyles();

    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [distanceInKm, setDistanceInKm] = useState<number>(-1);

    const mapStyles = {
        width: '100%',
        height: '100%'
      };
    
    useEffect(() => {
        const googleMapScript = loadMapApi();
        googleMapScript.addEventListener('load', function () {
            setScriptLoaded(true);
        });

        const soldPropertyList = ZillowApi.searchSoldPropertyListByZip("19959099");
        console.log("soldPropertyList: ", JSON.stringify(soldPropertyList))
    }, []);

    return<>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography className={classes.homeHeader} variant="h2">
                        Sold Property Search
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={8}>
                    {getGoogleMaps()}
                </Grid>
            </Grid>
        </>

    function getGoogleMaps() {
        return <>
        {scriptLoaded && 
            <Map
             mapType={google.maps.MapTypeId.ROADMAP}
             mapTypeControl={true}
             setDistanceInKm={setDistanceInKm}
           />
        }
        {distanceInKm > -1 && renderDistanceSentence()}
        </>
    }

    function renderDistanceSentence() {
        return (
            <div className='distance-info'>
                {`Distance between selected marker and home address is ${distanceInKm}km.`}
            </div>
        );
    }
}
 
export default PropertySearch;