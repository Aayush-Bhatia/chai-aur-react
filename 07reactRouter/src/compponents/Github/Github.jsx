import React, { useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/Aayush-Bhatia')
    //     .then(res => res.json())
    //     .then(data => 
    //         {console.log(data)
    //          setData(data)
    //         })
    // },[])
    return (
        <div className='bg-gray-700 text-white text-3xl text-center p-4 m-4'>Github followers: {data.followers}
        <img src={data.avatar_url} alt='Git Picture'width={300}></img>
          </div>
    )
}

export default Github
export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/Aayush-Bhatia')
    return res.json()
}
