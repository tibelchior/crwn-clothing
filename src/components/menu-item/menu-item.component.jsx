import React from 'react';
import './menu-item.styles.scss'

const MenuItem = ({title,imageUrl,size}) => {
  size = size ? size : '';
  return (
  <div className={`menu-item ${size}`}>
    <div className="background-image" style={{
    backgroundImage: `url(${imageUrl})`
  }} ></div>
    <div className="content">
        <h2 className="title">{title}</h2>
        <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
)};

export default MenuItem;