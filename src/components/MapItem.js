import React, {} from 'react';
import './MapItem.scss';

import MapOption from './MapOption';

const MapItem = ({maps, setMaps}) => {
    return(
        maps.map((item) => {
            return (
                <div key={item.id} id={item.id} className={(item.avail === true) ? 'mapItem color--green' : 'mapItem color--red'} onClick={showLot} >
                    <MapOption id={item.id} price={item.price} avail={item.avail} maps={maps} setMaps={setMaps} />
                </div>
            )
        })
    )
}

const showLot = (e) => {
    e.target.classList.add('u-isView');
}

export default MapItem;