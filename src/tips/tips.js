import React from 'react';
import './tips.scss';
import Entertainment from '../common/entertainment/entertainment';
import { Tabs, Tab } from 'react-bootstrap';

const Tips = () =>{
    return (
        <div className="mt-30 tips">
            <div className="row">
            <Tabs defaultActiveKey="prime" id="uncontrolled-tab-example">
                <Tab eventKey="prime" title="Amazon Prime">
                    <Entertainment heading="Prime Videos" />
                </Tab>
                <Tab eventKey="netflix" title="Netflix">
                    <Entertainment heading="Netflix" />
                </Tab>
                <Tab eventKey="others" title="Other Apps">
                    <Entertainment heading="Other Apps" />
                </Tab>
            </Tabs>
            </div>
        </div>
    )
}

export default Tips;