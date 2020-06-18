import React, { Fragment, useState } from 'react';
import axios from 'axios';

const Orders = () => {
  const [formData, setFormData] = useState({
    totalAmount: '',
    givenNames: '',
    surname: '',
    email: ''
  });
  const [orderDetails, setOrderDetails] = useState(null);
  const { totalAmount, givenNames, surname, email } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const newOrder = {
      totalAmount,
      consumer: {
        givenNames,
        surname,
        email
      }
    };

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      };
      const body = JSON.stringify(newOrder);
      const res = await axios.post('api/orders/v2', body, config);
      setOrderDetails(res.data);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }

    console.log(newOrder);
  };
  return (
    <Fragment>
      <h1 className='large text-primary'>Order</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Create An Order
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='totalAmount'
            name='totalAmount'
            value={totalAmount}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='givenNames'
            name='givenNames'
            value={givenNames}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='surname'
            name='surname'
            value={surname}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='email'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Order' />

        {orderDetails && (
          <div>
            <p>token: {orderDetails.token}</p>
            <p>expires: {orderDetails.expires}</p>
            <p>checkoutUrl: {orderDetails.checkoutUrl}</p>
          </div>
        )}
      </form>
    </Fragment>
  );
};

export default Orders;
