import React from 'react';

const CheckBox = ({ checked, children }) => {
  return (
    <div>
      <label>
          <input type="checkbox"/>
          <div>{checked ? '체크됨' : '체크안됨'}</div>
          <span>{children}</span>
      </label>
    </div>
  );
}

export default CheckBox;