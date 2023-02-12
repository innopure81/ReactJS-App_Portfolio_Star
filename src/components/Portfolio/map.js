import './index.scss';
//import 'leaflet/dist/leaflet.css';
import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet';
import {Icon} from "leaflet";

const Portfolio = ()=>{

    const customIcon = new Icon({ 
        iconUrl: "https://cdn-icons-png.flaticon.com/512/1483/1483336.png", 
        iconSize: [38,38] 
    });

    const markers = [
        {geoCode: [48.86, 2.3522], popUp: "Hello!" },
        {geoCode: [48.85, 2.3522], popUp: "Hi!" }
    ];

    return (
        <div>
            <MapContainer center={[48.8566, 2.3522]} zoom={5} >
                {/* <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                /> */}
                <TileLayer
                    attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
                    url='https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
                />

                {markers.map( (marker)=>{ return (            
                    <Marker icon={customIcon} position={marker.geoCode}>
                        <Popup>{marker.popUp}</Popup>
                    </Marker>
                    )}
                )}
            </MapContainer>
        </div>
    )

};

export default Portfolio;
