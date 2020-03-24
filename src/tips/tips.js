import React, {useState, useEffect} from 'react';
import './tips.scss';
import Entertainment from '../common/entertainment/entertainment';
import { Tabs, Tab } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { OtherVideosList, BooksList, NetflixVideosList, PrimeVideosList } from 'utils/data';
import Books from '../common/books/books';

const Tips = (props) =>{
    const [activeKey, setActiveKey] = useState('Prime Videos');
    useEffect(() => {
        const params = new URLSearchParams(props.location.search);
        const tab = params.get('tab');
        if (tab) {
            setActiveKey(tab);
        }
    }, [props.location.search]);
    return (
        <div className="mt-30 tips">
            <div className="row">
            <Tabs defaultActiveKey="Prime Videos" onSelect={k => setActiveKey(k)} activeKey={activeKey}>
                <Tab eventKey='Prime Videos' title="Amazon Prime">
                    <Entertainment heading="Prime Videos" data={PrimeVideosList()} />
                </Tab>
                <Tab eventKey="Netflix" title="Netflix">
                    <Entertainment heading="Netflix" data={NetflixVideosList()} />
                </Tab>
                <Tab eventKey="Other Apps" title="Other Apps">
                    <Entertainment heading="Other Apps" data={OtherVideosList()} />
                </Tab>
                <Tab eventKey="Books" title="Books">
                    <Books heading="Books" data={BooksList()}/>
                </Tab>
            </Tabs>
            </div>
        </div>
    )
}

export default withRouter(Tips);