import React from "react";
import "./Post.css";

const Post = ({ article }) => {
  console.log(article);
  const { name, images } = article.fields;
  return (
    <div className="post">
      
      <a href="#">
        {images && (
          <img className="images" src={images.fields.file.url} alt=" test" />
        )}
      </a>
      <h2 className="tittle">{name}</h2>
    </div>
  );
};

export default Post;
