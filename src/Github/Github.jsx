import React ,{useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'
import (useLoaderData)

function Github() {
    const data = useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers:{data.followers}
    <p className='text-center m-4 bg-gray-600 text-white p-4 text-xl'>Number of followers and profile picture , fetching and displaying from Github</p>
    <img src={data.avatar_url} alt='Git picture' width={300}/>
    
    
    </div>
  )
}

export default Github

export const githubInfoLoader =async()=>{
   const response= await fetch('https://api.github.com/users/faria100')
   return response.json()
}