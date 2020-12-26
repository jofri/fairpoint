import React from 'react';
import Card from '@material-ui/core/Card';
import Loader from '../../../helpers/loader/Loader';

function AnalyticsPlaceholder (props) {
  return props ?
    <div className='totalsummary-wrapper'>
      <Card>
        <div className="total-summary" style={{padding: 20}}>
          <h3>
            Here you can find all data pertaining to your news-habits.
            When you read an article from a News story, this page will update in real-time.
            You need to read at least 10 articles to activate your analytics.
            You’ve currently read {props.userData.length} articles.
          </h3>
        </div>
      </Card>
    </div>
    : <Loader/>;
}

export default AnalyticsPlaceholder;