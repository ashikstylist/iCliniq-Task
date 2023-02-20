import React from 'react';

function SideHeader(props) {
  const {icon, heading} = props;

  return (
    <div className='side-header'>
        <img src={icon} />
        <span>{heading}</span>
    </div>
  )
}

export default SideHeader