import React from 'react'

function Card(props) {
  const {headerImage, bodyContent, icon, drName} = props;
  return (
    <div className='card'>
        <img src={headerImage} />
        <p>{bodyContent}</p>
        <div>
            <img src={icon} />
            <div>
                <span>{drName}</span>
                <div>{props.dateInfo && props.dateInfo}</div>
            </div>
        </div>
    </div>
  )
}

export default Card