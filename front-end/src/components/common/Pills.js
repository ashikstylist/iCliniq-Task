import React from 'react';

function Pills(props) {
  return (
    <div  style={(props.arr).toLowerCase() === 'more' ? {backgroundColor: '#17a2b8'} : {}} className='pills'>
        {props.arr}{(props.arr).toLowerCase() === 'more' && '...'}
    </div>
  )
}

export default Pills