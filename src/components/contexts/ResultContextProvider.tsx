import React, { createContext, useContext, useState } from 'react'

const ResultContext = createContext({});
// const baseURL = "https://google-search74.p.rapidapi.com"
const baseURL = `https://customsearch.googleapis.com/customsearch/v1?cx=${process.env.REACT_APP_GOOGLE_SEARCH_ENGINE_CX}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;

type ResultContextProviderProps = {
    children: React.ReactNode
}


export const ResultContextProvider = ({ children }: ResultContextProviderProps) => {

    const [results, setResults] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState();
    const [page, setPage] = useState(1);


    const getResults = async (searchValue:string, type:"image"|"video"|"text"="text") => {

        let data = {};
        
        if(searchValue) {
            setIsLoading(true);
        
            const response = await fetch(`${baseURL}&q=${searchValue}&start=${page*10-9}${type === "image" ? '&searchType=image' : ''}`,
            {
                method: 'GET'
            });

            data = await response.json();
        }
        
        setResults(data);

        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value={{results, getResults, isLoading, searchTerm, setSearchTerm, setPage, page}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext:Function = () => useContext(ResultContext);
