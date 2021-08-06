import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {

    constructor(props) {
        super(props)

        this.state = {
             posts : [],
             error: ""
        }
    }

    componentDidMount(){
        console.log("Component mounted !!");
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( res => {
            console.log(res);
            this.setState({
                posts: res.data
            })
        })
        .catch( err => {
            console.log(err);
            this.setState({
                error : 'Something Wrong!!'
            })
        })

    }

    render() {
        const {posts,error} = this.state
        return (
            <div>
                <h1> Post list ...</h1>
                {
                    posts.length ?
                    posts.map(post => <div key={post.id}>{post.title}</div>) : null
                }
                {
                    error ? <div>{error} </div>: null
                }
            </div>
        )
    }
}

export default PostList
