import React from 'react';
import Share from '../assets/images/blog/share.gif';
import './blog.scss'
const Blog = () =>{
    return <div className="row">
        <div className="col-md-6">
        <br/>
        <h5 className="heading">Inspire others with your experience</h5>
        <p>Let the world know your experience. Share your story of self-isolation at home like the things you did for first time, things you learnt etc. We'll publish it on our page with your pic. If you want to keep it anonymous then do let us know in email. </p>
        <h5>WRITE TO US AT:</h5>
        <p><a href="mailto:sharefeedbacks@gmail.com">sharefeedbacks@gmail.com</a></p>
        </div>
        <div className="col-md-6"> <br/> <img src={Share} style={{maxWidth: '100%'}}></img></div>
       
        
        </div>
}

export default Blog;