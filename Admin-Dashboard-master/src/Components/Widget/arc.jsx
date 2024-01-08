import DeckGL, {GreatCircleLayer} from 'deck.gl';
const INITIAL_VIEW_STATE = {
    longitude: -1.415727,
    latitude: 52.232395,
    zoom: 6.6,
    minZoom: 0,
    maxZoom: 18,
    pitch: 40.5,
    bearing: -27
  };
  
function App() {
  /**
   * Data format:
   * [
   * {
   *   "from": {
   *     "type": "major",
   *     "name": "San Francisco Int'l",
   *     "abbrev": "SFO",
   *     "coordinates": [
   *       -122.38347034444931,
   *       37.61702508680534
   *     ]
   *   },
   *   "to": {
   *     "type": "major",
   *     "name": "Liverpool John Lennon",
   *     "abbrev": "LPL",
   *     "coordinates": [
   *       -2.858620657849378,
   *       53.3363751054422
   *     ]
   *   }
   *   ...
   * ]
   */
  const layer = new GreatCircleLayer({
    id: 'great-circle-layer',
    data,
    pickable: true,
    getStrokeWidth: 12,
    getSourcePosition: d => d.features.geometry.coordinates[0],
    getTargetPosition: d => d.features.geometry.coordinates[0],
    getSourceColor: [64, 255, 0],
    getTargetColor: [0, 128, 200]
  });

  return <DeckGL 
    layers={[layer]}
    getTooltip={({object}) => object && `${object.from.name} to ${object.to.name}`} />;
}