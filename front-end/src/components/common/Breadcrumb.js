import React from 'react';

function Breadcrumb(props) {
    const {content} = props;
  return (
    <div className='breadcrumb'>
       <span>iCliniq / </span> 
       <span>{content} </span> 
    </div>
  )
}

export default Breadcrumb