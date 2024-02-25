import React from 'react';
import './home.css';
import Stories from "../../components/stories/stories.js"
import Posts from "../../components/posts/posts.jsx";
import Share from "../../components/share/Share.js"

const Home = () => {
  return (
    <div>
      <Stories/>
      <Posts/>
      <Share/>
      </div>
  );
}

export default Home;

