import React from 'react';
import BlogCards from '../components/BlogCards';
import me from '../assets/imgs/Me.png';

export default function Home({ posts }) {
  // generate cards for each post
  // const renderCards = posts.map((post) => <BlogCards post={post} />);
  console.log(posts);
  let filteredPosts = posts;
  // if not null, return a filtered array of posts
  if (filteredPosts !== null) {
    // sort by published === true
    filteredPosts = filteredPosts.filter((post) => post.published);
    // sort by newest date to oldest date
    filteredPosts = filteredPosts.sort((a, b) => {
      var dateA = new Date(a.date);
      var dateB = new Date(b.date);
      return dateB - dateA;
    });
    console.log(filteredPosts);
  }
  return (
    <div className="home">
      <div className="homeHeader">
        <div className="innerDiv d-sm-flex-col text-center">
          <img
            className="rounded-circle headerPic img-fluid"
            src={me}
            alt="Its me!"
          ></img>
          <h2 className="text-center mt-0 mb-0 font-weight-bolder">
            Stanislav Kukhniy
          </h2>
          <p className="text-center mt-1">
            Welcome to my blog! This is where I track my progress in learning
            web development, and software engineering in general.
          </p>
        </div>
      </div>
      <div
        className="d-flex justify-content-around flex-wrap text-center"
        style={{ 'margin-left': '5%', 'margin-right': '5%' }}
      >
        {filteredPosts &&
          filteredPosts.map((post) => (
            <BlogCards post={post} adminCheck={false} />
          ))}
      </div>
    </div>
  );
}
