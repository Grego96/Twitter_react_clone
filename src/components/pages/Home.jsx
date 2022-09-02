import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    async function getHome(){
      const result = await axios({
        method: "get",
        baseURL: `http://localhost:${process.env.REACT_APP_API_PORT}`,
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN_TEST}` 
        }
        
      })
      console.log(result);
      return result
    }
    getHome()
  }, [])

  return (
    <div>Home</div>
  )
}
