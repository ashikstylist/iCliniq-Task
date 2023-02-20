import React from 'react';

const BannerMenu = () => {
    return (
        <div className='banner-menu'>
            <span className='banner-menu-active'>All</span>
            <span>Anxiety</span>
            <span>Depression</span>
            <span>Delayed Period</span>
            <span>Headache</span>
            <span>Stress</span>
        </div>
    )
}

function Banner(props) {
  return (
    <>
    <BannerMenu />
    <div className='banner'>
        {props.banner_props && props.banner_props()}
        <div className='banner-search'>
            <select >
                <option disabled value="">Select an option ---</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
            <input type='text' placeholder='Search' />
            <button>Search</button>
        </div>
    </div>
    </>
  )
}

export default Banner