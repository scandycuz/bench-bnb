import React from 'react';
import { styles } from './styles';
import MarkerManager from '../../util/marker_manager';

class BenchMap extends React.Component {

  constructor(props) {
    super(props)

    // this._benchesToAdd = this._benchesToAdd.bind(this);
  }

  // _benchesToAdd() {
  //   const benchesArray = [];
  //   Object.keys(this.props.benches).forEach( (bench) => {
  //     benchesArray.push(this.props.benches[bench.id]);
  //   });
  // }

  componentDidMount() {
    const mapDOMNode = this.refs.map;

    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13,
      styles: styles
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.markers = this.MarkerManager.markers;
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.benches)
  }

  render() {
    return(
      <div id='map-container' ref='map'>
        <h3>Temp Content</h3>
      </div>
    );
  }
}

export default BenchMap;
