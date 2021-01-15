import React, {useEffect,useState} from 'react'
import {Layout} from './components/Layout'
import axios from 'axios'
import {Spinner} from '@geist-ui/react'

function App() {
  const url = `https://webit-news-search.p.rapidapi.com/trending?language=en`
  const [data,setData] = useState();
  
  useEffect(()=>{
    axios.get(url,{
      headers:{
      "x-rapidapi-key": "f6bbd49316mshbceb0b3946e1234p16296ejsn5a8fdb44abd9",
	    "x-rapidapi-host": "webit-news-search.p.rapidapi.com",
	    "useQueryString": true
    }}).then(res=>{
      setData(res.data.data.results)
    }).catch(err=>{
      alert(err)
    })  
  },[])

  return (

    data ?
    <Layout data={data} />
    :
    <Spinner size="large" />

  );
}

export default App;
