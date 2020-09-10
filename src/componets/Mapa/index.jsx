import React from 'react';
import { GoogleMap, Marker, InfoWindow, KmlLayer, TrafficLayer, useLoadScript } from '@react-google-maps/api';
//import { GoogleMap, Marker, InfoWindow, KmlLayer, TrafficLayer, DrawingManager, useLoadScript } from '@react-google-maps/api';
import { STYLE_CONTAI, MAPA_OPTION, MAPA_CENTER, KEY_GOOGLE } from "./mapConfig";
import { ICON_CFG } from "./iconConfig"


import Loading  from '../Loading';
import Error500 from '../Errors/500';

const Index = (props) => {
    const [map, setMap] = React.useState(null);


    const { moviles, rutas } = props;
    const [ selectedMovil, setSelectedMovil ] = React.useState(null);
    // const [ markers, setMarkers ] = React.useState({});
    // const [ rutasKml, setRutasKml ] = React.useState([]);

    // const [ selected, setSelected ] = React.useState(null);

    const { isLoaded, loadError } = useLoadScript({
        // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
        googleMapsApiKey: KEY_GOOGLE
    });
 
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);
 
    
    
    const renderRutas = (i, obj) => {
        return <KmlLayer key={i} url={obj} />;
    }

    const crearRutas = (listado) => {
        let rutasKml = [];
        listado.map( (obj, i) => rutasKml.push( renderRutas(i, obj) ) );
        return rutasKml;
    }        

    const renderMarker = (obj) => {
        const { Codigo, Patente, Movil} = obj;
        const eve = obj.Eventos[0];
        const { Heading, Velocidad, Fecha, Hora } = eve;
        const pos = { lat : eve.Latitud, lng: eve.Longitud };

        const tittle = `MAQ: ${Movil}|PPU: ${Patente}`;
        return (
          <Marker  
            key       = { Codigo } 
            title     = { tittle }
            id        = { Codigo } 
            name      = { Patente }
            position  = { pos } 
            mapCenter = { pos }
            draggable = { false }
            //onClick   = { this.onMarkerClick }
            icon      = { ICON_CFG(Heading, Velocidad) }
            //label     = { Patente }
            hora      = { Hora }
            fecha     = { Fecha }
            velocidad = { Velocidad }
            grados    = { Heading }
            movil     = { Movil }

            onClick   = { () => {setSelectedMovil(obj)} }
          />
        )
    }

    const crearMarker = (obj) => {
        const marker = renderMarker(obj);
        return marker;
    }

    if (loadError) return <Error500 />;
    if (!isLoaded) return <Loading />;

    return (
        <div className="boxMapa">
            <GoogleMap 
                mapContainerStyle={ STYLE_CONTAI } 
                options={ MAPA_OPTION }
                onLoad={onMapLoad}
                onUnmount={onUnmount} 
                zoom={1} 
                center={ MAPA_CENTER } 
            >
                { rutas.length > 0 ? crearRutas(rutas) : null }
                { moviles.map(obj => (
                    obj.Eventos.length > 0 ? crearMarker(obj): null)
                )}
                
                {   selectedMovil && console.log(selectedMovil.Eventos[0].Latitud) }
                <TrafficLayer />
            </GoogleMap>
        </div>
    )
}

export default React.memo(Index);