import React from 'react'

const NewsItem = (props)=> {
    return (
      <div className='container my-3'>
        <div className="card" >
        <img src={!props.imageUrl?"https://www.thestreet.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MjA2NDUxMjE3ODYwMTQyNzk4/20240515socialsecurity.jpg":props.imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text"><small className="text-body-secondary">Written by {props.author} on {props.date}</small></p>
            <a href={props.newsUrl} className="btn btn-primary">Go to Source</a>
        </div>
</div>
      </div>
    )
  }

export default NewsItem
