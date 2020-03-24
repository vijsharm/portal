import React from 'react';
import BookImg from '../../assets/images/books/book.jpg';
import './books.scss'

const Books = (props)=> {
    const titlesList = props.data.map((item, index) => {
    return <div>
        <div className="row">
            <div className="col-md-1 col-xs-2"><img src={item.img} height="100" width="60"></img></div>
            <div className="col-md-11 col-xs-10">
            <span style={{ fontSize: "18px", fontWeight: 'bold', textDecoration:'underline', paddingLeft : '15px' }}>{item.title}</span>
            <div>{item.description}</div>
            </div>
            </div><br/> 
        </div>
    })


    return (
        <div className="books">
            <br/>
            <div className="heading">
                <img src={BookImg}></img> <span className="quote"> ~ “A reader lives a thousand lives before he dies . . . The man who never reads lives only one.” – George R.R. Martin</span>
            </div>
            <hr/>
            <div className="bodySection col-sm-12">
                <h4>Bestsellers of 2020  - </h4>
                <div>
                    <div style={{ marginTop: "20px" }}>
                        {titlesList}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Books;