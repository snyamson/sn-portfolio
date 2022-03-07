/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const PostItem = () => {
  //  data-position="center center"
  //   data-position="top center"
  //      data-position="25% 25%"

  return (
    <>
      <section>
        <Link href="/detail">
          <a className="image">
            <img
              src="/assets/images/pic09.jpg"
              alt=""
              data-position="top center"
            />
          </a>
        </Link>
        <div className="content">
          <div className="inner">
            <header className="major">
              <h3>Rhoncus magna</h3>
            </header>
            <p>
              Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
              magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
              urna. Maecenas massa sed magna lacinia magna pellentesque lorem
              ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus
              et sagittis tempus.
            </p>
            <ul className="actions">
              <li>
                <Link href="/detail ">
                  <a className="button">Learn more</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostItem;

PostItem.defaultProps = {};
