import React from 'react';
import { Link } from 'react-router-dom';
import './NavItem.css';

export default (props) => {
  return (
    <Link to={props.href} className="item">
      <i className={props.icon}></i> {props.text}
    </Link>
  );
}
