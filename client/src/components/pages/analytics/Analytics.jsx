// import React, {useState, useEffect} from 'react';
import React from 'react';
import './Analytics.css';
import Loader from '../../helpers/loader/Loader';

import Linechart from './graphs/Linechart';
import Doughnut from '../analytics/graphs/Doughnut';
import Radar from '../analytics/graphs/Radar';
import Bar from '../analytics/graphs/Bar';

function Analytics (props) {

  console.log('props',props.loginUser);
    
  return !props ? <Loader /> : (
    <>
      <div>
        <h2>Total Summary</h2>
        {/* Total average score / Score trend within 5 weeks */}
        <Linechart />
        <Doughnut />
        <Radar />
      </div> 
      <div>
        <h2>Daily Summary</h2>
        <Bar />
      </div>
    </>
  );
}

export default Analytics;
