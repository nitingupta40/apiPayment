import React, { Fragment, useState } from 'react';
import axios from 'axios';

const Configuration = () => {
  const [configuration, setConfiguration] = useState(null);

  const getConfiguration = async e => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      };
      const res = await axios.get('/api/configurations/v2', config);
      setConfiguration(res.data);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1 className='large text-primary'>Configuration</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Get Configuration
      </p>
      <button variant='primary' onClick={e => getConfiguration(e)}>
        Get Configuration
      </button>
      {configuration && (
        <div>
          <p>description: {configuration.description}</p>
          <p>locales: {configuration.locales}</p>
          <p>maximumAmount amount: {configuration.maximumAmount.amount}</p>
          <p>maximumAmount currency:{configuration.maximumAmount.currency}</p>
          <p>minimumAmount amount: {configuration.minimumAmount.amount}</p>
          <p>minimumAmount currency: {configuration.minimumAmount.currency}</p>
          <p>numberOfPayments: {configuration.numberOfPayments}</p>
          <p>promotionUrl: {configuration.promotionUrl}</p>
          <p>type: {configuration.type}</p>
        </div>
      )}
    </div>
  );
};

export default Configuration;
