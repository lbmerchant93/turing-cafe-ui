import React from 'react';
import './ResyCard.css';

const ResyCard = (props) => {

  const { id, name, date, time, number } = props.reservation

    return (
      <article className={`resy-card${id} card`}>
        <h2 className='resy-name'>{name}</h2>
        <h3 className='resy-date'>{date}</h3>
        <h3 className='resy-time'>{time}</h3>
        <h3 className='resy-num-guests'>Number of guests: {number}</h3>
        <button className='cancel-btn' onClick={() => props.deleteResy(id)}>Cancel</button>
      </article>
  )
}

export default ResyCard;
