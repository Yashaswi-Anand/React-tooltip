import React, { useState } from 'react'
import './App.css';


function Tooltip(props) {

    const {setHoverPosition} = props;
    const [isHover, setIsHover] = useState(false);

  return (
    <>
      <div className='my-tooltip'>
        <h3 id='hover_over_me' onMouseOver={() => setIsHover(true)()} onMouseOut={() => setIsHover(false)()}> Hover over me! </h3>
        {isHover && <span id={setHoverPosition} className='tooltiptext'>Thanks for hovering...</span>}
      </div>
    </>
  )
}

export default Tooltip





