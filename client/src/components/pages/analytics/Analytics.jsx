import React, {useState} from 'react';
// import React from 'react';
import './Analytics.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import Loader from '../../helpers/loader/Loader';
// import Linechart from './graphs/Linechart';
import Doughnut from '../analytics/graphs/Doughnut';
import Radar from '../analytics/graphs/Radar';
import Bar from '../analytics/graphs/Bar';
import Polar from '../analytics/graphs/Polararea';

//**Bootstrap ver */
function Analytics (props) {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  console.log('props',props.loginUser);
    
  return !props ? <Loader /> : (
    <>
      <div className="analytics-wrapper">
        <h2>Total Summary</h2>
        <div className="total-summary-container">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <div className="polar-chart">
                <Polar />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="doughnut-chart">
                <Doughnut />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="radar-chart">
                <Radar />
              </div>
            </Carousel.Item>
          </Carousel>
        </div> 
        <h2>Daily Summary</h2>
        <div className="daily-summary-container">
          {/* //FIXME: THIS is ugly....... */}
          <div className="bar-chart">
            <Bar />
          </div>
        </div>
      </div>  
    </>
  );
}

export default Analytics;
