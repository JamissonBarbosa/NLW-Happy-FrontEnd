import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import {Map, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

import mapMarketingImg from '../images/Logo02.svg';
import '../styles/page/orphanages-map.css';

function OrphanagesMap() {
    return(
    <div id="page-map">
        <aside>
            <header>
                <img src={mapMarketingImg} alt="Happy"/>

                <h2>Escolha um orfanato no mapa</h2>
                <p>Muitas crianças estão esperando a sua visita :)</p>
            </header>

            <footer>
                <strong>Palmeira do Indios</strong>
                <span>Alagoas</span>
            </footer>
        </aside>

        <Map
            center={[-9.3986505,-36.6201786]}
            zoom={15}
            style={{width: '100%', height:'100%'}}
        >
            <TileLayer url="http://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        </Map> 

        <Link to="" className="create-orphanage">
            <FiPlus size={32} color="#FFF" />
        </Link>

    </div>
    )
}

export default OrphanagesMap;