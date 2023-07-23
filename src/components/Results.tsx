import { useEffect } from 'react'
import { useResultContext } from './contexts/ResultContextProvider'
import { Loading } from './Loading';
import { useLocation } from 'react-router-dom';

type searchResult = {
    link: string,
    title: string,
    image?:{
        thumbnailLink:string,
        contextLink:string
    }
}
export const Results = () => {

    const {results, getResults, isLoading, searchTerm} = useResultContext();
    const location = useLocation();

    useEffect(() => {
        if(location.pathname.includes("images"))
            getResults(searchTerm, "image")
        else
            getResults(searchTerm)
    }, [searchTerm, location.pathname])

    if(isLoading)
        return <Loading />

    switch (location.pathname) {
        case "/":
        case "/search":
            return (
                <div className='flex flex-wrap justify-between space-y-6 sm:px-56 mt-5'>
                    {
                        results?.items?.map(({link, title}:searchResult, index:number) => (
                            <div key={index} className='w-full'>
                                <a href={link} target='_blank' rel='noreferrer'>
                                    <p className='text-sm'>
                                        {link.length > 30 ? link.substring(0,30) : link}
                                    </p>
                                    <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                                        {title}
                                    </p>
                                </a>
                            </div>
                        ))
                    }
                </div>
            );
        case "/images":
            return (
                <div className="flex flex-wrap justify-center items-center">
                    {
                        results?.items?.map(({ link, title, image }:searchResult, index:number) => (
                            <a href={image?.contextLink} target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-5">
                                <img src={link} alt={title} loading="lazy" className='w-36 h-40'/>
                                <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
                            </a>
                        ))
                    }
                </div>
            )
    
        default:
            return (
                <div className='items-center justify-left flex flex-wrap h-full m-x-5 text-lg dark:text-white'>No search possible</div>
            );
        }
}
