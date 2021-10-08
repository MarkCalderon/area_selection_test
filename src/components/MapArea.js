import React, { useState, useEffect } from 'react';
import './MapArea.scss';

import MapItem from './MapItem';

const MapArea = () => {

    const [maps, setMaps] = useState([
        {
            id: "item01",
            avail: true,
            price: '$123,000',
        },
        {
            id: "item02",
            avail: false,
            price: '$700',
        },
        {
            id: "item03",
            avail: true,
            price: '$500',
        },
        {
            id: "item04",
            avail: false,
            price: '$10',
        },
        {
            id: "item05",
            avail: true,
            price: '$300',
        },
        {
            id: "item06",
            avail: true,
            price: '$9,000',
        },
        {
            id: "item07",
            avail: false,
            price: '$5,000',
        },
        {
            id: "item08",
            avail: true,
            price: '$500',
        },
        {
            id: "item09",
            avail: false,
            price: '$300',
        },
    ]);

    return(
        <div className="mapArea">
            <MapItem maps={maps} setMaps={setMaps} />
        </div>
    )
}

export default MapArea