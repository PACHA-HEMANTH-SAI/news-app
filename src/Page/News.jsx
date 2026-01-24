import React, { useEffect } from 'react'
import Wrapper from '../components/Wrapper'
import { useNewsContext } from '../../context/NewsContext'
import Loader from '../components/Loader';

const News = ({className}) => {

    const {news,setNews,fetchNews,loading} = useNewsContext();
    console.log(loading);
    
    useEffect(() => {
        ( async () => {
            const data = await fetchNews();
            setNews(data.articles);
        })()
    },[]) // runs only once after jsx is initially rendered 

    if(loading) return <Loader />

    return (
        <Wrapper>
            <div className={`grid grid-cols-4 gap-6 ${className}`}>
                {
                    news.map((newsDetails,index) => {
                        if(!newsDetails.urlToImage) return null;
                        return (
                            <NewsCard key={index} details={newsDetails}/>
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}

const NewsCard = ({details}) => {
    // console.log(details)
    return (
        <div className="card bg-base-200 shadow-sm">
            <figure>
                <img
                    className='aspect-video w-full object-contain'
                    src={details?.urlToImage}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title line-clamp-2">{details.title}</h2>
                <p className='line-clamp-3'>{details.description}</p>
                <div className="card-actions justify-end mt-4">
                    <button onClick={() => window.open(details.url)} className="btn badge-outline">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default News