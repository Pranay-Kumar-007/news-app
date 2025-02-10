import load from "D:/Platform/news-app/src/loader.gif"
import React from 'react'

const Spinner = () => {
    return (
      <div className='container text-center'>
        <img src={load} alt="loading" />
      </div>
    )
  }

export default Spinner
