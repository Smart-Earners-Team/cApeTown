import React, { useState } from 'react';
import styled from 'styled-components';

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
  textarea {
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
    font-size: 2rem;
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
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [twtUser, setTwtUser] = useState('');
  const [twtSize, setTwtSize] = useState('');
  const [twtLink, setTwtLink] = useState('');
  return (
    <>
      <FormStyle>
        <div className="form-group">
          <label htmlFor="name">
            What Is Your Name?
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="twitter-user">
            Are You An Active Twitter User?
            <select
              id="twitter-user"
              name="twitter-user"
              value={twtUser}
              onChange={(e) => setTwtUser(e.target.value)}
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
              name="twitter-size"
              value={twtSize}
              onChange={(e) => setTwtSize(e.target.value)}
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
              name="link"
              value={twtLink}
              onChange={(e) => setTwtLink(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </FormStyle>
    </>
  );
}
