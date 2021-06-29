import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingOne() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
            .get('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            }, [])
    })

    return (
        <div>
            {posts.map(post => (
                <option value={post.id}>{post.nama}</option>
            ))}
        </div>
    )
}

export default DataFetchingOne
