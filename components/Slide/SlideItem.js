import Image from 'next/image';
import React from 'react';
import Link from 'next/link'

const SlideItem = ({ post, index }) => {
  return (
    <li
      className="post-item"
      style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
    >
      <Link href={`/detail/${post?._id}`} className="post-link" passHref>
        <div className="row">
          <div className="post-image col-6 col-md-12">
            <img
              src={post?.cover}
              alt=""
            />
          </div>
          <div className="post-content col-6 col-md-12">
            <p className="post-topic">Business, Travel</p>
            <h2 className="post-title">{post?.title}</h2>
            {/* <p className="post-text-content">{post.content}</p> */}
            <div className="post-author">
              <img
                src={post?.user?.picture}
                alt=""
                className="author-avatar"
              />
              <div className="author-content">
                <p className="author-name">{post?.user?.displayName ? post?.user?.displayName : post?.user?.lastName }</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default SlideItem;
