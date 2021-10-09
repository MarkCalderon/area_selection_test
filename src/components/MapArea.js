import React, { useContext } from 'react';
import './MapArea.scss';
import Map from '../map.png';
import {MapContext} from './MapContext';
import MapItem from './MapItem';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const MapArea = () => {
    const [maps, setMaps] = useContext(MapContext);

    const openData = () => {
        document.querySelector('.mapArea__data').classList.add('u-isOpen');
    }

    return(
        <div className="main">
            <div className="mapArea__map">
                <TransformWrapper
                    limitToBounds={true}
                >
                    <TransformComponent>
                        {/* <div className="mapArea__mapOut" style={{backgroundImage: "url(" + Map + ")"}}></div> */}
                        <img src={Map} alt="map" />
                        <div className="mapArea__area">
                            <div className="mapArea__point mapArea__point--1" onClick={openData}>A</div>
                            <div className="mapArea__point mapArea__point--2">B</div>
                            <div className="mapArea__point mapArea__point--3">C</div>
                            <div className="mapArea__point mapArea__point--4">D</div>
                            <div className="mapArea__point mapArea__point--5">E</div>
                            <div className="mapArea__point mapArea__point--6">F</div>
                        </div>
                    </TransformComponent>
                </TransformWrapper>
            </div>
            <div className="mapArea__data">
                <div className="mapArea__dataInner">
                <TransformWrapper>
                    <TransformComponent>
                        <MapItem maps={maps} setMaps={setMaps} />
                    </TransformComponent>
                </TransformWrapper>
                </div>
            </div>

        </div>
    )
}

export default MapArea