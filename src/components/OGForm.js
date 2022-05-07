import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
// import axios from 'axios';
// import Message from './Error';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  .textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  select {
    font-size: 1.5rem;
    padding: 10px 35px;
    min-width: 300px;
    margin: 0.7rem;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    .form-group {
      width: 100%;
      margin-bottom: 2rem;
    }
    label {
      font-size: 1.4rem;
    }
    input,
    textarea {
      width: 100%;
      font-size: 1rem;
      padding: 1.2rem;
      color: var(--gray-1);
      background-color: var(--deep-dark);
      outline: none;
      border: none;
      border-radius: 8px;
      margin-top: 1rem;
    }
  }
`;

export default function OGForm() {
  const [data, setData] = useState({
    name: '',
    email: '',
    twtLink: '',
    twtSize: '<250',
    twtUser: 'No',
  });

  const { name, email, twtSize, twtLink, twtUser } = data;

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    try {
      const response = await fetch('/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          [name, twtUser, twtSize, twtLink, email, new Date().toLocaleString()],
        ]),
      });
      await response.json();
      history.push('/ogs');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <FormStyle onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            What Is Your Name?
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="twitter-user">
            Are You An Active Twitter User?
            <select
              id="twitter-user"
              name="twtUser"
              required
              value={twtUser}
              onChange={handleChange}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="twitter-size">
            Cool, How Many Twitter Follower Do You Have?
            <select
              id="twitter-size"
              name="twtSize"
              required
              value={twtSize}
              onChange={handleChange}
            >
              <option value="<250">Below 250</option>
              <option value="<500">Below 500</option>
              <option value="<1000">Below 1000</option>
              <option value="<5000">Below 5000</option>
              <option value=">5000">Above 5000</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Great, Can You Share A Link To Your Twitter Profile?
            <input
              type="link"
              id="link"
              name="twtLink"
              required
              value={twtLink}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Nice, Please Provide An Email Address You Check Often...
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </FormStyle>
    </>
  );
}
