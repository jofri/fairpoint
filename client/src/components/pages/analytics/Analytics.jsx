import React, {useState, useEffect} from 'react';
import './Analytics.css';
import Loader from '../../helpers/loader/Loader';
import {getUser} from '../../../services/api';

function Analytics () {

  const [loginUser, setLoginUser] = useState({});

  useEffect(() => {

    //FIXME: userInfo returned from passport is undefined at this moment
    // -> Login module isn't redirecting to 3000😢
    getUser()
      .then((userInfo) => setLoginUser(userInfo));

    //Hard coded
    // setLoginUser(
    //   {'username': 'Sooyeon Kang',
    //     'articles': [
    //       {
    //         '_id': '',
    //         'timestamp': '2020-12-01 22:48:58.108Z'
    //       },
    //       {
    //         '_id': '',
    //         'timestamp': '2020-12-01 08:48:58.108Z'
    //       },
    //       {
    //         '_id': '',
    //         'timestamp': '2020-11-30 21:48:58.108Z'            
    //       },
    //       {
    //         '_id': '',
    //         'timestamp': '2020-11-29 23:48:58.108Z'            
    //       },
    //       {
    //         '_id': '',
    //         'timestamp': '2020-11-28 22:48:58.108Z'            
    //       },
    //       {
    //         '_id': '',
    //         'timestamp': '2020-11-27 09:48:58.108Z'            
    //       },
    //       {
    //         '_id': '',
    //         'timestamp': '2020-11-26 08:48:58.108Z'            
    //       },
    //       {
    //         '_id': '',
    //         'timestamp': '2020-11-25 12:48:58.108Z'            
    //       },
    //       {
    //         '_id': '',
    //         'timestamp': '2020-11-24 14:48:58.108Z'            
    //       },
    //       {
    //         '_id': '',
    //         'timestamp': '2020-11-25 18:48:58.108Z'            
    //       },
    //       {
    //         '_id': '',
    //         'timestamp': '2020-11-27 11:48:58.108Z'            
    //       },
    //       {
    //         '_id': '',
    //         'timestamp': '2020-11-30 09:48:58.108Z'            
    //       },
    //       {
    //         '_id': '',
    //         'timestamp': '2020-12-01 08:48:58.108Z'            
    //       }
    //     ]  
    //   });
  }, []);

  console.log(loginUser); 

  return !loginUser ? <Loader /> : (
    <>
      <h1>Analytics page!</h1> 
    </>
  );
}

export default Analytics;
