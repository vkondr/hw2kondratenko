import {useEffect, useState} from "react";
import axios from "axios";

import AddPost from './AddPost';
import PostsList from "./PostsList";
import * as React from "react";
import LoadingIndicator from "./LoadingIndicator";

function App() {

    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const client = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/posts"
    });

    const getPosts = async () => {
        setIsLoading(true);
        client.get('?_limit=10').then((response) => {
            setPosts(response.data);
            setIsLoading(false);
        })
    }

    useEffect(() => {
        getPosts()
    }, []);

    const addPost = async (title, body) => {
        const response = await client.post('', {title, body});
        setPosts((prevPosts) => [response.data, ...prevPosts])
    }

    const editPost = async (id, title, body) => {
        const response = await client.put(`${id}`, {title, body})
        setPosts((prevPosts) => [response.data, ...prevPosts.filter((post => {
            return post.id !== id;
        }))])
    }

    const deletePost = (id) => {
        client.delete(`${id}`);
        setPosts(
            posts.filter((post => {
                return post.id !== id;
            }))
        )
    }

    return (
        <div className="app">
            <h2>Add new Post</h2>
            <AddPost addPost={addPost}/>
            <h2>All Posts:</h2>
            {isLoading ? <LoadingIndicator/> :
                <PostsList posts={posts} editPost={editPost} deletePost={deletePost}></PostsList>}
        </div>
    );
}

export default App;
