import React, {useState} from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect } from 'react'

const News = (props)=> {
  News.defaultProps = {
    category: "general"
  }
  News.propTypes = {
    category: PropTypes.string
  }

  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(false)
  const [page,setPage] = useState(1)
  const [total,setTotal] = useState(1)

  const Updatenews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8c24440a9b4d4153b226d12745d0d6bd`
    let data = await fetch(url)
    let parseData = await data.json()
    console.log(parseData)
    setArticles(parseData.articles)
    setTotal(parseData.totalResults)
  }

  useEffect(()=>{
    Updatenews()
  })

  const handleNextClick =  async () => {
    if (page + 1 > Math.ceil(total / 20)) { }
    else {
      console.log('Next Clicked')
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8c24440a9b4d4153b226d12745d0d6bd&page=${page + 1}`
      setLoading(true)
      let data = await fetch(url)
      let parseData = await data.json()
      console.log(parseData)
      setArticles(parseData.articles)
      setTotal(parseData.totalResults)
      setPage(page + 1)
      setLoading(false)
    }
  }

  const handlePrevClick = async () => {
    console.log('Prev Clicked')
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8c24440a9b4d4153b226d12745d0d6bd&page=${page === 1 ? 1 : page - 1}`
    setLoading(true)
    let data = await fetch(url)
    let parseData = await data.json()
    console.log(parseData)
    setArticles(parseData.articles)
    setTotal(parseData.totalResults)
    setPage(page === 1 ? 1 : page - 1)
    setLoading(false)
  }

  const fetchMoreData = async () => {
    setPage(page + 1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8c24440a9b4d4153b226d12745d0d6bd&page=${page}`
      setLoading(true)
      let data = await fetch(url)
      let parseData = await data.json()
      console.log(parseData)
      setArticles(articles.concat(parseData.articles))
      setTotal(parseData.totalResults)
      setLoading(false)
  }

    return (
      <>
        <h1 style={{marginTop: "90px"}}>News Headlines</h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length<=total}
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>That's it for today</b>
            </p>
          }
        >
          <div className='container my-3'>
          <div className="row">
            {articles.map((ele) => {
              return <div className="col-md-4" key={ele.url}>
                <NewsItem title={ele.title} description={ele.description} imageUrl={ele.urlToImage} 
                newsUrl={ele.url} author={ele.author} date={ele.publishedAt.slice(0, 10)} />
              </div>
            })}
          </div>
          </div>
          </InfiniteScroll>

          <div className=" container d-flex justify-content-between">
            <button href='/' disabled={page <= 1} className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
            <button href='/' disabled={page + 1 > Math.ceil(total / 20)} className="btn btn-dark" onClick={handleNextClick}> Next &rarr;</button>
          </div>
      </>
    )
  }

export default News
