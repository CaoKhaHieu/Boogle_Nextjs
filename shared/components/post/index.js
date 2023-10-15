import React from 'react';
import { calculateTimeSince, formatNumber } from '../../utils';
import Link from 'next/link';
import Image from 'next/image';

const Post = ({ post }) => {
  const userCurrent = null;
  const { _id, title, comments, likes, user, cover, description, createdAt, tags } = post;
  const countLike = formatNumber(likes);
  const countComment = formatNumber(+comments);
  const timeSince = calculateTimeSince(createdAt);

  return (
    <li key={_id} className="list-item col-4 col-lg-6 col-md-12">
      <div className="card">
        <div className="card-img">
          <Link
            href="/detail/[id]"
            as={`detail/${_id}`}
          >
            <img src={cover} alt="" className="post-image" layout='fill' />
          </Link>
        </div>
        <div className="card-body post-content">
          <a href={`/detail/${_id}`}>
            <h2 className="card-title">{title}</h2>
          </a>
          <ul className="card-tags">
            {tags.map((item) => (
              <li className="tag-item">{item}</li>
            ))}
          </ul>
          <p className="post-description" dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
        <div className="card-footer">
          <a
            href={userCurrent?.email === user?.email ? '/wall/me' : `/wall/${user?._id}`}
            className="post-creator-info"
          >
            <img
              src={
                user && user.picture
                  ? `${user.picture}`
                  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTht9-qZYmqErdGMhJVbRf7BfhLRGspNWaFnR8nddu3x7Da7nqh23vsG6VWtG_VE9G9kLU&usqp=CAU'
              }
              alt={user?.displayName}
              className="author-avatar"
            />
            <div className="author-info">
              <h4 className="card-content author-name">
                {user?.displayName ? user?.displayName : user?.lastName}
              </h4>
              <p className="card-content post-sub-info">{timeSince}</p>
            </div>
          </a>
          <div className="post-status-info">
            <div className="post-interact ">
              <p>
                {countLike} <i className="fal fa-heart"></i>
              </p>
              <p>
                {countComment} <i className="fal fa-comment"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default Post;
