import Link from "next/link";

const Pagination = ({ paginationPost }) => {
  const { previousPost, nextPost } = paginationPost;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ul className="pagination">
        <li>
          <Link href={`${previousPost ? `/post/${previousPost.slug}` : null}`}>
            <a className={`button small ${previousPost ? null : "disabled"}`}>
              Prev
            </a>
          </Link>
        </li>
        <li>
          <Link href={`${nextPost ? `/post/${nextPost.slug}` : null}`}>
            <a className={`button small ${nextPost ? null : "disabled"}`}>
              Next
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
