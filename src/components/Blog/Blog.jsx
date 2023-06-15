import "./Blog.css";

import { blog1, blog2, blog3 } from "../../assets";

function Blog() {
  return (
    <section id="blog" className="pink">
      <div className="wrapper">
        <h2 className="light">Latest Posts</h2>
        <div className="content-container">
          <div className="post">
            <div className="tag">DAW</div>
            <a href="#">
              <img src={blog1} alt="" />
            </a>
            <a href="#">
              <h3>How to Use Drum Machine in Logic Pro X</h3>
            </a>
          </div>

          <div className="post">
            <div className="tag">Mixing</div>
            <a href="#">
              <img src={blog2} alt="" />
            </a>
            <a href="#">
              <h3>How to Mix Guitars Effectively</h3>
            </a>
          </div>

          <div className="post">
            <div className="tag">Vox</div>
            <a href="#">
              <img src={blog3} alt="" />
            </a>
            <a href="#">
              <h3>The Real Power of Harmonies in Music Production</h3>
            </a>
          </div>
        </div>

        <div className="btn-container">
          <a className="all-posts-btn" href="#">
            All Posts
          </a>
        </div>
      </div>
    </section>
  );
}

export default Blog;
