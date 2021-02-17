import React from 'react';
import './ResyCard.css';

const ResyCard = (props) => {

    return (
      <div className='resy-card'>
        <h2 className='resy-name'>name</h2>
        <h3 className='resy-date'>date</h3>
        <h3 className='resy-time'>time</h3>
        <h3 className='resy-num-guests'>Number of guests: __ </h3>
        <button className='cancel-btn'>Cancel</button>
      </div>
  )
}

export default ResyCard;
