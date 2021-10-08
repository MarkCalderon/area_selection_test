import React from 'react';

import './MapOption.scss';

const MapOption = ({id, avail, price, maps, setMaps}) => {

    const closeOption = (e) => {
        let list = document.querySelectorAll('.mapItem');
        list.forEach(item => {
            item.classList.remove('u-isView');
        });
    }

    const buyLot = (id) => {
        setMaps(maps.map(item => {
            if(item.id === id) {
                return {
                    ...item, avail: !item.avail
                }
            }
            return item;
        }))
    }

    return (
        <div className="mapOption">
            <div className="mapOption__box">
                <button className="mapOption__close" onClick={closeOption}></button>
                <p className="mapOption__title">Lot Price</p>
                <p className="mapOption__price">{price}</p>
                <button className={(avail == true) ? 'mapOption__buy' : 'mapOption__buy u-disabled'} onClick={() => buyLot(id)}>{(avail == true) ? 'BUY NOW' : 'UN-AVAILABLE'}</button>
            </div>
        </div>
    )
}

export default MapOption;