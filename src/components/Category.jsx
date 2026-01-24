import React, { useContext } from 'react'
import Wrapper from './Wrapper'
import { useNewsContext } from '../../context/NewsContext';

const Category = ({ className }) => {

    const {setNews,fetchNews} = useNewsContext();

    const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

    const handleClick = async (e) => {
        console.log(e.target.value);
        const data = await fetchNews(`/everything?q=${e.target.value}`);
        setNews(data.articles)
    }

    return (
        <div className={`${className}`}>
            <Wrapper>
                <div className={`max-w-full overflow-x-auto w-fit m-auto flex gap-5 scrollbar-none ${className}`}>
                    {
                        categories.map((category) => {
                            return <button onClick={handleClick} value={category} key={category} className="btn btn-primary">{category}</button>
                        })
                    }
                </div>
            </Wrapper>
        </div>
    )
}

export default Category