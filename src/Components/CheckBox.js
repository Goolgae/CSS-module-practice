import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import styles from './CheckBox.module.css';

const CheckBox = ({ checked, children, ...rest }) => {
  return (
    <div className={styles.checkbox}>
      <label>
          <input type="checkbox" checked={checked} {...rest}/>
          <div className={styles.icon}>{checked ? <MdCheckBox className={styles.checked}/> : <MdCheckBoxOutlineBlank />}</div>
          <span>{children}</span>
      </label>
    </div>
  );
}

export default CheckBox;