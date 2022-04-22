import React from 'react'
import { Map, Marker } from "pigeon-maps"

function MyMap( { laenge, breite } ) {
  return (
    <Map height={500} defaultCenter={[laenge, breite]} defaultZoom={11}>
    <Marker width={50} anchor={[laenge, breite]} />
    </Map>
  )
}

export default MyMap