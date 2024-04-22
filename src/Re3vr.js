import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const Re3vr = ({ darkmode }) => {
  const [apiUrl, setApiUrl] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(apiUrl);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  const handleInputChange = (event) => {
    setApiUrl(event.target.value);
  };

  const renderItem = (item) => {
    return Object.entries(item).map(([key, value], index) => (
      <div key={index}>
        {typeof value === 'string' && value.startsWith('http') ? (
          <img src={value} alt="Img" style={{ maxWidth: '40%' }} />
        ) : (
          <div>
            <strong>{key}: </strong> {typeof value === 'object' ? JSON.stringify(value) : value}
          </div>
        )}
      </div>
    ));
  };

  const renderData = () => {
    if (!data || data.length === 0) return null;

    return (
      <div className={`list-container ${darkmode ? 'darkmode' : 'lightmode'}`}>
        <h2>Data:</h2>
        <ul>
          {Array.isArray(data) ? (
            data.map((item, index) => (
              <li key={index}>
                {renderItem(item)}
              </li>
            ))
          ) : (
            <li>
              {renderItem(data)}
            </li>
          )}
        </ul>
      </div>
    );
  };

  return (
    <>
      <div className={`container ${darkmode ? 'darkmode' : 'lightmode'}`}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter API URL"
            value={apiUrl}
            onChange={handleInputChange}
          />
          <div>
            <p> </p>
          </div>
          <button onClick={fetchData} disabled={!apiUrl || loading}>
            {loading ? '..fetching' : 'Fetch Data'}
          </button>
        </div>
      </div>
      {renderData()}
    </>
  );
};

export default Re3vr;