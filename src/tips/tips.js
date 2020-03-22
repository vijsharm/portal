import React, {useState, useEffect} from 'react';
import './tips.scss';
import Entertainment from '../common/entertainment/entertainment';
import { Tabs, Tab } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Tips = (props) =>{
    const [activeKey, setActiveKey] = useState('prime');
    const [urlTab, setUrlTab] = useState('');
    useEffect(() => {
        const params = new URLSearchParams(props.location.search);
        const tab = params.get('tab');
        if (tab && tab !== urlTab) {
            setActiveKey(tab);
            setUrlTab(tab);
        }
    })
    return (
        <div className="mt-30 tips">
            <div className="row">
            <Tabs defaultActiveKey="Prime Videos" onSelect={k => setActiveKey(k)} activeKey={activeKey}>
                <Tab eventKey='Prime Videos' title="Amazon Prime">
                    <Entertainment heading="Prime Videos" />
                </Tab>
                <Tab eventKey="Netflix" title="Netflix">
                    <Entertainment heading="Netflix" />
                </Tab>
                <Tab eventKey="Other Apps" title="Other Apps">
                    <Entertainment heading="Other Apps" />
                </Tab>
                <Tab eventKey="Books" title="Books">
                    <Entertainment heading="Books" />
                </Tab>
            </Tabs>
            </div>
        </div>
    )
}

export default withRouter(Tips);