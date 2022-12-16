import React from "react";
import { Article } from "../../components";
import {
blog1,
blog2,
blog3,
blog4,
blog5,
 } from "./imports.js";
import "./blog.css";

function Blog() {
  return (
    <div className="blog section__padding" id="blog">
      <div className="blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="blog-container">
      <div className="blog-container-groupA">
      <Article date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' imgUrl={blog1}/>
      </div>
      <div className="blog-container-groupB">
      <Article date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' imgUrl={blog2}/>
      <Article date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' imgUrl={blog3}/>
      <Article date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' imgUrl={blog4}/>
      <Article date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' imgUrl={blog5}/>
      </div>
      </div>
    </div>
  );
}

export default Blog;
