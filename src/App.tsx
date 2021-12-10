
import './App.css';
import  Layout  from './components/layout/layout.component';
import { ZillowApi } from './apis/zillowApi';
import { useEffect, useState } from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { loadMapApi } from './apis/loadMapApi';
import { Map, GoogleApiWrapper  } from 'google-maps-react';
import { Property } from './models/property';

const useStyles = makeStyles((theme) => ({ 
  googleMap: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
  }
}));

function App() {

  const classes = useStyles();
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [distanceInKm, setDistanceInKm] = useState<number>(-1);
  const [soldPropertyList, setSoldPropertyList] = useState<Property[]>([] as Property[]);

  const mapStyles = {
      width: '10%',
      height: '10%'
  };

  useEffect(() => {
    async function loadData() {
      const response = await ZillowApi.searchSoldPropertyListByZip("19959099");
      if(response){
        setSoldPropertyList([...response])
      }
    }

    loadData();
  }, []);

  return <>
      <Layout>
            <Grid container spacing={2}>
              {soldPropertyList.map((property: Property, key: any) => {
                  <div key={key}>
                    <Grid item xs={4}>
                      <p>{property.address}</p>
                      <p>{property.lastSoldPrice}</p>
                    </Grid>
                    <Grid item xs={8}>
                        {getGoogleMaps(property.latitude, property.longitude)}
                    </Grid>
                  </div>
              })}
            </Grid>
        </Layout>
    </>
        
  

  function getGoogleMaps(lat: number, lang: number) {
    return <>
    {scriptLoaded && 
        <Map
          google={google}
          zoom={8}
          style={mapStyles}
          initialCenter={
            {
              lat: lat,
              lng: lang
            }
        }
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

export default GoogleApiWrapper({
  apiKey: ''
})(App);

