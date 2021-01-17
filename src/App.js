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
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
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
    <Layout  data={data} />
    :
    <Spinner size="large" />

  );
}

export default App;
