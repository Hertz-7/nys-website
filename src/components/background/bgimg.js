
import React from 'react';
import './bg.css';
import 'bootstrap/dist/css/bootstrap.css';
function App(props) {
  return (
        <div className="bodyimg" style={{backgroundImage : `url(${props.bg})`}} >
        </div>

  );
}

export default App;

