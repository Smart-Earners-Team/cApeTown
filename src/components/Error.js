import React from 'react';

const Message = ({ variant, children }) => (
  <div className={`alert ${variant}`}> {children} </div>
);

Message.defaultProps = {
  variant: 'alert-info',
};

export default Message;
