import { useMediaQuery } from '@material-ui/core';
import GoogleMapReact from "google-map-react";
import React from "react";

import useStyles from './styles';
 
const Map = ({setCoordinates, setBounds, coordinates}) => {
    const classes = useStyles()
    const isMobile = useMediaQuery('(min-width:600px)')

    const cordinates = {lat: 0, lng: 0}

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyC2CUNpS8_2_zjOBzOL7RZ3rNJsX7tAgkM'}}
                defaultCenter={cordinates}
                center={cordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={(e) => {
                    setCoordinates({lat: e.center.lat, lng: e.center.lng});
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}
                onChildClick={''}>

            </GoogleMapReact>
        </div>
    )
}

export default Map