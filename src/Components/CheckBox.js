import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

const CheckBox = ({ checked, children, ...rest }) => {
  return (
    <div>
      <label>
          <input type="checkbox" checked={checked} {...rest}/>
          <div>{checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}</div>
          <span>{children}</span>
      </label>
    </div>
  );
}

export default CheckBox;