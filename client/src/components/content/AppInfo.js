import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function AppInfo() {

  useEffect(()=> {
    Axios.get('http://localhost:3306/api/get').then((response)=> {
      setAppInfo(response.data)
    })
  }, [])

  const [appInfo, setAppInfo] = useState([]);
  
  return (
    <div id="infoContainer">
      {appInfo.map((value) => {
        return <h3 key={value.Application_Number}>Application Number: {value.Application_Number} | Amount: {value.Amount} {value.OP_No}</h3>
      })}
    </div>
  );
}

export default AppInfo;
