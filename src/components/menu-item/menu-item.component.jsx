import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

// the ${matchUrl} in the history.push linking method is there to append the existing URL string to the destination string – so you don't need to pass the location of this component to itself in order for the link to work correctly. it should work regardless.

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div 
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}    
  >
    <div className = 'background-image' 
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)

export default withRouter(MenuItem);