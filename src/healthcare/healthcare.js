import React from 'react';
import Handshake from '../assets/images/healthcare/healthcare.gif';
import Success from '../assets/images/healthcare/success.gif';
import Stopwatch from './stopwatch';
const Healthcare = () =>{
    return <div className="healthcare container">
        <br/>
        <div className="row">
        <div className="col-md-12 hand-img">
        <img src={Handshake}></img>
        </div>
        </div>
        <div className="row">
            
            <div>
            <br/><br/>
            <h3>Want to check your strength of your lungs?</h3>
        <p>Here's the solution - Just start this timer and hold on your breath.</p>
        <Stopwatch/>
        <br/>
        <h3>Were you able to hold on for more than 10 seconds?</h3><br/>
        <div className="card">
        <h4><img src={Success} height="150" width="150"></img><span>GREAT!! Your lungs are strong enough.</span></h4>
           </div><br/> </div>
        </div>
        </div>

}
export default Healthcare;