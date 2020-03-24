import React, {useState} from 'react';
import Handshake from '../assets/images/healthcare/healthcare.gif';
import Success from '../assets/images/healthcare/success.gif';
import Sad from '../assets/images/healthcare/sad.gif';
import Stopwatch from './stopwatch';
const Healthcare = () =>{
    const [showCard, setShowCard] = useState('')
    const showResult=(showCard)=>{
        setShowCard(showCard)
    }
    return <div className="healthcare">
        <br/>
        <div className="row">
        <div className="col-md-12 hand-img col-xs-12">
        <img src={Handshake} style={{maxWidth: '100%'}}></img>
        </div>
        </div>
        <div className="row">   
            <div style={{margin: '0 auto', textAlign: 'center'}} className="col-xs-12">
            <br/><br/>
            <h3>Want to check your strength of your lungs?</h3>
            <p>Here's the solution - Just start this timer and hold on your breath.</p>
            <div className="">
            <div className="col-md-12 col-xs-12"><Stopwatch showCard={showResult}/></div>
                {showCard==='pass' && <div className="card pass col-md-12 col-xs-12">
                    <h4><img src={Success} height="150" width="150"></img><span>GREAT!! Your lungs are strong enough.</span></h4>
                </div>
                }       
                {showCard==='fail' && <div className="card fail col-md-12 col-xs-12">
                <h4><img src={Sad} height="200" width="200"></img><span>Need to get up & work out</span></h4>
                </div>}
           </div>
           <br/> </div>
        </div>
        </div>

}
export default Healthcare;