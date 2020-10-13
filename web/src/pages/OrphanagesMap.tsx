import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import '../styles/pages/orphanages-map.css'
import mapMarkerImg from '../assets/map-marker.svg'

function Landing() {
  return (
    <div id="page-map">
    <aside>
      <header>
        <img src={mapMarkerImg} alt="Happy Icon" />

        <h2>Escolha um orfanato no mapa</h2>
        <p>Muitas crianças estão esperando a sua visita</p>
      </header>

      <footer>
        <strong>Maracaju</strong>
        <span>Mato Grosso do Sul</span>
      </footer>
    </aside>

    <Map center={[-21.6157355, -55.1698906]} zoom={15} style={{ width: '100%', height: '100%' }}>
				{/* <TileLayer url={"https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"} /> */}
				<TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
			</Map>

    <Link to="/app" className="create-orphanage">
      <FiPlus size={26} color="#fff" />
    </Link>
    </div>
  )
}

export default Landing;