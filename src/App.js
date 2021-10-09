import './App.css';
import MapArea from './components/MapArea';
import {MapProvider} from './components/MapContext';

function App() {
  return (
    <main className="mapSample">
        <MapProvider>
          <MapArea />
        </MapProvider>
    </main> 
  );
}

export default App;
