import { useEffect, useState } from "react"
import Wrapper from "./Wrapper"
import { useNewsContext } from "../../context/NewsContext";

const Navbar = ({ className }) => {
    const {setNews,fetchNews} = useNewsContext();

    let timer = null;
    const searchNews = (e) => {
        if(!e.target.value) return null;

        clearTimeout(timer);

        timer = setTimeout(async () => {
            const data = await fetchNews(`/everything?q=${e.target.value}`);
            setNews(data.articles);
        },1000)

    }

    return (
        <div className={`${className}`}>
            <Wrapper>
                <div className="bg-gradient-to-r from-red-400 to-blue-400 navbar shadow-sm">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">News App</a>
                    </div>
                    
                    <input onChange={searchNews} type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    
                </div>
            </Wrapper>
        </div>
    )
}

export default Navbar