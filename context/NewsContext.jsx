import { Children, createContext, useContext, useState } from "react";
import api from "../src/config/axios";

const NewsContext = createContext();

const NewsContextProvider = ({children}) => {
    const [news,setNews] = useState([]);
    const [loading,setLoading] = useState(false)
    
    const fetchNews = async (url='/everything?q=india') => {

        setLoading(true);
        
        try {   
            const response = await api.get(
              `${url}&apiKey=${import.meta.env.VITE_API_KEY}`
            );          
            setLoading(false);
            return response.data;
        }catch(error) {
            setLoading(false);
            console.log(error);
        }
    }
    
    const value = {
        news,
        setNews,
        fetchNews,
        loading
    }


    return (
        <NewsContext.Provider value={value}>
            {children}
        </NewsContext.Provider>
    )
}

const useNewsContext = () => {
    return useContext(NewsContext);
}

export {NewsContextProvider,useNewsContext}