import {styleJson} from './mapstyle';

var bmapOption = {
  bmap: {
    center: [120.13066322374, 30.240018034923],
    zoom: 11,
    roam: false,
    mapStyle: styleJson
  },

  series: [
  {
    name: 'pm2.5',
    type: 'scatter',
    coordinateSystem: 'bmap',
    label: {
      formatter: '{b}',
      position: 'right'
    },
    itemStyle: {
      color: '#ddb926'
    }
  }]
};
export {bmapOption};