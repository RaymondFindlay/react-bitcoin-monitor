import React, { useEffect, useState } from 'react';
import BitcoinMonitor from './components/BitcoinMonitor'
import './App.css';

const App = () => {
  const [coinData, setCoinData] = useState({});
  const [fetchingError, setFetchingError] = useState("");

  const fetchCoinData = async () => {
    const result = await fetch("https://api.coindesk.com/v1/bpi/historical/close.json/");

    result.json()
      .then(res => {
        setCoinData(res);
      }).catch(err => {
        console.log(err);
        setFetchingError(err);
      });
  };

  useEffect(() => {
    fetchCoinData();
  });

  return (
    <div>
      {
        fetchingError
          ?
          <div>
            {fetchingError.toLocaleString()}
          </div>
          :
          <div style={{ height: 400, width: 900 }}>
            <BitcoinMonitor coinData={coinData} />
          </div>
      }
    </div>
  );
}

export default App;
