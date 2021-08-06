import React, {useState,useEffect} from 'react'
import axios from 'axios'

function DataFetchById() {

    const[post,setPost] = useState({})
    const[id,setId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            setPost(res.data)
        })
        return () => {
            console.log("Clean up code !!")
        }
    }, [id])
    return (
        <div>
            <input type= "text" value= {id} onChange= {e => setId(e.target.value)}/>
            <div>
                {post.title}
            </div>
        </div>
    )
}

export default DataFetchById
