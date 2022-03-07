/* eslint-disable @next/next/no-img-element */
import React from "react";
import PostItem from "../../components/postItem";

const Index = () => {
  return (
    <>
      <div id="wrapper">
        {/* <!-- Banner -->
				<!-- Note: The "styleN" className below should match that of the header element. --> */}
        <section id="banner" className="style2">
          <div className="inner">
            <span className="image">
              <img src="/assets/images/pic07.jpg" alt="" />
            </span>
            <header className="major">
              <h1>Blog</h1>
            </header>
            <div className="content">
              <blockquote>
                &quot; Show me what you can do;
                <br />
                dont tell me what you can do &quot;
                <br />
                -- John Wooden
              </blockquote>
            </div>
          </div>
        </section>

        <div id="main">
          <section id="two" className="spotlights">
            <PostItem />
            <PostItem />
            <PostItem />
          </section>
        </div>
      </div>
    </>
  );
};

export default Index;
