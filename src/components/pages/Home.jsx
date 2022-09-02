import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    async function getHome(){
      const result = await axios({
        method: "get",
        baseURL: "http://localhost:8080",
        headers: {
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiS2VueW9uNiIsImlkIjoiNjMxMTQ2YmE5OGJiOGVkN2IyNTYzZmMxIiwiaWF0IjoxNjYyMTM5MDM4fQ.pgbrJqczAS3VLRwWi2ew_cy46rzzvh502GkXq2x_364` 
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
