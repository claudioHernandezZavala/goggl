import React ,{useEffect,useState}from 'react';
import {useDebounce} from 'use-debounce'
import {default as Links} from './Links'
import { useResultContext } from '../contexts/ResultContextProvider';
import { useLocation } from "react-router-dom";

const Search = () => {
  const [text, setText] = useState('Elon Musk')
  const {setSearchTerm,getResults} = useResultContext();
  const [debouncedValue] =  useDebounce(text,300);
  const location = useLocation();

  useEffect(() => {
 
  
    return () => {
      if(debouncedValue){
        getResults(`/websearch`, "Javascript", JSON.stringify({ text: debouncedValue, safesearch: "off",
        timelimit: "",
        region: "wt-wt",
        max_results: 20, }));

        
      }
    }
  }, [debouncedValue])
  useEffect(() => {
    setSearchTerm(debouncedValue);


  }, [location.pathname, setSearchTerm]);
  
  return (
    <div className='relative sm:ml-48 md:ml-50 sm:-mt-10 mt-3  w-100'>
      <input
       value={text}
       type='text'
       className='sm:w-96  w-100 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg '
      placeholder='Search Goggl'
      onChange={(e)=>setText(e.target.value)}
      />
      {text&&(
        <button type='button' className='absolute top-1.5 right-4 text-2xl text-gray-500' onClick={()=>setText("")}>
          x
        </button>


      )}
      <Links/>
      
    </div>
  )
}

export default Search
