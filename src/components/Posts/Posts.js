import React from "react";
import Post from "../Post/Post";
import "./Posts.css";

const Posts = ({posts}) => {
    return (
        <div id="container">
            {posts.map((article, index) => <Post article={article} key={index} />)}
        </div>
    )
}

export default Posts