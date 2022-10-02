import { useState } from 'react';
import './App.css';
import Tooltip from './Tooltip';

function App() {
  const [position, setPosition] = useState('top');
  return (
    <div className="App">
      <main className='App-header'>
        <h2> React Tooltip </h2>
        {/* position buttons */}
        <div className='row d-flex justify-content-between w-75 mt-5 ms-5'>
            <div className='col-4'><h3>Position:</h3></div>
            <div className='col-1'><button className={position === 'left' ? 'active-button' : 'inactive-button'} onClick={() => setPosition('left')}><h4>Left</h4></button></div>
            <div className='col-1'><button className={position === 'right' ? 'active-button' : 'inactive-button'} onClick={() => setPosition('right')}><h4>Right</h4></button></div>
            <div className='col-1'><button className={position === 'top' ? 'active-button' : 'inactive-button'} onClick={() => setPosition('top')}><h4>Top</h4></button></div>
            <div className='col-1'><button className={position === 'bottom' ? 'active-button' : 'inactive-button'} onClick={() => setPosition('bottom')}><h4>Bottom</h4></button></div>
        </div>
        {/* Tooltip Components */}
        <Tooltip setHoverPosition={position}/>
      </main>
    </div>
  );
}

export default App;
